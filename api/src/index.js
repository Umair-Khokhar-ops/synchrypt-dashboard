// src/index.js
const express = require('express');
const { port, databaseUrl } = require('./config');   // ← pulls in .env.* based on NODE_ENV

const app = express();

app.get('/', (req, res) => {
  res.send(
    `Server running on port ${port}. Database URL: ${databaseUrl}`
  );
});

app.listen(port, () => {
  console.log(
    `Server listening on port ${port} (NODE_ENV=${process.env.NODE_ENV})`
  );
});
