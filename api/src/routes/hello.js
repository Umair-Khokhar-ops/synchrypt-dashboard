// src/routes/hello.js
const express = require('express');
const router = express.Router();

// GET /api/v1/hello
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, Synchrypt!' });
});

module.exports = router;
