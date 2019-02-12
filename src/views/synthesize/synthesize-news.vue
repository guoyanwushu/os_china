<template>
  <div v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="57">
    <list-item v-for="item in newsList" v-bind="item" :key="item.id"></list-item>
  </div>
</template>
<script>
  import {getNewsList} from "../../api";
  import ListItem from '@components/ListItem.vue'
  export default {
    data () {
      return {
        loading: false,
        newsList: [],
        pageIndex: 1,
      }
    },
    /*created () {
      getNewsList({pageIndex: this.pageIndex++}).then(res => {
        this.newsList = res.newslist
      })
    },*/
    methods: {
      loadMore () {
        this.loading = true;
        getNewsList({pageIndex: this.pageIndex++}).then(res => {
          this.newsList = this.newsList.concat(res.newslist)
          this.loading = false
        })
      }
    },
    components: {
      ListItem
    },
    deactivated () {
      this.loading = true
    },
    activated () {
      this.loading = false
    }
  }
</script>
<style lang="less">
</style>