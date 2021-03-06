// config/db.js
// MySQL数据库联接配置
let mysql = require("mysql");
let db = {};
let mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'hyq_test',
  port: 3306
};
db.query = function (sqlCall, paras = {}, callback) {
  var connection = mysql.createConnection(mysqlConfig);
  connection.connect((err) => {
    if (err) {
      throw new Error(err);
      return
    }
  });
  let sql = sqlCall;
  if (!sql) {
    return
  }
  connection.query(sql, paras, function (err, rows, fields) {
    if (err) {
      throw new Error(err);
      return
    }
    callback(rows);
  });
  connection.end(function (err) {
    if (err) {
       throw new Error(err);
      return
    } else {
      console.log("链接关闭");
    }
  })
};
module.exports = db;
