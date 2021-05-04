FROM node:lts-alpine

RUN apk --update add bash nano git curl

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

RUN git clone https://github.com/likz-dev/sourced_group_toy_robot_frontend /app

# install project dependencies
RUN npm install

# build app for production with minification
RUN npm run generate

EXPOSE 80
CMD [ "http-server", "-p", "80", "dist" ]
