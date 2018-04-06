<template>
  <div class="titleWrap">
    <div class="titleBox1">
      <mt-header fixed :title="arr[num].txt">
      </mt-header>
    </div>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Navbar, TabItem } from "mint-ui";
export default {
  props: ["sel"],
  data: function() {
    return {
      arr: [
        {
          name: "home",
          txt: "首页"
        },
        {
          name: "share",
          txt: "分享"
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
    }
  },
  methods: {
    fn: function(val) {
      this.option = val;
    }
  }
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
  z-index: 5;
}

</style>
