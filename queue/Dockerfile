FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm ci --only=production

COPY src/ /app/src/
COPY wait-for-redis.sh .
RUN chmod +x wait-for-redis.sh

EXPOSE 6379

CMD ["node", "src/worker.js"]
