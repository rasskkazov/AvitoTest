FROM node:latest

WORKDIR '/app'

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 7070

ENTRYPOINT ["npm", "run", "start"]



