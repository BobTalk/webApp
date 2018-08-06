<template>
  <div>
    <main-header></main-header>
    <main-body></main-body>
    <main-foot></main-foot>
  </div>

</template>

<script>
  import MainHeader from "./main-header"
  import MainBody from "./main-body"
  import MainFoot from "./main-foot"

  export default {
    name: "bim",
    components: {
      MainHeader,
      MainBody,
      MainFoot
    }
  }
</script>

<style scoped>

</style>
