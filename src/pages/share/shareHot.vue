<template>
  <div>
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
