<template>
 
</template>

<script>
  export default {
    name: "login",
    created() {
      this.$axios.get("http://127.0.0.1:3000/users", {}).then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>

</style>
