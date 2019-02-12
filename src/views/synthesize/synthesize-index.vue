<template>
  <div>
    <head-nav :navs="headNavArray"></head-nav>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
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
        headNavArray: [{
          path: '/synthesize/eng',
          desc: '英文'
        }, {
          path: '/synthesize/news',
          desc: '资讯'
        }, {
          path: '/synthesize/recommends',
          desc: '推荐'
        }, {
          path: '/synthesize/questions',
          desc: '问答'
        }, {
          path: '/synthesize/blog',
          desc: '博客'
        }]
      }
    },
    components: {
      HeadNav,
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