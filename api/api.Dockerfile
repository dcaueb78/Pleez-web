FROM node:12.13.1

WORKDIR /usr/app

COPY package*.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3333

CMD yarn dev
