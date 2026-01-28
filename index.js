require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config');
const PORT = process.env.PORT || 3002;

const tasksRoutes = require('./routes/tasks');
const connectBBDD = require('./config/config');

const app = express();
app.use(express.json());

connectBBDD();

app.use('/task', tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});