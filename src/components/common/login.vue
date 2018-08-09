<template>
  <div class="login">
    <ul class="user-info">
      <li v-for="(item,index) in result" :key="index">
        <span>{{item.userName}}+" =====> "+{{item.userPassWord}}</span>
        <mt-button type="danger" size="small" @click="deleteData(item.userId)">删除</mt-button>
      </li>
    </ul>
    <div class="username">
      <label>用户名</label>
      <input type="text" v-model.trim="userInfo.userName">
    </div>
    <div class="password">
      <label>密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
      <input type="password" v-model.trim="userInfo.userPassWord">
    </div>
    <div class="realname">
      <label>真实名</label>
      <input type="text" v-model.trim="userInfo.realName">
    </div>
    <mt-button type="primary" @click="addData">注&nbsp;&nbsp;&nbsp;&nbsp;册</mt-button>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        result: [],
        userInfo: {
          userName: '',
          userPassWord: '',
          realName: ''
        }
      }
    },
    created() {
      this.queryAllUserInfo()
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
      //注册用户
      addData() {
        var _this = this;
        var insertUrl = this.URL.BASEURL + this.URL.ADDUSER.ADDINFO;
        if (_this.userInfo.userName == "" || _this.userInfo.userPassWord == "") {
          return
        }
        var params = _this.userInfo;
        _this.$axios.post(insertUrl, params)
          .then(res => {
            /*if (window.opener) { //刷新父级页面
              window.opener.location.reload()
            }*/
            _this.userInfo = {};
            _this.queryAllUserInfo()
          }).catch((err) => {
          console.log(err);
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
