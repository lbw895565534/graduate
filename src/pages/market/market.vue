<template>
  <div class="box">
    <div>
      <Stuff></Stuff>
    </div>
    <img class="toCart" src="@/assets/icon/tocart.svg" @click="toCart()" >
  </div>
</template>
<script>
  import Stuff from "@/components/sort/sort-stuff/stuff";
  export default {
    components: {
      Stuff
    },
    methods: {
      toCart() {
        this.$router.push({name: 'cart'});
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
