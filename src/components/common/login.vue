<template>
  <div class="login">
    <ul class="user-info">
      <li v-for="(item,index) in result" :key="index">
        <span>{{item.userName}}+" -> "+{{item.userPassWord}}+" -> "+{{item.realName}}</span>
        <mt-button type="danger" size="small" @click="deleteData(item.userId)">删除</mt-button>
      </li>
    </ul>
    <div class="username">
      <label>用户名</label>
      <input type="text" v-model.trim="userInfo.userName">
    </div>
    <div class="password">
      <label>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
      <input type="password" v-model.trim="userInfo.userPassWord" maxlength="10">
    </div>
    <div class="realname" v-if="loginFlag">
      <label>真实名</label>
      <input type="text" v-model.trim="userInfo.realName">
    </div>
    <mt-button v-if="loginFlag" type="primary" @click="addData('0')">注&nbsp;&nbsp;&nbsp;&nbsp;册</mt-button>
    <mt-button v-else type="primary" @click="addData('1')">登&nbsp;&nbsp;&nbsp;&nbsp;录</mt-button>
  </div>
</template>

<script>
  import base from "../../../static/utils/base.js"
  import {Toast} from 'mint-ui';

  export default {
    name: "login",
    data() {
      return {
        result: [],
        userInfo: {
          userName: '',
          userPassWord: '',
          realName: ''
        },
        loginFlag: true,
        addUserInfoFlag: null
      }
    },
    created() {
      this.queryAllUserInfo();
    },
    methods: {
      //查询所有用户信息
      queryAllUserInfo() {
        var _this = this;
        var loginUrl = this.URL.BASEURL + this.URL.LOGIN.USERINFO;
        var params = {};
        this.$axios.get(loginUrl, params).then(res => {
          _this.result = res.data
        })
      },
      //注册、登录用户
      addData(data) {
        if (data == "0") {
          this.addUserInfo()
        } else {
          this.loginUserInfo()
        }
      },
      //查登录
      loginUserInfo() {
        var _this = this;
        var selectUrl = this.URL.BASEURL + this.URL.ADDUSER.SELECTUSER;
        if (_this.userInfo.userName == "" || _this.userInfo.userName == "undefined") {
          Toast({
            message: "请输入用户名",
            position: 'middle',
            duration: 5000
          });
          return
        }
        if (_this.userInfo.userPassWord == "" || _this.userInfo.userPassWord == "undefined") {
          Toast({
            message: "请输入用户密码",
            position: 'middle',
            duration: 5000
          });
          return
        }
        var params = _this.userInfo;
        //密码加密
        params.userPassWord = base.encryptionData(_this.userInfo.userPassWord);
        _this.$axios.post(selectUrl, params).then(res => {
          _this.addUserInfoFlag = res.data.length == 0 ? true : false;
        })
      },
      //添加用户
      addUserInfo() {
        var _this = this;
        var insertUrl = this.URL.BASEURL + this.URL.ADDUSER.ADDINFO;
        if (_this.userInfo.userName == "" || _this.userInfo.userName == "undefined") {
          Toast({
            message: "请输入用户名",
            position: 'middle',
            duration: 5000
          });
          return
        }
        if (_this.userInfo.userPassWord == "" || _this.userInfo.userPassWord == "undefined") {
          Toast({
            message: "请输入用户密码",
            position: 'middle',
            duration: 5000
          });
          return
        }
        var params = _this.userInfo;
        //密码加密
        params.userPassWord = base.encryptionData(_this.userInfo.userPassWord);
        _this.$axios.post(insertUrl, params)
          .then(res => {
            /*if (window.opener) { //刷新父级页面
              window.opener.location.reload()
            }*/
            _this.userInfo = {
              userName: "",
              userPassWord: "",
              realName: ""
            };
            _this.loginFlag = !_this.loginFlag;
            _this.queryAllUserInfo()
          })
          .catch((err) => {
            Toast({
              message: err,
              position: 'bottom',
              duration: 5000
            });
          })
      },
      // 删除用户
      deleteData(userId) {
        var _this = this;
        var deleteUrl = this.URL.BASEURL + this.URL.ADDUSER.DELETEINFO;
        _this.$axios.post(deleteUrl, {userId}).then(res => {
          _this.queryAllUserInfo()
        }).catch((err) => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .login {
    font-size: .2rem;
    .user-info {
      li {
        margin: 10px 0;
      }
    }
    .username, .password, .realname, .button {
      padding: .1rem 0;
      input {
        padding-left: 10px;
        border: 1px solid #f3f3f3;
        border-radius: 3px;
      }
    }
  }
</style>
