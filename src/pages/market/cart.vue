<template>
  <div>
    <Cart :cart="userCart"></Cart>
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
  computed: {
    ...mapGetters(["loginUser"]),
    ...mapGetters(["userCart"]),
  }
};
</script>
<style scoped>

</style>

