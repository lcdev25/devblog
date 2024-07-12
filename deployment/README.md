# Local Kubernetes Setup

## Install Minikube

brew install minikube

minikube start

minikube addons enable ingress

kubectl create namespace devblog-ns

make deploy-app-local

minikube tunnel

curl 127.0.0.1/blog/test