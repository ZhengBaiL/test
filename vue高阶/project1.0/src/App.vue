<template>
  <div id="app">
    <h2>路由</h2>
    <!-- 跳转路由标签 => a标签 -->
    <h3>跳转标签</h3>
    <div class="nav">
      <!-- params传参 -->
      <!-- <router-link active-class="active" :to="{
        name:'detail',
        params: {
          name1:'Lucy',
          age1: 10
        }
      }">去详情</router-link> -->
      <router-link active-class="active" to="/detail/小A/10" >去详情</router-link>
      <router-link active-class="active" to="/home">去首页</router-link>
      <!-- <router-link active-class="active" :to="{name:'home'}"
        >去首页</router-link
      > -->
      <!-- query传参 -->
      <!-- <router-link active-class="active" :to="{
        path:'/list',
        query:{
          names: '小郑',
          age: 30
        }
      }" >去列表</router-link> -->
       <router-link active-class="active" :to="`/list?names=小郑&age=30`" >去列表</router-link>
    </div>
    <!-- 占位显示 -->
    <h3>显示位置</h3>
    <div class="main">
      <router-view></router-view>
    </div>
    <hr />
    <h2>Vuex</h2>
    <!-- 
      State:
        1.this.$store.state.xxx 在生命周期，或者适当的方法中
        2.$store.state.xxx 在template模板中
        3.引入mapState 在computed中 ...mapState(['xxx'])
     -->
    <p>1.名字{{ name1 }},来自{{ address1 }}</p>
    <p>2.名字{{ $store.state.name }},来自{{ $store.state.address }}</p>
    <p>3.名字{{ name }},来自{{ address }}</p>
    <hr />
    <!-- 
      Getters
        1.this.$store.getters.xxx 在生命周期，或者适当的方法中
        2.$store.getters.xxx 在template模板中
        3.引入mapGetters 在computed中 ...mapGetters(['xxx']
     -->
    <p>1.数值：{{ count1 }}</p>
    <p>2.数值：{{ $store.getters.newCount }}</p>
    <p>2.数值：{{ newCount }}</p>
    <hr />
    <!-- 
      Mutations 同步
        1.this.$store.commit("对应的方法",传参)
        2.
          引入mapMutations 
          解构 ...mapMutations(['xxx'],['xxx']....)
          使用：this.xxx()
     -->
    <!-- 
      Actions 异步
        定义：
          方法名(context) {
            context.commit("调用的同步方法")
          }
        1.this.$store.commit("对应的方法")
        2.
          引入mapActions
          解构 ...mapActions(['xxx'],['xxx']....)
          使用：this.xxx()
     -->
    <button @click="add">添加</button>
    <br /><br />
    <button @click="reduce">递减</button>
    <h2>组件库</h2>
    <el-button type="primary">主要按钮</el-button>
    <el-carousel indicator-position="outside" :autoplay="false">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <!-- <h3>{{ item.imgUrl }}</h3> -->
        <img :src="item.imgUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <hr />
    <el-table :data="tableData" style="width: 80%">
      <el-table-column prop="prodName" label="商品名称"> </el-table-column>
      <el-table-column prop="price" label="商品价格" width="180">
      </el-table-column>
      <el-table-column prop="brief" label="商品描述"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
// import {mapMutations} from 'vuex';
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      bannerList: [],
      tableData: [],
      name1: "",
      address1: "",
      count1: null,
    };
  },
  created() {
    this.init();
    console.log(this.$store, "222");
    this.name1 = this.$store.state.name;
    this.address1 = this.$store.state.address;
    this.count1 = this.$store.getters.newCount;
  },
  computed: {
    ...mapState(["name", "address"]),
    ...mapGetters(["newCount"]),
  },
  methods: {
    init() {
      // 走马灯
      axios
        .get("http://shop-api.edu.koobietech.com/indexImgs")
        .then((res) => {
          this.bannerList = res.data.data;
        })
        .catch((err) => {
          console.log(err, "失败");
        });
      // 表格
      axios
        .get("http://shop-api.edu.koobietech.com/prod/tagProdList")
        .then((res) => {
          this.tableData = res.data.data[0].productDtoList;
          console.log(this.tableData, "res");
        })
        .catch((err) => {
          console.log(err, "失败");
        });
    },
    add() {
      this.$store.commit("addCount", 10);
    },
    // 同步
    // ...mapMutations(['reduceCount']),
    // 异步
    ...mapActions(["asyncReduce"]),
    reduce() {
      // 同步
      // this.reduceCount();
      // this.$store.commit("reduceCount");
      // 异步
      this.$store.dispatch("asyncReduce");
      // this.asyncReduce()
    },
  },
};
</script>
<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.active {
  color: red;
  padding: 20px;
  border: 1px solid #000;
}
.nav {
  width: 500px;
  height: 100px;
  border: 1px solid plum;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main {
  width: 800px;
  height: 800px;
  border: 1px solid yellowgreen;
}
</style>
