import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局
import './styles/index.less'
// 加载vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 加载rem适配
import 'amfe-flexible'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
