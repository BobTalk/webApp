<template>

</template>

<script>
  export default {
    name: "login",
    created() {
      var loginUrl = this.URL.BASEURL + this.URL.LOGIN.USERINFO;
      var params = {};
      this.$axios.get(loginUrl, params).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>
