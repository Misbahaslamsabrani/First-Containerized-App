FROM alpine

LABEL maintainer="misbahaslamsabrani@gmail.com"


RUN apk add --update nodejs nodejs-npm


COPY . /src

WORKDIR /src

RUN  npm install

EXPOSE 3000

ENTRYPOINT ["node", "./src/app.js"]