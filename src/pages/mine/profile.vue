<template>
  <div class="box">
    <div class="container-head">
      <div class="head">
        <span>头像</span>
        <el-upload class="uploader" action="/shareInput/img" accept="image/*" :multiple="false" :show-file-list="false" :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <div class="headshot">
            <img v-if="imageUrl" :src="imageUrl" class="preview">
            <img src="static/images/icon/mine/advance.svg" class="to"></img>
          </div>
        </el-upload>
      </div>
    </div>
    <div class="message">
      <div class="container">
        <div class="item">
          <span>昵称</span>
          <input type="text" id="name" v-model="name">
        </div>
      </div>
      <div class="container">
        <div class="item">
          <span>性别</span>
          <input ref="sex" type="text" id="sex" @click="popup = true" readonly v-bind:value="sex">
          <img src="static/images/icon/mine/advance.svg"></img>
        </div>
        <mt-popup v-model="popup" position="bottom" class="popup">
          <mt-picker :slots="sexOptions" :visible-item-count="2" :show-toolbar="false" @change="onValueChange"></mt-picker>
        </mt-popup>
      </div>
      <div class="container">
        <div class="item">
          <span>生日</span>
          <input type="text" id="birth" @click="selectBirth()" readonly v-bind:value="birth">
          <img src="static/images/icon/mine/advance.svg"></img>
          <mt-datetime-picker @confirm="confirmBirth" @cancel="closeBirth" ref="birth" type="date" yearFormat="{value} 年" monthFormat="{value} 月"
            dateFormat="{value} 日">
          </mt-datetime-picker>
        </div>
      </div>
      <div class="container">
        <div class="item">
          <span>电话</span>
          <input type="text" id="telnumber" v-model="telnumber">
        </div>
      </div>
      <div class="container">
        <div class="item item-last">
          <span>简介</span>
          <div class="input">
            <textarea ref="info" v-model="info" type="text" id="info" @change="limitText()" @keyup="limitText()"></textarea>
            <div class="tip">还能输入{{ textlen }}个字</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn">
      <button class="submit" @click="submit()">提&nbsp;&nbsp;&nbsp;&nbsp;交</button>
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  import {
    DataTimePicker,
    Picker,
    Poppup,
    Toast
  } from 'mint-ui'
  export default {
    data() {
      return {
        sexOptions: [{
          flex: 1,
          values: ['男', '女'],
          textAlign: 'center'
        }],
        popup: false,
        textlen: 60,
        imageUrl: "",
        name: "",
        sex: "",
        birth: "",
        telnumber: "",
        info: "",
      }
    },
    watch: {
      info(val, oldVal) {
        this.textlen = 60 - this.info.length;
      }
    },
    methods: {
      //上传图片
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      //验证文件格式
      beforeAvatarUpload(file) {
        const isJPG = file.type === "image/jpeg";
        //是否小于2M
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error("上传头像图片只能是 JPG 格式!");
        }
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
      },
      upload() {
        var file = this.$refs.inputImg.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          this.src = e.target.result;
          console.log(this.src);
        };
      },
      //性别选择器
      onValueChange(picker, values) {
        this.sex = values;
        console.log(this.sex)
      },
      selectSex() {
        this.$refs.sex.open();
      },
      // 日期选择器
      selectBirth() {
        this.$refs.birth.open();
      },
      confirmBirth(value) {
        var year = value.getFullYear();
        var month = value.getMonth();
        var date = value.getDate();
        this.birth = year + "-" + month + "-" + date;
        alert(this.birth)
      },
      closeBirth() {
        this.$refs.birth.close();
      },
      // 限制textarea字数
      limitText() {
        this.$refs.info.value = this.$refs.info.value.substring(0, 60)
        console.log(this.$refs.info.value);
      },
      submit() {
        var msg = {};
        msg.img = this.imageUrl;
        msg.name = this.name;
        msg.sex = this.sex[0];
        msg.birth = this.birth;
        msg.telnumber = this.telnumber;
        msg.info = this.info;
        console.log(msg);
        axios.post("/mine/profile", msg).then(res => {
          if (res.status == 200) {
            Toast({
              message: "修改成功",
              iconClass: "mintui mintui-success"
            });
          }
        })
      }
    }
  }

</script>
<style scoped>
  @import '../../assets/css/mine-upload.css';
  .box {
    width: 100%;
    height: 100%;
    background: #ddd;
    position: absolute;
  }

  .container-head {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #fff;
    border-top: 10px solid #ddd;
    border-bottom: 10px solid #ddd;
  }

  .head {
    width: 90%;
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .head span {
    flex: 2;
    font-family: "黑体";
    color: #aaa;
    padding-left: 10px;
  }

  .head .uploader {
    flex: 8;
    height: 64px;
    display: flex;
    flex-direction: row;
  }

  .headshot {
    height: 64px;
  }

  .preview {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-top: 7px;
    display: inline-block;
    float: left;
  }

  .to {
    position: relative;
    top: 22px;
    right: 0;
    float: right;
  }

  .message {
    background: #fff;
    display: flex;
    flex-direction: column;
  }

  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #fff;
  }

  .item {
    width: 90%;
    height: 47px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ddd;
  }

  .item-last {
    height: 96px;
    padding-bottom: 10px;
  }

  .item span {
    flex: 2;
    height: 31px;
    text-align: left;
    font-family: "黑体";
    color: #aaa;
    position: relative;
    padding-top: 16px;
    padding-left: 10px;
  }

  .item input {
    flex: 8;
    height: 100%;
    outline: none;
    border: none;
    font-family: "黑体";
    font-size: 16px;
    color: #666;
  }

  .item div {
    flex: 8;
  }

  .popup {
    width: 100%;
  }

  .picker-slot-wrapper,
  .picker-item {
    backface-visibility: hidden;
  }

  .picker-center-highlight {
    margin-top: 0;
  }


  .item textarea {
    width: 100%;
    height: 60px;
    margin-top: 14px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #666;
    line-height: 20px;
    resize: none;
  }

  .item .tip {
    font-size: 12px;
    color: #aaa;
  }

  .btn {
    height: 64px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .submit {
    width: 200px;
    height: 36px;
    background: #E94F44;
    border-radius: 15px;
    font-size: 16px;
    color: #fff;
    border: none;
    outline: none;
    box-shadow: 1px 1px 5px 0 #666;
  }

  .submit:active {
    background: #E6392D;
  }

</style>
