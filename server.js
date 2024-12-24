import express from 'express';
import fastify from 'fastify';
import expressRoutes from './routes/expressRoutes.js';
import fastifyRoutes from './routes/fastifyRoutes.js';
import { setupSwagger } from './swagger.js';

// Express Setup
const app = express();
app.use(express.json());
app.use('/api', expressRoutes);
setupSwagger(app);

// Fastify Setup
const fastifyApp = fastify();
fastifyApp.register(fastifyRoutes);

// Start Express
app.listen(3000, () => {
  console.log('Express server running on http://localhost:3000');
  console.log('Swagger docs available at http://localhost:3000/api-docs');
});

// Start Fastify
fastifyApp.listen({ port: 4000 }, (err) => {
  if (err) throw err;
  console.log('Fastify server running on http://localhost:4000');
});
