<template>
  <div class="box">
    <div class="top">
      <i class="mintui mintui-back" @click="back()"></i>
    </div>
    <div class="item" v-for="c in comments">
      <div class="container">
        <div class="row1">
          <img src="static/images/cookbook/boy.svg" alt="">
          <span class="name">{{ c.name }}:</span>
        </div>
        <div class="row2">
          <span class="txt">{{ c.txt }}</span>
        </div>
        <div class="row3">
          <span class="date">{{ c.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cookbook: [],
        comments: []
      }
    },
    methods: {
      back() {
        this.$router.push({name: 'detail', query: {params: this.cookbook}});
      }
    },
    mounted() {
      this.cookbook = this.$route.params.cookbook;
      this.comments = this.cookbook.comment;
      console.log(this.cookbook);
    }
  }

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .top {
    width: 100%;
    height: 45px;
    background: #E9A144;
  }
  i {
    position: relative;
    top: 12px;
    left: 10px;
    color: #fff;
  }
  .container {
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding-top: 15px;
  }

  .item {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }

  .row1 {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .row1>img {
    margin-right: 10px;
  }

  .name {
    color: #999;
  }

  .row2 {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .row3 {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .date {
    font-size: 12px;
    color: #999;
    padding-bottom: 10px;
  }

</style>
