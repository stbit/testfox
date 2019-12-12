ARG NODE_IMAGE=node:12

FROM ${NODE_IMAGE} as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT ["npm", "run", "serve"]