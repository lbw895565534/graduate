<template>
  <div class="titleWrap">
    <div class="titleBox1" v-show="boxNum==1">
      <mt-header fixed :title="arr[num].txt">
      </mt-header>
    </div>

    <div class="titleBox2" v-if="boxNum==2">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">
            <router-link class="title" :to="{ name: arr[1].txt[0].kind, params: {name: arr[1].txt[0].name, kind: arr[1].txt[0].kind, lastShow: true} }">{{ arr[1].txt[0].name }}</router-link>
          </mt-tab-item>
          <mt-tab-item id="2">
            <router-link class="title" :to="{ name: arr[1].txt[1].kind, params: {name: arr[1].txt[1].name, kind: arr[1].txt[1].kind, lastShow: true} }">{{ arr[1].txt[1].name }}</router-link>
          </mt-tab-item>
          <mt-tab-item id="3">
            <router-link class="title" :to="{ name: arr[1].txt[2].kind, params: {name: arr[1].txt[2].name, kind: arr[1].txt[2].kind, lastShow: true} }">{{ arr[1].txt[2].name }}</router-link>
          </mt-tab-item>
          </mt-navbar>


        <!-- <div :class="{selected: option==0}" @click="fn(0)">
            <router-link :class="{selected: option==0}" class="title" :to="{ name: arr[1].txt[0].kind, params: {name: arr[1].txt[0].name, kind: arr[1].txt[0].kind, lastShow: true} }">{{ arr[1].txt[0].name }}</router-link>
        </div>
        <div :class="{selected: option==1}" @click="fn(1)">
            <router-link :class="{selected: option==1}" class="title" :to="{ name: arr[1].txt[1].kind, params: {name: arr[1].txt[1].name, kind: arr[1].txt[1].kind, lastShow: true} }">{{ arr[1].txt[1].name }}</router-link>
        </div>
        <div :class="{selected: option==2}" @click="fn(2)">
            <router-link :class="{selected: option==2}" class="title" :to="{ name: arr[1].txt[2].kind, params: {name: arr[1].txt[2].name, kind: arr[1].txt[2].kind, lastShow: true} }">{{ arr[1].txt[2].name }}</router-link>
        </div> -->
    </div>

  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Header } from "mint-ui";
import { Navbar, TabItem } from "mint-ui";
export default {
  props: ["sel"],
  data: function() {
    return {
      option: 0,
      arr: [
        {
          name: "home",
          txt: "首页"
        },
        {
          name: "share/shareNew",
          txt: [
            { name: "最新", kind: "shareNew" },
            { name: "最热", kind: "shareHot" },
            { name: "我的", kind: "shareMine" }
          ]
        },
        {
          name: "market",
          txt: "市集"
        },
        {
          name: "mine",
          txt: "我的"
        }
      ]
    };
  },
  computed: {
    num: function() {
      for (var n in this.arr) {
        if (this.arr[n].name == this.sel) {
          return n;
        }
      }
    },
    boxNum: function() {
      if (this.num != 1) {
        return 1;
      } else {
        return 2;
      }
    }
  },
  methods: {
    fn: function(val) {
      this.option = val;
    }
  },
  meounted() {
    document.getElementsByClassName
  }
  //  监听num值的变化（选项卡的切换），恢复option的默认值（标题栏默认第一个）
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mint-header {
  height: 45px;
  font-size: 20px;
  background: #e6952d;
}
.titleBox2 {
  height: 45px;
  background: #e6952d;
}
.mint-navbar {
  width: 180px;
  height: 35px;
  margin: auto;
  font-size: 20px;
  position: relative;
  top: 4px;
  border-radius: 18px;
  border: 1px solid #fff;
  overflow: hidden;
}
.mint-tab-item {
  width: 100%;
  height: 100%;
  padding: 0;
  background: #e6952d;
}
.mint-tab-item-label {
   width: 100%;
  height: 100%;
}
.title {
  display: block;
  line-height: 35px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  border-left: 1px solid #fff;
}
.router-link-exact-active {
  background: #fff;
  color: #e6952d;
}
</style>
