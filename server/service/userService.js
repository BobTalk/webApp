var userDao = require("../dao/userInfo/userDao");
var mapping = require("../utils/dataMpping")
module.exports = {
  queryAllService: function (req, res, next) {
    return userDao.queryAllDao((result) => {
      res.json({
        data: mapping.mappingDic(result),
        meta: {},
        code: '1'
      })
    })
  }
};
