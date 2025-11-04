FROM jenkins/inbound-agent:jdk17

USER root

# Install Node.js + npm + Docker CLI + Git (dengan https helper)
RUN apt-get update && apt-get install -y \
    curl gnupg2 git git-lfs ca-certificates libcurl4-openssl-dev docker-cli unzip && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    # Install SonarScanner CLI (Java-based)
    mkdir -p /opt/sonar-scanner && \
    curl -sLo /tmp/sonar.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006.zip && \
    unzip /tmp/sonar.zip -d /opt/sonar-scanner && \
    ln -sf /opt/sonar-scanner/sonar-scanner-*/bin/sonar-scanner /usr/local/bin/sonar-scanner && \
    chmod +x /usr/local/bin/sonar-scanner && \
    rm /tmp/sonar.zip && \
    node -v && npm -v && git --version

# Pastikan PATH
ENV PATH="/usr/local/bin:/opt/sonar-scanner/sonar-scanner-5.0.1.3006/bin:${PATH}"

USER jenkins
