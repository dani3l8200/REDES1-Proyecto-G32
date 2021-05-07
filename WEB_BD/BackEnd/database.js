const mysql = require('mysql');

const connection = mysql.createPool({
  host : "localhost",
  port: 3306,
  database: "proyectoRedes",
  user: "root",
  password: "dbsamines"
});

module.exports = connection;
