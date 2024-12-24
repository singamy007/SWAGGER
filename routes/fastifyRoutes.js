export default async function (fastify, opts) {
    fastify.post('/users', async (request, reply) => {
      const user = await User.create(request.body);
      reply.status(201).send(user);
    });
  
    fastify.get('/users', async (request, reply) => {
      const users = await User.findAll();
      reply.send(users);
    });
  
    fastify.get('/users/:id', async (request, reply) => {
      const user = await User.findByPk(request.params.id);
      if (user) reply.send(user);
      else reply.status(404).send({ error: 'User not found' });
    });
  
    fastify.put('/users/:id', async (request, reply) => {
      const user = await User.findByPk(request.params.id);
      if (user) {
        await user.update(request.body);
        reply.send(user);
      } else reply.status(404).send({ error: 'User not found' });
    });
  
    fastify.delete('/users/:id', async (request, reply) => {
      const user = await User.findByPk(request.params.id);
      if (user) {
        await user.destroy();
        reply.send({ message: 'User deleted' });
      } else reply.status(404).send({ error: 'User not found' });
    });
  }
  