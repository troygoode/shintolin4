FROM node:8-alpine

WORKDIR /usr/src/app

COPY . .

# install OS dependencies
RUN apk add --no-cache bash
RUN apk add --no-cache curl

# install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

# install app dependencies
RUN yarn global add pm2 --prefix /usr/local
RUN yarn install

CMD pm2-dev .config/pm2.config.js

EXPOSE 3000
EXPOSE 3001
EXPOSE 3002
# hot reload support
EXPOSE 35729
