<template>
    <div>
      <div class="title-second">
        <a class="last" @click="back" v-if="lastShow">分类</a>
        <span class="next">> {{ $route.params.name }}</span>
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
  border-bottom: 1px solid #DADADA;
  padding-left: 10px;
}
.last{
  line-height: 45px;
  color: #ff0000;
  cursor: pointer;
  font-weight: bold;
  font-family: Helvetica, Tahoma, Arial, '华文细黑', 'Microsoft YaHei', '微软雅黑', sans-serif;
}
.next {
  font-family: Helvetica, Tahoma, Arial, '华文细黑', 'Microsoft YaHei', '微软雅黑', sans-serif;
}
</style>
