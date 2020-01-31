FROM node:12.13.1

WORKDIR /var/www/html/api

RUN yarn

EXPOSE 3333

CMD yarn dev
