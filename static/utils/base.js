const CryptoJS = require('crypto-js');
const $myKey = "he1275765531@sohu.com";//密钥
const $myUtils = {};

function getAesString(data, key) {//加密
  var key = CryptoJS.enc.Utf8.parse(key);
  var encrypted = CryptoJS.AES.encrypt(data, key,
    {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  return encrypted.toString();    //返回的是base64格式的密文
}

function getDAesString(encrypted, key) {//解密
  var key = CryptoJS.enc.Utf8.parse(key);
  var decrypted = CryptoJS.AES.decrypt(encrypted, key,
    {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
  return decrypted.toString(CryptoJS.enc.Utf8);
}

//密码加密
$myUtils.encryptionData = function (data) {
  var encrypted = getAesString(data, $myKey); //密文
  CryptoJS.enc.Utf8.parse(encrypted);
  return encrypted;
};
//密码解密
$myUtils.DecryptData = function (data) {
  var decryptedStr = getDAesString(data, $myKey);
  return decryptedStr;
};
module.exports = $myUtils;
