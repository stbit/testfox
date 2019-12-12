ARG NODE_IMAGE=node:12

FROM ${NODE_IMAGE} as build
WORKDIR /app
COPY package.json .
RUN npm install --loglevel=error
COPY . .
RUN npm run test:unit # Запускаем прогон тестов
ENTRYPOINT ["npm", "run", "serve"]