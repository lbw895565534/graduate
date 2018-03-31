<template>
  <div class="box">
    <div @click="toInput()">
      <Publish></Publish>
    </div>
    <div class="cookbook">
      <Cookbook :kind="$route.params.kind"></Cookbook>
    </div>
  </div>
</template>
<script>
  import Publish from '@/components/share/publish'
  import Cookbook from '@/components/sort/sort-cookbook/cookbook'
  export default {
    components: {
      Publish,
      Cookbook
    },
    methods: {
      toInput() {
        this.$router.push('/share/shareInput')
      }
    }
  }

</script>
<style scoped>
  .box {
    z-index: 5;
    width: 100%;
    height: 110%;
  }

  .cookbook {
    position: relative;
    top: 45px;
  }

</style>
