# docker build -t sritherock/basic-auth-inator:latest .
# docker run -itd -p3000:3000 --name basic-auth-inator sritherock/basic-auth-inator:latest

FROM node:16.20.0-alpine3.17

WORKDIR /opt/basic-auth-inator

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]