<template>
  <div class="titleWrap">
    <div class="titleBox  titleBox1" v-show=" boxNum==1 ">
      <span>{{ arr[num].txt }}</span>
    </div>

    <div class="titleBox  titleBox2" v-if=" boxNum==2 ">
        <div v-for="(t, index) in arr[num].txt" :class="{selected: option==index}" @click="fn(index)">
            <router-link :to="{ name: t.kind, params: {name: t.name, kind: t.kind, lastShow: true} }">{{ t.name }}</router-link>
        </div>        
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    props: ['sel'],
    data: function () {
      return {
        option: 1,
        arr: [{
            name: 'main',
            txt: '首页'
          },
          {
            name: 'share/shareNew',
            txt: [
              { name: '最新' , kind: 'shareNew'},
              { name: '最热' , kind: 'shareHot'},
              { name: '我的' , kind: 'shareMine'}
            ]
          },
          {
            name: 'market',
            txt: '市集'
          },
          {
            name: 'mine',
            txt: '我的'
          }
        ]
      }
    },
    computed: {
      num: function () {
        for (var n in this.arr) {
          if (this.arr[n].name == this.sel) {
            return n;
          }
        }
      },
      boxNum: function () {
        if (this.num != 1) {
          return 1;
        } else {
          return 2;
        }
      }
    },
    methods: {
      fn: function (val) {
        this.option = val;
      }
    },
    //  监听num值的变化（选项卡的切换），恢复option的默认值（标题栏默认第一个）
    watch: {
      num(val, oldVal) {
        if (val != oldVal) {
          console.log()
          this.option = 1;
        }
      }
    }
  }

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .titleWrap {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #ccc;
    background: #E6952D;
    position: relative;
  }

  .titleBox {
    width: 182px;
    height: 30px;
    margin: auto;
    color: #fff;
    text-align: center;
  }

  .titleBox1 {
    font-size: 20px;
    line-height: 44px;
  }

  .titleBox2 {
    font-size: 16px;
    border: 1px solid #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 30px;
  }

  .titleBox2 div {
    width: 61px;
    height: 100%;
    float: left;
  }

  .titleBox2 div:nth-child(2n) {
    width: 58px;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }

  .selected {
    background: #fff;
    color: #E6952D;
  }

</style>
