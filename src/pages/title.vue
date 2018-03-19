<template>
  <div class="titleWrap">
    <div class="titleBox  titleBox1" v-show=" boxNum==1 ">
      <span>{{ arr[num].txt }}</span>
    </div>

    <div class="titleBox  titleBox2" v-show=" boxNum==2 ">
      <div :class="{selected: option==1}" @click="fn(1)|getOptionUrl(num , option)">
        <span>{{ arr[num].txt[0] }}</span>
      </div>
      <div :class="{selected: option==2}" @click="fn(2)|getOptionUrl(num , option)">
        <span>{{ arr[num].txt[1] }}</span>
      </div>
      <div :class="{selected: option==3}" @click="fn(3)|getOptionUrl(num , option)">
        <span>{{ arr[num].txt[2] }}</span>
      </div>

    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from "vuex";
  export default {
    props: ['sel'],
    data: function () {
      return{
        option: 1,
        arr:[
          {name: 'main' , txt: '首页' },
          {name: 'share/shareNew' , txt: ['最新' , '最热' , '我的'] , pa: ['shareNew' , 'shareHot' , 'shareMine'] },
          {name: 'market' , txt: '市集' },
          {name: 'mine' , txt: '我的' }
        ]
      }
    },
    computed: {
      num: function () {
        for (var n in this.arr){
          if (this.arr[n].name == this.sel){
            return n;
          }
        }
      },
      boxNum: function () {
        if (this.num != 1 ){
          return 1;
        }else{
          return 2;
        }
      }
    },
    methods: {
      ...mapActions(['sortOfDate']),
      ...mapActions(['sortOfHot']),
      fn: function(val){
        switch(val) {
          case 1: {
            this.sortOfDate();
            break;
          }
          case 2: {
            this.sortOfHot();
            break;
          }
        }
        this.option = val;
        this.sortOfHot();
      },
      getOptionUrl: function (num , op) {
        this.$router.push('/share/' + this.arr[num].pa[op-1]);
      }
    },
    //  监听num值的变化（选项卡的切换），恢复option的默认值（标题栏默认第一个）
    watch: {
      num (val , oldVal){
        if (val != oldVal){
          this.option = 1;
        }
      }
    }
  }
</script>

<style scoped>
  *{ margin: 0; padding: 0;}
  .titleWrap { width: 100%; height: 100%;  border-bottom: 1px solid #ccc;
    background: #E6952D; position: relative;}

  .titleBox { width: 182px; height: 30px; margin: auto; color: #fff; text-align: center; }
  .titleBox1 { font-size: 20px; line-height: 44px; }
  .titleBox2 { font-size: 16px; border: 1px solid #fff; border-radius: 5px; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); line-height: 30px; }
  .titleBox2 div{ width: 61px; height: 100%; float: left; }
  .titleBox2 div:nth-child(2n) { width: 58px; border-left: 1px solid #fff; border-right: 1px solid #fff;}
  .selected { background: #fff; color: #E6952D;}
</style>
