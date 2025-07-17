// src/config.js
const path = require('path');
const env = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: path.resolve(__dirname, `../.env.${env}`)
});

module.exports = {
  port: parseInt(process.env.PORT, 10),
  databaseUrl: process.env.DATABASE_URL,
};
