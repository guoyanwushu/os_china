<template>
  <div>
    <list-item v-for="item in newsList" v-bind="item" :key="item.id"></list-item>
  </div>
</template>
<script>
  import {getNewsList} from "../../api";
  import ListItem from '@components/ListItem.vue'
  export default {
    data () {
      return {
        newsList: []
      }
    },
    created () {
      getNewsList().then(res => {
        this.newsList = res.newslist
      })
    },
    components: {
      ListItem
    }
  }
</script>
<style lang="less">
</style>