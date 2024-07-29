#FROM docker.repo.local.sfdc.net/sfci/onejdk/salesforcejdk/sfdc_rhel9_onejdk21:11
FROM eclipse-temurin:21

RUN groupadd --system --gid 7447 nonroot
RUN adduser --system --gid 7447 --uid 7447 --shell /bin/bash --home /home/nonroot nonroot

WORKDIR /home/nonroot
RUN chown -R nonroot:nonroot .

COPY --chown=nonroot:nonroot target/*.jar service.jar
COPY --chown=nonroot:nonroot entrypoint.sh entrypoint.sh

USER nonroot:nonroot

ENV server.port=8025 management.server.port=8026

EXPOSE 8025 8026

ENTRYPOINT ["./entrypoint.sh"]
