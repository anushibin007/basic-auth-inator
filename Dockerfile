FROM node:latest

WORKDIR /opt/basic-auth-inator

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]