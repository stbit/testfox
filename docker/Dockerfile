FROM node:lts-alpine3.9
WORKDIR /app
COPY package.json .
RUN npm install --loglevel=error
COPY . .
RUN npm run test:unit # Запускаем прогон тестов
ENTRYPOINT ["npm", "run", "serve"]