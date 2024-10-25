<template>
  <div class="demo4">
    <button v-on:click="sendName">这是demo4按钮</button>
    <button @click="cancelSend">失效</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:"LiLi"
        }
    },
    methods: {
        sendName() {
            console.log("111")
            this.$emit("getName",this.name) 
        },
        cancelSend() {
            // 解绑：全部解绑
            // this.$off();
            // 指定解绑
            // this.$off("getName")
            // 多个解绑
            this.$off(['getName'])
        }
    }
}
</script>

<style>

</style>