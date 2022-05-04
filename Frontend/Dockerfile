FROM node:lts-alpine

RUN apk add --no-cache bash

RUN npm install next react react-dom

USER node

EXPOSE 8080

WORKDIR /home/node/app
