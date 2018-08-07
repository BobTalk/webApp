var dataList = require("../dic/mapping");
var mappingDic = (res) => {
  var dataArr = res.map((item, index) => {
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
  return dataArr;
};
module.exports = {
  "mappingDic": mappingDic
}
