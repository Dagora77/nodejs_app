FROM node:19-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --network-timeout 100000

COPY ./tsconfig.build.json /app/tsconfig.build.json
COPY ./tsconfig.json /app/tsconfig.json

EXPOSE 3001

CMD ["yarn", "start"]

