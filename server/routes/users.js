var express = require('express');
var router = express.Router();
var userService = require("../service/userService");
/* GET users listing. */
router.get('/', function (req, res, next) {
  userService.queryAllService(req, res, next)
});
router.post("/add", function (req, res, next) {
  userService.addUserService(req, res, next)
});

module.exports = router;
