var dataList = require("../dic/mapping");
//返回前端 调用
var mappingDicQuery = (res) => {
  return res.map((item, index) => {
    var dataObj = {}; //不能放到全局
    for (var key in item) {
      for (var value in dataList) {
        if (key == value.toLocaleUpperCase()) {
          dataObj[dataList[value]] = item[key]
        }
      }
    }
    return dataObj
  });
};
//修改 添加数据库时调用
var mappingDicInsert = (res) => {
  var newData = {};
  for (var item in res) {
    for (var key in dataList) {
      if (item == dataList[key]) {
        newData[key] = res[item]
      }
    }
  }
  return newData
};
module.exports = {
  "mappingDicQuery": mappingDicQuery,
  "mappingDicInsert": mappingDicInsert
};
