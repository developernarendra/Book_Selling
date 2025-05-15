// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const cors = require('cors'); // ✅ import cors
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

module.exports = app;
