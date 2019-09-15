FROM node:12 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN yarn run install
RUN yarn run build
COPY . ./

EXPOSE 4000

CMD ["yarn", "run",  "start:prod"]