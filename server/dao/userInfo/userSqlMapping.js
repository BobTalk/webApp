// dao/userSqlMapping.js
// CRUD SQL语句
var user = {
  insert: 'INSERT INTO USER_INFO(USER_NAME, USER_PASSWORD,REAL_NAME) VALUES(?,?,?)',
  update: 'UPDATE USER_INFO SET USER_NAME=?, USER_PASSWORD=?,REAL_NAME=? WHERE USER_ID=?',
  delete: 'DELETE FROM USER_INFO WHERE USER_ID=?',
  select: "select * from USER_INFO WHERE USER_NAME=? OR USER_PASSWORD =?",
  queryById: 'SELECT * FROM USER_INFO WHERE USER_ID=?',
  queryAll: 'SELECT * FROM USER_INFO'
};
module.exports = user;
