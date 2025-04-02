const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Yug&daksh2023',
    database: 'periodic_table'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.get('/api/elements', (req, res) => {
    db.query('SELECT * FROM elements', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
