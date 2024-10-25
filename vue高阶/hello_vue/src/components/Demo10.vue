<template>
  <div class="demo10">
    <!-- 1.title传参 -->
    <h4>{{title}}撒花撒花</h4>
    <p>这是一段话这是一段话这是一段话这是一段话</p>
    <slot :holiday="holiday" name="main">主体</slot>
    <h5>我不告诉你我不告诉你我不告诉你我不告诉你</h5>
    <slot>尾部</slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      holiday:[
        '清明','五一',"五四","端午","中秋","国庆","元旦"
      ]
    }
  },
  props:['title']
 }
</script>

<style>

</style>