<template>
  <div>
    <Top :title="$route.params.name"></Top>
    <router-view></router-view>
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
