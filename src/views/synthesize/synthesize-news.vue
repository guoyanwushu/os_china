<template>
  <div class="container">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <div v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="57">
      <list-item v-for="item in newsList" v-bind="item" :key="item.id"></list-item>
    </div>
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
      async loadMore () {
        this.loading = true;
        const res = await getNewsList({pageIndex: this.pageIndex++});
        this.newsList = this.newsList.concat(res.obj_list)
        this.loading = false
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