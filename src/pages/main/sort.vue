<template>
    <div>
      <div class="title-second">
        <a class="last">分类</a>
        <span>>{{ SortName }}</span>
      </div>
      <div class="content">
        <Cookbook></Cookbook>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import Cookbook from '@/components/list/cookbook'

export default {
  components: {
    Cookbook
  },
  props: ['SortName']
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.title-second {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #DADADA;
  padding-left: 10px;
}
.last {
  line-height: 45px;
  color: #ff0000;
  cursor: pointer;
  font-weight: bold;
  font-family: Helvetica, Tahoma, Arial, '华文细黑', 'Microsoft YaHei', '微软雅黑', sans-serif;
}
</style>
