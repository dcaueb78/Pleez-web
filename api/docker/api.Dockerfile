#!/bin/sh
FROM node:12.13.1

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN yarn

COPY --chown=node:node . .

EXPOSE 3333

# RUN yarn sequelize db:migrate

CMD yarn dev
