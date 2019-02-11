<template>
  <div class="head-nav-container">
    <router-link :to="nav.path" v-for="nav in navs" :key="nav.path" tag="a">{{nav.desc}}</router-link>
  </div>
</template>
<script>
export default {
  props: {
    navs: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="less">
  .head-nav-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 44px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    a {
      flex: 1;
      color: #999;
      text-align: center;
      border-bottom: 2px solid transparent;
      &.router-link-active {
        color: #4ee25c;
        border-color: #4ee25c;
      }
    }
  }
</style>