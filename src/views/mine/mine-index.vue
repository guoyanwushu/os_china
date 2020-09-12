<template>
  <div class="mine-container">
    <header class="flex flex-mid">
      <span><i class="iconfont icon-touxiang photo"></i></span>
      <span class="flex-1">点击头像登录</span>
      <div>
        <span class="setting"><i class="iconfont icon-shezhi2"></i></span>
        <span class="qrcode"><i class="iconfont icon-ico"></i></span>
      </div>
    </header>
    <section class="person-info">

    </section>
    <ul class="about flex flex-bt">
      <li>
        <p class="num">{{0}}</p>
        <p class="title">动弹</p>
      </li>
      <li>
        <p class="num">{{0}}</p>
        <p class="title">收藏</p>
      </li>
      <li>
        <p class="num">{{0}}</p>
        <p class="title">关注</p>
      </li>
      <li>
        <p class="num">{{0}}</p>
        <p class="title">粉丝</p>
      </li>
    </ul>
    <div class="options">
      <ul>
        <li>
          <mt-cell
            title="我的消息"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
        <li>
          <mt-cell
            title="我的勋章"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
        <li>
          <mt-cell
            title="阅读记录"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
        <li>
          <mt-cell
            title="我的博客"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
        <li>
          <mt-cell
            title="我的问答"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
        <li>
          <mt-cell
            title="我的投递"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
        <li>
          <mt-cell
            title="我的消息"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
        <li>
          <mt-cell
            title="我的消息"
            to="//github.com"
            is-link >
          </mt-cell>
        </li>
      </ul>
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
  header {
    padding: 0 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    height: 60px;
    background-color: #5EC467;
    .iconfont {
      font-size: 30px;
    }
    .photo {
      font-size: 40px;
      padding-right: 10px;
    }
    .setting {
      padding-right: 20px;
    }
  }
  .content {
    padding-top: 45px;
    padding-left: 15px;
    padding-bottom: 57px;
  }
  .person-info {
    height: 260px;
    background-color: #5EC467;
  }
  .about {
    padding: 10px ;
    color: #fff;
    background-color: #20BD56;
    justify-content: space-around;
    p {
      text-align: center;
    }
    .num {
      font-size: 20px;
    }
  }
</style>