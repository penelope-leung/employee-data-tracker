const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'department_db'
  },
);
db.connect(function (err) {
  if (err) throw err;
});

module.exports = db;
