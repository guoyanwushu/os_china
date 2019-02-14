<template>
  <div class="container">
    <header class="flex flex-bt flex-mid">
      <span class="flex flex-mid" @click="$router.go(-1)"><i class="iconfont icon-xiazai6"></i>返回</span>
      <span class="flex-1 center">资讯详情</span>
      <span><i class="iconfont icon-fenxiang share"></i></span>
    </header>
    <article>
      <h3>{{title}}</h3>
      <section v-html="body" class="news-content" v-preview></section>
    </article>
    <footer class="flex flex-bt flex-mid">
      <input type="text" placeholder="发表评论" class="flex-1">
      <div class="views flex flex-mid">
        <i class="iconfont icon-pinglun2"></i>
        <i class="iconfont icon-caidan_wujiaoxingkong"></i>
      </div>
    </footer>
  </div>
</template>
<script>
  import {getNewDeatil} from "../api";
  export default {
    data () {
      return {
        body: '',
        title: '',
      }
    },
    created () {
      this.getNewDeatil();

    },
    methods: {
      getNewDeatil () {
        getNewDeatil(this.$route.params.id).then(res => {
          this.body = res.body
          this.title = res.title
        })
      },
    },
    beforeRouteUpdate (to, from, next) {
      if (from.params.id !== to.params.id) {
        this.getNewDeatil();
        next();
      }
    }
}
</script>
<style lang="less" scoped>
  header {
    line-height: 44px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: #F9F9F9;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid #c5c5c5;
    .share {
      font-size: 23px;
    }
  }
  footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 44px;
    padding-left: 15px;
    padding-right: 15px;
    border-top: 1px solid #c5c5c5;
    background-color: #e5e5e5;
    input {
      line-height: 30px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #ccc;
      padding-left: 5px;
      -webkit-appearance: none;
    }
    .views {
      width: 50px;
      padding: 0 5px;
      .iconfont {
        font-size: 25px;
        color: #999;
        margin-right: 10px;
      }

    }
  }
  article {
    padding: 55px 15px 45px;
  }
  img {
    width: 100%;
  }
</style>