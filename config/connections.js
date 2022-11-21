const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'department_db'
  },
);

db.connect(function (err) {
  console.log('err', err)
  if (err) throw err;
});

module.exports = db;
