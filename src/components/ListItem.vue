<template>
  <div class="list-item-container">
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
      <span>@{{author}}</span>
      <span>{{pubDate}}</span>
      <div>
        <i></i>
        {{commentCount}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
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
  }
  .infos {
    font-size: 14px;
    padding-top: 15px;
    color: #666
  }
</style>