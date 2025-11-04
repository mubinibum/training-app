FROM jenkins/jenkins:lts-jdk17

USER root

RUN apt-get update && \
    apt-get install -y git git-lfs ca-certificates curl libcurl4-openssl-dev && \
    git --version && which git

USER jenkins
