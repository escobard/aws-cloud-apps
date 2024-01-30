FROM node:20.9.0

WORKDIR /usr/cloud-apps/e2e

COPY ./package.json ./

# https://playwright.dev/docs/docker
RUN npx -y playwright@1.41.1 install --with-deps

RUN npm install

COPY . ./

CMD ["npx", "playwright", "test"]