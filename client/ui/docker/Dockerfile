# stage 1 - build process
FROM node:20.9.0 as builder

ARG NEXT_PUBLIC_GRAPHQL_API
ENV NEXT_PUBLIC_GRAPHQL_API=${NEXT_PUBLIC_GRAPHQL_API}

WORKDIR /usr/cloud-apps/ui

COPY ./package.json ./

RUN npm install

COPY . ./

RUN npm run build

# Stage 2 - run process
## copy the contents of the stage 1 (./build directory) to the nginx server's /usr/share/nginx/html directory
## serves the static files from the nginx server to the browser on port 3000
### behind the scenes in the nginx server, it will look for the default.conf file in the ./nginx directory
### the default.conf file will be used to configure the nginx server and route traffic from public port 80 to docker port 3000
FROM nginx
EXPOSE 3000
COPY --from=builder /usr/configuration-management/ui/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf