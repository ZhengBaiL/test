// 引入Vue 第三方库
import Vue from 'vue'
// 引入APP页面
import App from './App.vue'
// 规避生产报错
Vue.config.productionTip = false
// 引入mixin
import {mixin} from './utils/mixin'
// 挂载mixin
Vue.mixin(mixin);
// 实例化Vue
new Vue({
  // 渲染页面
  render: h => h(App),
  // 全局事件总线
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
