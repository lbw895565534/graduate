<template>
  <div>
    <Top :title="$route.params.name"></Top>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import Top from "@/components/next/next";
  export default {
    components: {
      Top
    }
  };

</script>
<style scoped>
  .content {
    width: 100%;
    z-index: 4;
    position: absolute;
    top: 45px;
    bottom: 0;
  }

</style>
