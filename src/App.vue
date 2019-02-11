<template>
  <div id="app">
    <div class="content">
      <router-view/>
    </div>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
  import FootNav from '@components/FootNav.vue'
  export default {
    components: {
      FootNav
    }
  }
</script>
<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 44px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
