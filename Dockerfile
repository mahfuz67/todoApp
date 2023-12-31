FROM node:18-alpine
WORKDIR /back-end
COPY package.json /back-end
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
EXPOSE 5000