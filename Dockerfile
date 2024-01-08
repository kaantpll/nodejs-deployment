FROM node:18-alpine

WORKDIR /src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "node", "dist/src/index.js" ]