<template>
    <div class="program_box" >
      <div class="program_container" >
        <img class="program_pic" src="@/assets/images/picture/1.jpg" alt="">
        <div class="program_detail">
          <span>本周</span><br>
          <span>{{ txt }}</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: ['txt']
};
</script>
<style>
.program_box {
  width: 160px;
  height: 140px;
  position: relative;
  margin: 0 auto;
}
.program_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.program_container .program_detail {
  width: 140px;
  color: #fff;
  font-family: "Microsoft YaHei";
  font-size: 18px;
  font-weight: 400;
  position: absolute;
  left: 10px;
  bottom: 5px;
}
</style>
