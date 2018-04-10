<template>
  <div class="box" >
    <img src="@/assets/img/bg_login.jpg" alt="" class="bg">
    <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
      <Login :key="1" :status="status" ref="login"></Login>
      <Regist :key="2" :status="status"></Regist>
    </transition-group>
    <!-- <div class="box_change">
      <div class="circle">
        <img src="@/assets/img/icon/change.svg" alt="" class="change">
      </div>
    </div> -->
  </div>
</template>
<script>
import Login from "@/components/login/login";
import Regist from "@/components/login/regist";
export default {
  data() {
    return {
      status: "regist"
    };
  },
  components: {
    Login,
    Regist
  },
  watch: {
    status() {}
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}

.bg {
  width: 100%;
  height: 100%;
}
.box_change {
  width: 100%;
  height: 48px;
  position: relative;
  bottom: 80px;
}
.circle {
  width: 48px;
  height: 48px;
  margin: 0 auto;
  display: table-cell;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
}
.change {
  width: 48px;
  height: 48px;
  color:blue;
}
</style>
