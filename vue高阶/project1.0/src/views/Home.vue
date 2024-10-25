<template>
  <div class="home">
    这是首页
    <button @click="$router.back()">返回</button>
    <br>
    <br>
    <el-button type="success" @click.stop="goMain">表单</el-button>
    <el-button type="danger" @click="goSell">登录</el-button>
    <keep-alive :include="['vase1','vase2']">
     <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    goMain() {
        this.$router.push("/home/vase1")
    },
    goSell() {
        this.$router.push("/home/vase2")
    }
  }
};
</script>

<style></style>
