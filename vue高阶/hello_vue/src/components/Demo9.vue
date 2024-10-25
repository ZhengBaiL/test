<template>
  <div class="demo9">
    老六
    <slot :obj="obj">{{obj.name}}</slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      obj: {
        name:"小艾",
        desc:"上课不玩游戏了"
      }
    }
  }
 }
</script>

<style>

</style>