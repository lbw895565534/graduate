<template>
  <div class="itemWrap" @click="fn">
    <span v-show='!bol'><slot name="normalImg"></slot><br></span>
    <span v-show='bol'><slot name="activeImg"></slot><br></span>
    <span :class="{active: bol }">{{ txt }}</span>
  </div>
</template>

<script>
  export default {
    props: ['txt' , 'mark' , 'sel' ],
    //  计算属性，定义需要通过简单逻辑判断后，才能最终确定值的变量
    computed: {
      bol: function () {
        //  遍历判断选择项，mark为选择项
        //  若sel等于mark则为选中，为true显示activeImg；否则反之
        if (this.mark == this.sel){
          return true;
        }
        return false;
      }
    },
    methods: {
      fn: function () {
        //  将当前被点击的item的mark值，传递给父级，赋给selected
        this.$emit('change' , this.mark);
      }
    }
  }

  //  给每一个item添加一个mark，作为唯一标识
  //  声明一个变量selectod来记录被选中item的mark
  //  1 2 3  selector:3

</script>

<style>
  .itemWrap {width: 25%; float: left; text-align: center;}
  .itemWrap img {width: 45px;}
  .itemWrap span {font-size: 12px; color: #999;}
  .itemWrap .active{color: #e5173a;}
</style>
