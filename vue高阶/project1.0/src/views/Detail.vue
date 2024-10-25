<template>
  <div class="detail">
    详情页
    <p>姓名:{{$route.params.name1}}</p>
    <p>年龄:{{$route.params.age1}}</p>
    <!-- 编程式导航：方便使用路由 -->
    
  <el-button type="success" @click="goVase">前进</el-button>
  <el-button type="info" @click="goBack">后退</el-button>
  <el-button type="warning" @click="goOther">跳转1</el-button>
  <el-button type="danger" @click="goList">跳转2</el-button>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params)
    },
    methods:{
        goList() {
            this.$router.push("/list/demo2");
        },
        goOther() {
            this.$router.go(-1)
        },
        goVase() {
            this.$router.forward()
        },
        goBack() {
            this.$router.back()
        }
    }
}
</script>

<style>

</style>