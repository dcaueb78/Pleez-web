FROM node:12.13.1

WORKDIR /var/www/html/app

RUN yarn

EXPOSE 3000

CMD yarn start
