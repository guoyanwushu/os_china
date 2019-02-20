<template>
  <div class="container">
    <header class="flex flex-bt flex-mid">
      <span class="flex flex-mid" @click="$router.go(-1)"><i class="iconfont icon-xiazai6"></i>返回</span>
      <span class="flex-1 center">资讯详情</span>
      <span><i class="iconfont icon-fenxiang share"></i></span>
    </header>

    <article>
      <h3>{{content.title}}</h3>
      <div class="author flex flex-mid">
        <img :src="author.portrait" alt="">
        <div>
          <p>{{author.name}}</p>
          <p>{{content.pub_date}}</p>
        </div>
      </div>
      <section v-html="content.body" class="news-content" v-preview></section>
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
        content: {},
        pub_date:'',
        author: {}
      }
    },
    beforeMount() {
    },
    created () {
      this.getNewDeatil();
    },
    mounted () {
    },
    methods: {
      getNewDeatil () {
        getNewDeatil(this.$route.params.id).then(res => {
          this.content = res.obj_data;
          this.author = res.obj_data.author
          console.log(this.content.title)
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
  .author {
    padding: 10px 0;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
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
  .news-content{
    line-height: 1.8;
    /deep/ p {
      padding-bottom: 5px;
      white-space: normal;
      word-break: break-all;
    }
    /deep/ a {
      color: #4183c4;
      white-space: normal;
      word-break: break-all;
    }
    /deep/ img {
      max-width: 100%;
    }
    /deep/ pre {
      display: block;
      font-size: 13px;
      line-height: 1.6;
      background: #f6f6f6;
      margin: 16px 0 14px;
      padding: 14px 15px 12px;
      border-radius: 3px;
      border: none;
      border-left: 3px solid #ccc;
    }
    /deep/ ul, ol {
      margin: 0;
      padding: 0 0 0 2.5em;
      list-style-type: disc;
      li {
        list-style-type: disc;
      }
    }
  }
</style>