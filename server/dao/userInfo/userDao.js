var $mysql = require("../../config/db");
var $sql = require("./userSqlMapping");
module.exports = {
  queryAllDao: (paras,callback) => {
    $mysql.query($sql.queryAll,{}, function (res) {
      callback(res)
    })
  },
  addUserInfo: (params, callback) => {
    $mysql.query($sql.insert, [params.USER_NAME, params.USER_PASSWORD, params.REAL_NAME], function (err, res) {
      /* callback(res)*/
      if (err) {
        console.log('insert err', err.message);
        return;
      }
      console.log('insert success');
    })
  }
};
