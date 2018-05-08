<template>
  <div class="box">
    <div>
      <Stuff></Stuff>
    </div>
    <img class="toCart" src="@/assets/img/icon/tocart.svg" @click="toCart()" >
  </div>
</template>
<script>
import Stuff from "@/components/market/sort-stuff/stuff";
import { Toast } from "mint-ui";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Stuff
  },
  computed: {
    ...mapGetters(["loginUser"])
  },
  methods: {
    //是否已经登录
    isLogin() {
      console.log(this.loginUser);
      if (this.loginUser == null) {
        Toast({
          message: "请先登录",
          position: "bottom",
          duration: 2000
        });
        return false;
      }
      return true;
    },
    toCart() {
      if (this.isLogin()) {
        this.$router.push({ name: "cart" });
      }
    }
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
  width: 50px;
  position: fixed;
  right: 20px;
  bottom: 84px;
}
</style>
