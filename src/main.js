import Vue from 'vue'
import App from './App.vue'
import router from './router_shield'
import store from './store'
import MintUI from 'mint-ui'
import './directives/index'
import './filters/index'
import 'mint-ui/lib/style.css'
import './styles/common.less'
Vue.config.productionTip = false
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
