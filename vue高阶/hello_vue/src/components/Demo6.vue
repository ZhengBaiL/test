<template>
  <div class="demo6">
    今天是星期日
    <button @click="send">发送</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    data() {
        return {
            address:"洛阳"
        }
    },
    methods:{
        send() {
            //订阅消息
            pubsub.publish("part1",this.address)
            console.log(this.address)
            // this.$bus.$emit("part1",this.address);
        }
    }
}
</script>

<style lang="scss">
.demo6 {
    width: 300px;
    height: 250px;
    background: #ff0;
    margin: 30px 0;
}
</style>