FROM node:19-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 100000

COPY ./tsconfig.json /app/tsconfig.json

EXPOSE 3000

CMD ["yarn", "start"]

