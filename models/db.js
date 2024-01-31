const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'NadilaJM',
    password:'secretpassword',
    database:'mahasiswa',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database');
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports =connection;