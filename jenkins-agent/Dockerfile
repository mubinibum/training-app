FROM jenkins/inbound-agent:latest-jdk17

USER root

# Install Node.js, npm, Git, Docker CLI, dan SonarScanner (multi-platform)
RUN apt-get update && \
    apt-get install -y \
    curl \
    gnupg2 \
    git \
    git-lfs \
    ca-certificates \
    unzip \
    lsb-release && \
    # Install Node.js 18.x
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    # Add Docker's official GPG key
    install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg && \
    chmod a+r /etc/apt/keyrings/docker.gpg && \
    # Add Docker repository
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null && \
    # Install Docker CLI and Docker Compose plugin
    apt-get update && \
    apt-get install -y docker-ce-cli docker-compose-plugin && \
    # Install SonarScanner CLI (multi-platform)
    mkdir -p /opt/sonar-scanner && \
    curl -sLo /tmp/sonar.zip https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006-linux.zip && \
    unzip /tmp/sonar.zip -d /opt/sonar-scanner && \
    ln -sf /opt/sonar-scanner/sonar-scanner-*/bin/sonar-scanner /usr/local/bin/sonar-scanner && \
    chmod +x /usr/local/bin/sonar-scanner && \
    rm /tmp/sonar.zip && \
    # Cleanup
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    # Verify installations
    node -v && npm -v && git --version && docker --version && sonar-scanner --version

# Add SonarScanner to PATH
ENV PATH="/usr/local/bin:/opt/sonar-scanner/sonar-scanner-5.0.1.3006-linux/bin:${PATH}"

# Set Docker host
ENV DOCKER_HOST=unix:///var/run/docker.sock

USER jenkins

WORKDIR /home/jenkins/agent