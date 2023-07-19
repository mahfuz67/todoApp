# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /back-end
COPY package.json /back-end
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 5000