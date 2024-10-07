const express = require('express');
const cors = require('cors');
const mysql = require('mysql');  // Change this to `pg` for PostgreSQL

const app = express();
app.use(cors());
app.use(express.json());

// Set up connection to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database_name',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

// API endpoint to fetch data from MySQL
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM your_table';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
