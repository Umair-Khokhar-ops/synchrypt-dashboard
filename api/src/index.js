// src/index.js
const express = require('express');
const { port, databaseUrl } = require('./config');
const db = require('./services/db');

const app = express();

app.get('/', (req, res) => {
  res.send(`Server running on port ${port}. DB: ${databaseUrl}`);
});

app.get('/health', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT NOW()');
    res.json({ status: 'ok', time: rows[0].now });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

app.listen(port, () =>
  console.log(`Server listening on port ${port} (NODE_ENV=${process.env.NODE_ENV})`)
);
