<template>
  <div class="footer-nav-container">
    <router-link to="/synthesize"><i class=""></i>综合</router-link>
    <router-link to="news"><i class=""></i>动弹</router-link>
    <router-link to="/recommend"><i class=""></i>综合</router-link>
    <router-link to="/answer"><i class=""></i>发现</router-link>
    <router-link to="/blog"><i class=""></i>我的</router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
.footer-nav-container {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
  a {
    flex: 1;
    line-height: 44px;
    text-align: center;
  }
}
</style>