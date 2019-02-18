<template>
  <div class="footer-nav-container">
    <router-link to="/synthesize"><i class="iconfont icon-zixun"></i>综合</router-link>
    <router-link to="/news"><i class="iconfont icon-iconset0353"></i>动弹</router-link>
    <router-link to="/recommend"><span class="add"><i class="iconfont icon-jia"></i></span></router-link>
    <router-link to="/answer"><i class="iconfont icon-faxian"></i>发现</router-link>
    <router-link to="/mine"><i class="iconfont icon-wode"></i>我的</router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.footer-nav-container {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: #edf1e9;
  a {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
    .add {
      display: inline-block;
      background-color: #4fed3f;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      i {
        line-height: 50px;
        color: #fff;
      }
    }
    i {
      display: block;
      font-size: 32px;
      line-height: 34px;
    }
    &.router-link-active {
      color: #179512;
    }
  }
}
</style>