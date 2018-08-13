var $mysql = require("../../config/db");
var $sql = require("./userSqlMapping");
module.exports = {
  queryAllDao: (paras = {}, callback) => {
    $mysql.query($sql.queryAll, paras, function (res) {
      callback(res)
    })
  },
  addUserInfo: (params, callback) => {
    paramArr = [params.USER_NAME, params.USER_PASSWORD, params.REAL_NAME];
    $mysql.query($sql.insert, paramArr, function (res) {
      if (res) {
        callback(res)
      }
    })
  },
  deleteUserInfo: (params, callback) => {
    $mysql.query($sql.delete, [params.USER_ID], function (res) {
      callback(res)
    })
  },
  selectUserInfo: (params, callback) => {
    paramsA = [
      params.USER_NAME,
      params.USER_PASSWORD
    ];
    $mysql.query($sql.select, paramsA, function (res) {
      callback(res)
    })
  }
};
