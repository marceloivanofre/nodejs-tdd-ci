FROM node:12.16.2-alpine

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/node-tdd/

WORKDIR $HOME/node-tdd

RUN npm install

COPY . $HOME/node-tdd

CMD [ "npm", "start" ]
