var dataList = require("../dic/mapping");
var mappingDic = (res) => {
  let dataArr = [];
  res.map((item, index) => {
    let dataObj = {}; //不能放到全局
    for (let key in item) {
      for (let value in dataList) {
        if (key == value.toLocaleUpperCase()) {
          dataObj[dataList[value]] = item[key]
        }
      }
    }
    dataArr.push(dataObj);
  });
  if (res.length == 0) {
    return dataObj
  } else {
    return dataArr;
  }
};
module.exports = {
  "mappingDic": mappingDic
}
