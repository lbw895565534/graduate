<template>
    <div>
      <div class="content">
        <Cookbook :kind="$route.params.kind"></Cookbook>
      </div>
    </div>
</template>
<script>
import Cookbook from '@/components/sort/sort-cookbook/cookbook'

export default {  
  components: {
    Cookbook  
  }
};
</script>

<style scoped>
.next {
  font-size: 16px;
  font-family: sans-serif;
}
.content {
  z-index: 1;
  position: relative;
  top: 0;
}
</style>
