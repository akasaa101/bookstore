import { Queue, Worker } from 'bullmq';

const myQueue = new Queue('myqueue', { connection: {
  host: "redis",
  port: 6379
}});

myQueue.client.on('connect', () => {
  console.log('Connected to Redis!');
});

if (myQueue.isConnected()) {
  console.log('Queue is connected to Redis!');
}

const myWorker = new Worker('myworker', async (job) => {}, { connection: {
  host: "redis",
  port: 6379
}});

myWorker.client.on('connect', () => {
  console.log('Worker connected to Redis!');
});

if (myWorker.isConnected()) {
  console.log('Worker is connected to Redis!');
}
