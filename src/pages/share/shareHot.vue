<template>
  <div>
      <Cookbook :kind="$route.params.kind"></Cookbook>
  </div>
</template>
<script>
  import Cookbook from '../../components/list/cookbook'
  export default {
    components: {
      Cookbook
    },
    props: []
  }
</script>
