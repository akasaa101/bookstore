FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .
RUN npm run build
ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

CMD ["npm", "run", "start:prod"]