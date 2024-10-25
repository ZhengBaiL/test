<template>
  <div class="demo1">
    我是案例二
    <el-image :src="src"></el-image>
    <button @click="$router.back()">回去</button>
    <button @click="$router.push('/detail')">详情页</button>
  </div>
</template>

<script>
export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
}
</script>

<style>
    .demo2 {
        font-size: 24px;
        color: skyblue;
    }
</style>