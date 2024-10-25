<template>
  <div id="app">
    <button @click="showTitle">点击</button>
    <input v-model="day" />
    <div @click="showMsg" ref="aaa">标签</div>
    <Demo2 name="LiLi" sex="女" :age="20"></Demo2>
    <!-- 
      组件通信：
        父组件 template标签中 ref="名称<aaa>"
              mounted() this.$refs.aaa.$on("自定义的方法名<xx>",传送的方法)
     -->
    <Demo1 ref="getMain"></Demo1>
    <!-- <button >按钮</button> -->
    <hr>
    <Demo3 ref="getThing"></Demo3>
    <hr>
    <Demo4 @getName="getName"></Demo4>
    <Demo5></Demo5>
    <Demo6></Demo6>
    <hr>
    <Demo7>
      <slot>哈哈哈哈哈</slot>
    </Demo7>
    <hr>
    <Demo8>
      <template #header>
        我是头部
      </template>
      <template v-slot:default>
        <div>
          默认的
        </div>
      </template>
      <!-- <slot>我是默认的</slot> -->
      <template #footer>
        我是尾部
      </template>
    </Demo8>
    <hr>
    <Demo9>
      <!-- <slot></slot> -->
      <template v-slot="data">
        <div>
          {{data.obj.desc}}
        </div>
      </template>
    </Demo9>
    <hr>
    <br><br><br>
    <Demo10 title="抬头看">
      <!-- <template v-slot:main="data">
        <div v-for="(item,index) in data.holiday" :key="index">
          <h5>{{item}}</h5>
        </div>
      </template> -->
      <template v-slot:main="{holiday}">
        <div v-for="(item,index) in holiday" :key="index">
          <h5>{{item}}</h5>
        </div>
      </template>
    </Demo10>
    <Demo11></Demo11>
  </div>
</template>

<script>
import Demo1 from './components/Demo1.vue';
import Demo2 from './components/Demo2.vue';
import Demo3 from './components/Demo3.vue';
import Demo4 from './components/Demo4.vue';
import Demo5 from './components/Demo5.vue';
import Demo6 from './components/Demo6.vue';
import Demo7 from './components/Demo7.vue';
import Demo8 from './components/Demo8.vue';
import Demo9 from './components/Demo9.vue';
import Demo10 from './components/Demo10.vue';
import Demo11 from './components/Demo11.vue';
// 1.引入mixin
import {mixin} from './utils/mixin';
export default {
  name:"App",
  data() {
    return {
      day:"星期三",
      happy:"开心",
      aaa:"111"
    }
  },
  // 2.注册mixin
  mixin:[mixin],
  components:{
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
    Demo6,
    Demo7,
    Demo8,
    Demo9,
    Demo10,
    Demo11
  },
  created() {
    console.log(this.day)
  },
  methods: {
    aa() {
      console.log("成功了")
    },
    showMsg() {
      console.log(this.$refs.aaa,'ref属性')
    },
    showMain() {
      alert("看屏幕")
    },
    getName(name) {
      console.log(name + '吃的真香');
    }
  },
  mounted() {
    this.$refs.getMain.$on("aab",this.aa)
    // console.log(this.$refs.xxx)
    this.$refs.getThing.$on("happy",this.showMain)
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
