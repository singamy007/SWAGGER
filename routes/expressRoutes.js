import express from 'express';
import User from '../models/user.js';

const expressRouter = express.Router();

// Create a new user
expressRouter.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
expressRouter.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// Get a single user
expressRouter.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: 'User not found' });
});

// Update a user
expressRouter.put('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else res.status(404).json({ error: 'User not found' });
});

// Delete a user
expressRouter.delete('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.json({ message: 'User deleted' });
  } else res.status(404).json({ error: 'User not found' });
});

export default expressRouter;
