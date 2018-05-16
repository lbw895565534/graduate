<template>
  <div class="box">
    <div class="container_txt">
      <textarea name="txt" id="txt"></textarea>
    </div>
    <div class="container_btn">
      <button class="btn" @click="submit()">提交</button>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        txt: ""
      }
    },
    computed: {
      ...mapGetters(['loginUser']),
      ...mapGetters(['getDetailCookbook']),
    },
    methods: {
      ...mapActions(['addComment']),
      submit() {
        this.addComment(this.txt);
      }
    }
  }
</script>
<style scoped>
  .container_txt {
    padding: 10px;
    box-shadow: 0 1px 5px 0 #727272;
    margin-bottom: 20px; 
    border-bottom: 1px solid #ddd;   
  }
  textarea {
    width: 100%;
    height: 200px;
    border: none;
    resize: none;
    overflow: scroll;
    outline: none;
    font-size: 18px;
    
  }
  button {
    width: 120px;
    height: 45px;
    border: none;
    float: right;
    margin-right: 20px;
    background: #F55263;
    color: #fff;
    font-size: 18px;
    box-shadow: 0 0 5px 0 #727272;
  }
</style>