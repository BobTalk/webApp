var express = require('express');
var router = express.Router();
var userService = require("../service/userService");
//获取所有用户信息
router.get('/', function (req, res, next) {
  userService.queryAllService(req, res, next)
});
//添加用户信息
router.post("/add", function (req, res, next) {
  userService.addUserService(req, res, next)
});
//删除用户信息
router.post("/delete", function (req, res, next) {
  userService.deleteUserService(req, res, next)
});
//查询用户信息
router.post("/select", function (req, res, next) {
  userService.selectUserService(req, res, next)
});
module.exports = router;
