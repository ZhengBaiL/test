<template>
  <div class="demo3">
    <button @click="getHaHa">这是Demo3</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getHaHa() {
            this.$emit("happy");
        }
    }
}
</script>

<style lang="scss">

</style>