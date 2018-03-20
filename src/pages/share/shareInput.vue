<template>
  <div class="container">
    <div class="container_picture">
      <div class="picture">
          <img src="" alt="">
      </div>
    </div>
    <div class="container_name">
      <div class="name" type="text"></div>
    </div>
    <hr>
    <div class="conatiner_info">
      <div class="box_info">
        <div class="info" contenteditable= "true" placeholder="请输入简介"></div>
      </div>
    </div>
    <hr>
    <div class="container_step">
      <div class="step">

      </div>
    </div>
  </div>
</template>
<script>
  export default {
    
  }

</script>
<style scoped>
  hr {
    width: 90%;
    size: 1px;
    margin: 0 auto;
  }
  .container_picture {
    width: 100%;
    height: 225px;
    background: #999;
  }
  
  .container_name {
    width: 100%;
    height: 48px;
  }

  .name {
    height: 34px;
    width: 80%;
    line-height: 48px; 
    border: 1px solid #999;
    margin: 0 auto;
    position: relative;
    top: 6px;
  }

  .conatiner_info{
    width: 100%;
  }
  .box_info {
    width: 90%;
    height: auto;
    margin: 0 auto;
  }
  .info {
    width: 100%;
    min-height: 30px;
    max-height: 245px;
    line-height: 30px;
    font-size: 20px;
    color: #999;
    overflow: scroll;
    overflow-x: hidden;
    outline: none;
  }
  .conatiner_step{
    width: 100%;
    height: 
  }
</style>
