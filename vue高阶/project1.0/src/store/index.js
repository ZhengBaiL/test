import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/***
 * vuex 小项目几乎不用
 * 状态管理库 放置公用状态
 */
export default new Vuex.Store({
  state: {
    // 放置/存储数据 
    name:"Lucy",
    address:"哈尔滨",
    count: 1
  },
  getters: {
    // 类似于computed
    newCount(state) {
      return state.count;
    }
  },
  mutations: {
    // 同步事件
    addCount(state,num) {
      state.count = state.count + num;
    },
    reduceCount(state) {
      state.count--;
    }
  },
  actions: {
    //异步事件
    asyncReduce(context) {
      setTimeout(()=>{
        context.commit("reduceCount")
      },1000)
    }
  },
  modules: {
  }
})
