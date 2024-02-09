FROM node:20.9.0

ARG NEXT_PUBLIC_GRAPHQL_API
ENV NEXT_PUBLIC_GRAPHQL_API=${NEXT_PUBLIC_GRAPHQL_API}

WORKDIR /usr/aws-cloud-apps/ui

COPY ./package.json ./

RUN npm install --omit=dev

COPY . ./

RUN npm run build

CMD [ "npm", "run", "start" ]