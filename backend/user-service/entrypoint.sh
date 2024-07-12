#!/bin/bash

JAVA_OPTS=${JAVA_OPTS:-"-Xms256m -Xmx512m"}

exec java -jar $JAVA_OPTS service.jar
