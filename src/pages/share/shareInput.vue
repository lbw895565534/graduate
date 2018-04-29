<template>
  <div class="container">
    <div class="container_picture">
      <div id="inputImg">
        <img src="static/images/icon/shareInput/upload.svg" alt="">
        <input type="file" @change="upload()" ref="inputImg">
      </div>
      <img src="" alt="" v-if="showImg">
    </div>
    <div class="container_name">
      <div class="inputTitle" type="text">
        <input type="text" v-model="title" placeholder="请输入标题">
      </div>
    </div>
    <div class="conatiner_info">
      <div class="inputInfo">
        <textarea placeholder="请输入该食谱的简介" v-model="info"></textarea>
      </div>
    </div>
    <div class="container_step">
      <div class="method">
        <span class="left">做法</span>
        <span class="right" @click="addStep()">添加步骤</span>
      </div>
      <div class="inputStep" v-for="(s,n) in step">
        <span class="num">步骤{{ n+1 }}：</span>
        <span class="del" @click="delStep(n)">删除步骤</span>
        <textarea class="content" placeholder="请输入步骤内容" v-model="s.content"></textarea>
      </div>
    </div>
    <div class="container_btn">
      <button class="submit" @click="submit()">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        img: "",
        showImg: false,
        title: "",
        info: "",
        step: [
          {num: 1, content: ""},
        ]
      }
    },
    methods: {
      upload() {
        var file = this.$refs.inputImg.files[0]
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          this.src = e.target.result;
          console.log(this.src);
        };
      },
      addStep() {
        var n = this.step.length;
        this.step.push({num: n+1,content: ""});
        console.log(this.step);
      },
      delStep(n) {
        this.step.splice(n, 1);
        console.log(this.step);
        for (var i = n;i < this.step.length;i++) {
          this.step[i].num = this.step[i].num-1;
        }
      },
      submit() {
        var share = {};
        share.img = this.img;
        share.title = this.title;
        share.info = this.info;
        share.step = this.step;
      }
    }
  }

</script>
<style scoped>
  hr {
    width: 90%;
    size: 1px;
    margin: 0 auto;
  }

  .container_picture {
    width: 100%;
    height: 225px;
  }

  #inputImg {
    width: 100%;
    height: 100%;
    position: relative;
    background: #ddd;
    text-align: center;
  }

  #inputImg input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
  }

  .container_name {
    width: 100%;
    height: 48px;
  }

  .inputTitle {
    height: 34px;
    width: 80%;
    line-height: 48px;
    border: 1px solid #999;
    margin: 0 auto;
    position: relative;
    top: 6px;
    border: none;
  }

  .inputTitle input {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: absolute;
    border: none;
    outline: none;
    font-size: 20px;
    text-align: center;
    font-family: "黑体";
  }

  .conatiner_info {
    width: 100%;
    height: 100px;
    position: relative;
    margin-bottom: 10px;
  }

  .inputInfo {
    width: 90%;
    height: 100%;
    margin: 0 auto;
  }

  .inputInfo textarea {
    width: 100%;
    height: 100%;
    outline: none;
    border-left: none;
    border-right: none;
    top: 1px solid #ddd;
    padding-top: 10px;
    font-size: 16px;
    color: #999;
    resize: none;
    font-family: "楷体";
  }

  .conatiner_step {
    width: 100%;
    height: auto;
  }
  .method {
    width: 90%;
    height: 48px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: 16px;
    font-weight: bold;
  }
  .left {
    flex: 1;
  }
  .right {
    color: #f55263;
  }
  .inputStep {
    width: 90%;
    margin: 0 auto;
    font-size: 16px;
    position: relative;
  }  
  .num {
    font-weight: bold;
  }
  .del {
    font-weight: bold;
    color: #999;    
    position: absolute;
    right: 0;
  }
  .inputStep textarea {
    margin-top: 10px;
    width: 100%;
    height: 90px;
    font-size: 16px;
    border: none;
    outline: none;
    resize: none;
    font-family: "楷体";
  }
  .container_btn {
    width: 100%;
    height: 50px;
  }
  .submit {
    width: 100%;
    height: 48px;
    background: #f55263;
    border: none;
    position: fixed;
    bottom: 0;
    color: #fff;
    font-size: 20px;
  }
</style>
