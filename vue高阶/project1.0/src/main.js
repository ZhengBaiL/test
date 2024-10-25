import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入Element组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 挂载组件
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
