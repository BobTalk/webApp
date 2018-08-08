<template>
  <div class="login">
    <div v-for="(item,index) in result" :key="index">
      <span>{{item.userName}}+" =====> "+{{item.userPassWord}}</span>
    </div>
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
    <mt-button type="primary" @click="checkData">注&nbsp;&nbsp;&nbsp;&nbsp;册</mt-button>
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
      var _this = this;
      var loginUrl = this.URL.BASEURL + this.URL.LOGIN.USERINFO;
      var params = {};
      this.$axios.get(loginUrl, params).then(res => {
        _this.result = res.data
      })
    },
    methods: {
      checkData() {
        var _this = this;
        var insertUrl = this.URL.BASEURL + this.URL.ADDUSER.ADDINFO;
        if (_this.userInfo.userName == "" || _this.userInfo.userPassWord == "") {
          return
        }
        var params = _this.userInfo;
        _this.$axios.post(insertUrl, params).then(res => {
          console.log(res.data);
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
