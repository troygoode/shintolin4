FROM node:8-alpine

WORKDIR /usr/src/app

COPY . .

# install OS dependencies
RUN apk add --no-cache bash
RUN apk add --no-cache curl
RUN apk add --no-cache ncurses

# install Flow dependencies
RUN apk --no-cache add ca-certificates wget && \
    wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub && \
    wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-2.25-r0.apk && \
    apk add glibc-2.25-r0.apk

# install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# install app dependencies
RUN yarn global add pm2 --prefix /usr/local
RUN yarn install

CMD pm2-dev .config/pm2.config.js
