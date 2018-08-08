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
db.query = function (sqlCall, callback) {
  var connection = mysql.createConnection(mysqlConfig);
  connection.connect((err) => {
    if (err) {
      console.log(err);
      return
    }
  });
  let sql = sqlCall;
  if (!sql) {
    return
  }
  connection.query(sql, function (err, rows, fields) {
    if (err) {
      console.log(err);
      return
    }
    callback(rows);
  });
  connection.end(function (err) {
    if (err) {
      console.log(err);
      return
    } else {
      console.log("链接关闭");
    }
  })
};
/*db.insert = function (sqlCall, callback) {
  var connection = mysql.createConnection(mysqlConfig);
  connection.query(sql, params, function (error, results, fields) {
    if (error) throw error;
    callback(results.insertId);//返回插入的id
  });
};*/
module.exports = db;
