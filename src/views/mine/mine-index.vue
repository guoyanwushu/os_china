<template>
  <div>
    <div class="content">
      This is mine HomePage
    </div>
    <foot-nav></foot-nav>
  </div>
</template>
<script>
  import HeadNav from '@components/HeadNav'
  import FootNav from '@components/FootNav'
  export default {
    data () {
      return {
      }
    },
    components: {
      FootNav
    }
  }
</script>
<style lang="less" scoped>
  .content {
    padding-top: 45px;
    padding-left: 15px;
    padding-bottom: 57px;
  }
</style>