// src/index.js
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('API server is running'));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
