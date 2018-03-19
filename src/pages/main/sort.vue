<template>
    <div>
      <div class="title-second">
        <a class="last" @click="back" >分类</a>
        <i>> </i>
        <span class="next">{{ $route.params.name }}</span>
      </div>
      <div class="content">
        <Cookbook @click="toDetail()" :kind="$route.params.kind"></Cookbook>
      </div>
    </div>
</template>
<script>
import Cookbook from '@/components/list/cookbook'

export default {
  props: ['lastShow'],
  components: {
    Cookbook
  },
  props: ['SortName'],  
  methods: {
    back: function () {
      this.$router.push('/');
    },
    toDetail: function () {
      
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.title-second {
  z-index: 2;
  height: 45px;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid #DADADA;
  padding-left: 10px;
  background: #fff;
}
.last{
  font-size: 16px;
  line-height: 45px;
  color: #ff0000;
  cursor: pointer;
  font-weight: bold;
  font-family: Arial;
}
i {
  font-family: Helvetica;
}
.next {
  font-size: 16px;
  font-family: sans-serif;
}
.content {
  z-index: 1;
  position: relative;
  top: 45px;
}
</style>
