<template>
  <div>
    <Cart :cart="cart"></Cart>
    <Operate></Operate>
  </div>
</template>
<script type="text/ecmascript-6">
import Cart from "@/components/list/cart";
import Operate from "@/pages/cart/operate";
export default {
  components: {
    Cart,
    Operate
  },
  props: [],
  data() {
    return {
      cart: []
    }
  },
  mounted() {
    this.$http.get("/commodity").then(
      res => {
        this.cart = res.data.data;
        console.log(this.cart);
      },
      res => {
        console.log("请求无响应");
      }
    );
  }
};
</script>
<style scoped>

</style>

