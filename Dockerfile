FROM node:16

WORKDIR ./

COPY package*.json ./

RUN npm install -g

COPY . .
EXPOSE 8000
CMD [ "node", "app.js" ]
