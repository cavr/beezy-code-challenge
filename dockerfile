# Stage 1 - the build process
FROM node:12 as build-deps
EXPOSE 4000
WORKDIR /usr/src/app
COPY package.json ./
COPY . ./
RUN yarn run install
RUN yarn run build
COPY . ./
RUN chmod 777 /usr/src/app/start.sh
CMD sh -C '/usr/src/app/start.sh'