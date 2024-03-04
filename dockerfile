FROM node:20.11.0

WORKDIR /app
EXPOSE 3000

COPY package.json ./
RUN touch .env

RUN set -x && yarn

COPY . .

CMD ["yarn", "start:dev"]