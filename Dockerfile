FROM node:8.10.0

RUN apt-get update

RUN mkdir /app/
WORKDIR /app/

RUN npm install

EXPOSE 8080

CMD ["sleep","365d"]

