<template>
  <div class="header">
    <mt-header fixed :title="headTitle">
        <mt-button
          icon="font icon-youjian"
          slot="left"
          @click="mailFn">
        </mt-button>
        <mt-button
          icon="font icon-sousuo"
          slot="right"
          @click="searchFn">
        </mt-button>
        <mt-search v-model="searchText">
          <mt-cell
            v-for="(item,index) in searchResult"
            :title="item.title"
            :key="index"
            :value="item.value">
          </mt-cell>
        </mt-search>
    </mt-header>
  </div>
</template>
<script>
  import MtButton from "mint-ui/packages/button/src/button";

  export default {
    components: {MtButton},
    name: "main-header",
    data() {
      return {
        headTitle: "今日头条",
        popupVisible: false,
        searchText:'',
        searchResult:[
          {
          title:"dsd",
          value:"lll"
        },
          {
          title:"dsd",
          value:"lll"
        }
        ]
      }
    },
    methods: {
      mailFn() {
        this.popupVisible = true
      },
      searchFn() {
        this.$router.push({
          path: '/search',
          query: {}
        });
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .header {
    :global(.mintui-font){
      font-size: .24rem;
    }
  }

</style>
