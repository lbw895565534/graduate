<template>
  <div class="box">
    <div>
      <Stuff></Stuff>
    </div>
    <img class="toCart" src="@/assets/icon/tocart.svg" >
  </div>
</template>
<script>
import Stuff from "@/components/sort/sort-stuff/stuff";
export default {
  components: {
    Stuff
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  bottom: 64px;
}
.toCart {
  width: 80px;
  position: fixed;
  right: 30px;
}
</style>

