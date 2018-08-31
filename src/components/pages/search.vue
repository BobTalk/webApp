<template>
  <div>
    <span @click="$store.dispatch('reduceAction', 1)">-</span>
    <input type="text" v-model="AA">
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
    computed: {
      ...mapGetters([
        "count"
      ]),
      ...mapState({
        AA: state => state.count
      })
    },
    created() {
      var {id} = this.$route.query;
      this.$store.state.count = id;
      console.log(id);
    },
    methods: {
      ...mapActions(['reduceAction']),
      //减
      subtraction() {
        this.$store.dispatch("reduceAction", 1);
      },
      //加
      addition() {
        this.$store.dispatch("reduceAction", -1);
      }
    }
  }
</script>

<style scoped>

</style>
