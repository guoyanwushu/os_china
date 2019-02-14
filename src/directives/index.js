import Vue from 'vue'
import ImagePreview from '../components/ImagePreview'
/* 图片单独窗口浏览指令 */
Vue.directive('preview', {
  inserted: function (el) {
    el.addEventListener('click', function (event) {
      var url = event.target.getAttribute('src');
      if (url) {
        var Preview = Vue.extend(ImagePreview)
        const PrviewInst = new Preview({
          el: document.createElement('div'),
          data () {
            return {
              url: url,
              show: true
            }
          }
        })
        document.body.appendChild(PrviewInst.$el)
      }
    })
  }
})