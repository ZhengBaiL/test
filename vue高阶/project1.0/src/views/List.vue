<template>
  <div class="list">
    这是列表页
    {{$route.query.names}}
    <div class="list-nav">
        <router-link class="tabs" to="/list/demo1">demo1</router-link>
        <router-link class="tabs" to="/list/demo2">demo2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        console.log(this.$route.query)

    }
}
</script>

<style scoped>
    .list-nav {
        width: 100%;
        height: 60px;
        border: 1px solid #f00;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .list-nav .tabs {
        width: 70px;
        height: 35px;
        background: #ff0;
        color: #f00;
    }
    .active {
        background: #fff;
        color: #00f;
    }
</style>