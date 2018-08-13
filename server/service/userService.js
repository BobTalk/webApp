var userDao = require("../dao/userInfo/userDao");
var mapping = require("../utils/dataMppingFn");
module.exports = {
  //查询全部用户信息
  queryAllService: function (req, res, next) {
    return userDao.queryAllDao({},(result) => {
      res.json(mapping.mappingDicQuery(result))
    })
  },
  //注册用户信息
  addUserService: function (req, res, next) {
    var param = req.body || req.params;
    return userDao.addUserInfo(mapping.mappingDicInsert(param), (result) => {
      res.json(result)
    })
  },
  //删除用户信息
  deleteUserService: function (req, res, next) {
    var param = req.body || req.params;
    return userDao.deleteUserInfo(mapping.mappingDicInsert(param), (result) => {
      res.json(result)
    })
  },
  //查询用户信息
  selectUserService: function (req, res, next) {
    var param = req.body || req.params || req.query;
    return userDao.selectUserInfo(mapping.mappingDicInsert(param), (result) => {
      res.json(mapping.mappingDicQuery(result))
    })
  },
  //修改用户信息
  updateUserService: function (req, res, next) {

  }
};
