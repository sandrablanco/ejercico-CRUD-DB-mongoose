const express = require('express');
const router = express.Router();
const tasks = require('../model/task');

//CRUD
//Create Task
router.post('/create', async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({
        message: 'Title is required'
      });
    }

    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// GET all Tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving tasks',
      error: error.message
    });
  }
});
//PUT
router.put('/id/:_id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(
    req.params._id,
    { title: req.body.title },
    { new: true }
  );
  res.json(task);
});
//DELETE
router.delete('/id/:_id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params._id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting task',
      error: error.message
    });
  }
});
  
  module.exports = router;