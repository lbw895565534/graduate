<template>
    <div id="box">
        <!-- 控制数据的值切换显示隐藏 -->
        <button @click="show=!show">transition</button>
       
        <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
            <p v-show="show" class="animated" :key="1"></p>
            <p v-show="show" class="animated" :key="2"></p>
        </transition-group>
    </div>
</template>
<script>
  export default{
    data() {
      return {
        show: false
      }
    }
  }
</script>
<style scoped>
  p {
      width: 300px;
      height: 300px;
      background: red;
      margin: 10px auto;
  }
</style>