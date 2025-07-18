// src/index.js
const express = require('express');
const { port, databaseUrl } = require('./config');
const db = require('./services/db');

const app = express();

// parse JSON bodies
app.use(express.json());

// root info route
app.get('/', (req, res) => {
  res.send(`Server running on port ${port}. DB: ${databaseUrl}`);
});

// full database health check
app.get('/health', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT NOW()');
    res.json({ status: 'ok', time: rows[0].now });
  } catch (err) {
    res.status(500).json({ status: 'error', error: err.message });
  }
});

// lightweight readiness probe
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// mount versioned API routes
const helloRouter = require('./routes/hello');
app.use('/api/v1', helloRouter);

// only start listening if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Server listening on port ${port} (NODE_ENV=${process.env.NODE_ENV})`
    );
  });
}

module.exports = app;
