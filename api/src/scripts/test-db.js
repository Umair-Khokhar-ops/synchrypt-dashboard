// src/scripts/test-db.js
const pool = require('../db');

(async () => {
  try {
    const { rows } = await pool.query('SELECT NOW()');
    console.log('Postgres time:', rows[0].now);
    await pool.end();
  } catch (err) {
    console.error('DB test failed:', err);
    process.exit(1);
  }
})();
