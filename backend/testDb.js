const pool = require('./config/db');

pool.connect()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Connection error:', err))
  .finally(() => pool.end());

  