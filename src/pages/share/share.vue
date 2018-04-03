<template>
  <div class="box">
    <Cookbook :kind="$route.params.kind"></Cookbook>
  </div>
</template>
<script>
  import Cookbook from '@/components/sort/sort-cookbook/cookbook'
  export default {
    components: {
      Cookbook
    },
    props: []
  }

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    bottom: 64px;
  }

</style>
