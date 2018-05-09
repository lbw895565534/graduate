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
    console.log(this.loginUser.cart);
    this.cart = this.loginUser.cart;
  },
  computed: {
    ...mapGetters(["loginUser"])
  }
};
</script>
<style scoped>

</style>

