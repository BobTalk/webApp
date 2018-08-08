var userDao = require("../dao/userInfo/userDao");
var mapping = require("../utils/dataMppingFn");
module.exports = {
  queryAllService: function (req, res, next) {
    return userDao.queryAllDao((result) => {
      res.json(mapping.mappingDicQuery(result))
    })
  },
  addUserService: function (req, res, next) {
    var param = req.body||req.params;
    return userDao.addUserInfo(mapping.mappingDicInsert(param),(res) => {
      res.json(mapping.mappingDicQuery(res))
    })
  }
};
