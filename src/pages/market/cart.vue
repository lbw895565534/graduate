<template>
  <div>
    <Cart :cart="cart"></Cart>
    <Operate></Operate>
  </div>
</template>
<script>
import Cart from "@/components/market/cart/cart";
import Operate from "@/components/market/cart/operate";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Cart,
    Operate
  },
  props: [],
  data() {
    return {
      cart: []
    };
  },
  mounted() {
    this.$http.get("/commodity").then(
      res => {
        this.cart = res.data.data;
      },
      res => {
        console.log("请求无响应");
      }
    );
  },
  computed: {
    ...mapGetters(["cartProducts"])
  }
};
</script>
<style scoped>

</style>

