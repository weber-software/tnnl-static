FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY index.js ./

WORKDIR /data
COPY index.html ./

CMD [ "node", "/app/" ]
