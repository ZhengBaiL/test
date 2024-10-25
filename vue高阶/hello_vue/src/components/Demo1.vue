<template>
  <div class="demo">
    这是组件一
    <div class="header">
      <div class="left">我是一个logo</div>
      <div class="mid">我是搜索框</div>
      <div class="right">我是登录</div>
    </div>
    <button @click="getHand">接收父组件的传参</button>
  </div>
</template>

<script>
export default {
  name:"Demo1",
  data() {
    return {

    }
  },
  methods:{
    getHand(){
      this.$emit("aab")
    }
  }
};
</script>

<style scoped lang="scss">
.demo {
  color: blue;
}
.header {
  width: 100%;
  height: 80px;
  display: flex;
  border-bottom: 1px solid #000;
  .left {
    flex: 2;
    background: #0f0;
  }
  .mid {
    flex: 5;
    background: #f0f;
  }
  .right {
    flex: 2;
    background: #0ff;
  }
}
//   .header .left {
//     flex: 2;
//     background: #0f0;
//   }

//   .header .mid {
//     flex: 5;
//     background: #f0f;
//   }

//   .header .right {
//     flex: 2;
//     background: #0ff;
//   }
</style>
