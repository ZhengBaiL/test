<template>
  <div class="demo5">
    我是一个大孩子了，上课不睡觉

  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    data() {
        return{

        }
    },
    mounted(){
        // 发布消息
       this.pubId =  pubsub.subscribe("part1",this.demo1)
        // this.$bus.$on("part1",this.demo1);
    },
    methods: {
        demo1(name,address) {
            console.log("五一去哪玩啊" + address)
        },
    },
    beforeDestroy() {
        // 取消订阅
        pubsub.unsubscribe(this.pubId)
        // this.$bus.$off();
    },
}
</script>

<style lang="scss">
.demo5 {
    width: 300px;
    height: 150px;
    background: #0f0;
    margin: 30px 0;
}
</style>