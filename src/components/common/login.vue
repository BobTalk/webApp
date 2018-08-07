<template>

</template>

<script>
  export default {
    name: "login",
    created() {
      var loginUrl = this.URL.BASEURL + this.URL.LOGIN.USERINFO;
      this.$axios.get(loginUrl, {}).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>
