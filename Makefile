DOCKER_REGISTRY := your-docker-registry
HELM_APP_RELEASE_NAME := devblog-rel-1
HELM_INFRA_RELEASE_NAME := devblog-rel-1-infra
HELM_CHART_NAME := Chart.yaml
KIND_CLUSTER_NAME := test
MICROSERVICES := blog-service

MICROSERVICE ?= all

.PHONY: destroy-app-local
destroy-app-local:
	helm uninstall $(HELM_APP_RELEASE_NAME)

.PHONY: deploy-infra-local
deploy-infra-local:
	@echo "Updating Helm deployment Infra..."; \
	helm upgrade --install $(HELM_INFRA_RELEASE_NAME) ./deployment/infra

.PHONY: deploy-app-local
deploy-app-local:
ifeq ($(MICROSERVICE), all)
	for ms in $(MICROSERVICES); do \
		$(MAKE) deploy-microservice MICROSERVICE=$$ms; \
	done
else
	$(MAKE) deploy-microservice MICROSERVICE=$(MICROSERVICE)
endif

.PHONY: deploy-microservice
deploy-microservice: package-backend build-docker-image port-forward

.PHONY: package-backend
package-backend:
	@echo "Building $(MICROSERVICE)..."; \
	cd ./backend/$(MICROSERVICE) && mvn clean install; \
	cd -

.PHONY: build-docker-image
build-docker-image:
	UUID=$$(uuidgen); \
	echo "Building Docker image for $(MICROSERVICE) with tag $(UUID)"; \
	docker build -t $(MICROSERVICE):$$UUID -t $(MICROSERVICE):latest ./backend/$(MICROSERVICE); \
	$(MAKE) load-kind-image UUID=$$UUID MICROSERVICE=$(MICROSERVICE); \
	$(MAKE) update-helm UUID=$$UUID MICROSERVICE=$(MICROSERVICE)

.PHONY: load-kind-image
load-kind-image:
	@echo "Loading Docker image into KinD cluster for $(MICROSERVICE) with tag $(UUID)..."; \
	kind load docker-image $(MICROSERVICE):$(UUID) --name $(KIND_CLUSTER_NAME)

.PHONY: update-helm
update-helm:
	@echo "Updating Helm deployment for $(MICROSERVICE) with image tag $(UUID)..."; \
	helm upgrade --install --set $(MICROSERVICE).image.tag=$(UUID) $(HELM_APP_RELEASE_NAME) ./deployment/app

.PHONY: port-forward
port-forward:
	@echo "Starting port forward..."; \
	kubectl port-forward svc/default-$(HELM_APP_RELEASE_NAME)-nginx-ingress 8080:80