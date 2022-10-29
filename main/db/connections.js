const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    database: 'department_db'
  },
);

db.connect(function (err) {
  console.log('err', err)
  if (err) throw err;
});

module.exports = db;
