<template>
  <div class="list-item-container" @click="linkToDetail">
    <div class="title">
      <img src="" alt="" v-if="headPhoto" class="headPhoto">
      <div v-if="tags">
        <i v-for="item in tags" :class='["icon-font", item]'>
        </i>
      </div>
      <span><strong>{{title}}</strong></span>
    </div>
    <div class="content"></div>
    <div class="infos">
      <div class="detail">
        <span>@{{author}}</span>
        <span>{{pubDate}}</span>
      </div>
      <div class="comment">
        <i class="iconfont icon-pinglun"></i>
        {{commentCount}}
      </div>
    </div>
  </div>
</template>
<script>
  import {getNewDeatil} from "../api";

  export default {
    props: {
      id: {
        required: true
      },
      headPhoto: {
        type: String
      },
      tags: {
        type: Array
      },
      title: {
        type: String,
        required: true
      },
      descContent: {
        type: String
      },
      author: {
        type: String,
        required: true
      },
      commentCount: {
        type: Number,
        default: 0
      },
      pubDate: {
        type: String,
        required: true
      }
    },
    methods: {
      linkToDetail () {
        this.$router.push(`/newDetail/${this.id}`);
      }
    }
}
</script>
<style lang="less" scoped>
  .title {
    padding-bottom: 15px;
  }
  .list-item-container {
    padding: 15px 15px 15px 0;
    border-bottom: 1px solid #ccc;
    &:last-child {
      border-bottom-color: transparent;
    }
  }
  .infos {
    font-size: 14px;
    padding-top: 15px;
    color: #a7a7a7;
    display: flex;
    align-items: center;
    i.iconfont {
      font-size: 14px;
    }
    .detail {
      flex: 1;
      span {
        padding-right: 5px;
      }
    }
  }
</style>