FROM node:18
WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . ./

ENV PORT 3291
EXPOSE ${PORT}
