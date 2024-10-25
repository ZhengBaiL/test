<template>
  <div class="demo">
    这是组件二
    我叫{{name}},是个{{sex}}孩,今年{{age}}
  </div>
</template>

<script>
/**
 * 组件通信:
 * 1.props 
 * 父组件：<Child xxx="aaa" bbb="ccc"></Child>
 * 子组件：
 * props:['xxx','bbb']
 * 子组件中使用时直接渲染
 */
export default {
  name:"Demo2",
  data() {
    return {

    }
  },
  
  // 1.接收父组件简单传参
  // props:['name','sex','age'],
  // 2.类型限制
  props:{
    name:String,
    sex:String,
    age:Number,
  }
  // 3.接收参数判断
  // props:{
  //   name: {
  //     type: String,
  //     required: false
  //   },
  //   sex: {
  //     type: String,
  //     required: true
  //   },
  //   age: {
  //     type: Number,
  //     required: true
  //   }
  // }
}
</script>

<style scoped>
  .demo {
    color: red;
  }
</style>