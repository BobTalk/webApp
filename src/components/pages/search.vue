<template>
  <div>
    <span @click="subtraction">-</span>
    <input type="text" v-model="count">
    <span @click="addition"> +</span>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

  export default {
    name: "search",
    data() {
      return {}
    },
    computed:{
      ...mapGetters([
        "count"
      ])
    },
    methods: {
      //减
      subtraction() {
        this.$store.dispatch("reduceAction",1);
      },
      //加
      addition() {
        this.$store.dispatch("reduceAction",-1);
      }
    }
  }
</script>

<style scoped>

</style>
