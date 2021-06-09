ARG NODE_VERSION

FROM ${NODE_VERSION}

RUN apt-get update && apt-get install -y inotify-tools

WORKDIR /home/node/app

ENV NODE_PATH=./build