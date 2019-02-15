<template>
  <div class="preview-container"  @click="clickHandle" v-if="show" @scroll.stop ref="container">
    <img :src="url" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      url: ''
    }
  },
  methods: {
    clickHandle: function () {
      this.show = false
    }
  },
  mounted () {
    console.log(this.$refs.container);
    this.$refs.container.addEventListener('touchmove', function (event) {
      event.stopPropagation()
    })
  }
}
</script>
<style lang="less" scoped>
  .preview-container {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 999;
    img {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(0, -50%);
      width: 100%;
    }
    .download {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      .iconfont {
        font-size: 40px;
      }
    }
  }
</style>