FROM jenkins/inbound-agent:jdk17

USER root

# Install Node.js + npm + Docker CLI + Git (dengan https helper)
RUN apt-get update && apt-get install -y \
    curl gnupg2 git git-lfs ca-certificates libcurl4-openssl-dev docker-cli && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    node -v && npm -v && git --version && which git && \
    ls /usr/lib/git-core/git-remote-https

USER jenkins
