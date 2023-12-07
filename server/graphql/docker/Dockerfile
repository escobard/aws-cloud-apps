FROM node:20.9.0-alpine
WORKDIR /usr/cloud-apps/graphql

ARG DB_HOST
ARG DB_PORT
ARG DB_NAME
ARG DB_USER
ARG DB_PASSWORD

ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_NAME=${DB_NAME}
ENV DB_USER=${DB_USER}
ENV DB_PASSWORD=${DB_PASSWORD}

COPY ./ ./

RUN npm install --only=prod

CMD ["npm", "run", "start"]
