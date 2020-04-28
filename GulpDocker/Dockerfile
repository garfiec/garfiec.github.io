# Pull base image.
FROM node:10.20.1

# Install Gulp version 3
RUN npm install -g gulp-cli && \
	npm install --save-dev gulp@3.9.1 jpegtran-bin@4.0.0 gulp-csso && \
	npm install optipng-bin

# Define working directory.
WORKDIR /mnt

# Add the script launcher
ADD docker-shell-launcher.sh /root/docker-shell-launcher.sh

ENTRYPOINT ["/root/docker-shell-launcher.sh"]

# New commands
# docker build -t gulp GulpDocker
# docker run --rm -v $(pwd)/:/mnt/ gulp:latest gulp [command]