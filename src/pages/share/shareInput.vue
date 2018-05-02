<template>
  <div class="container">
    <div class="container_picture">
      <el-upload
        class="avatar-uploader"
        action="/shareInput/img"
        accept="image/*"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>


      <!-- <div id="inputImg">
        <img src="static/images/icon/shareInput/upload.svg" alt="">
        <input type="file" @change="upload()" ref="inputImg">
      </div>
      <img src="" alt="" v-if="showImg"> -->
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
    <div class="container_stuff">
      <div class="method">
        <span class="left">食材</span>
        <span class="right" @click="addStuff()">添加食材</span>
      </div>
      <div class="inputStuff">
         <div class="stuff">
          <div>
            <el-select v-model="placeholder.name" placeholder="食材名称">
              <el-option
                v-for="o in options"
                :key="o.name"
                :label="o.name"
                :value="o.name">
              </el-option>
            </el-select>
          </div>
          <div style="text-align:right">
            <el-select v-model="placeholder.num" placeholder="用量">
              <el-option
                v-for="i in 5"
                :key="i"
                :label="i"
                :value="i">
              </el-option>
            </el-select>
          </div>
         </div>
      </div>
      <div class="tableStuff">
        <div v-for="s in stuff">
          <span>{{ s.name }}</span>
          <span>{{ s.num }}</span>
        </div>
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
    <div class="container_kind">
       <div class="method">
        <span class="left">种类</span>
      </div>
      <div class="inputKind">
          <div class="kind" :class="{sel:kind=='homecook'}" @click="kind='homecook'">常菜</div>
          <div class="kind" :class="{sel:kind=='drink'}" @click="kind='drink'">饮料</div>
          <div class="kind" :class="{sel:kind=='pizza'}" @click="kind='pizza'">比萨</div>
          <div class="kind" :class="{sel:kind=='cake'}" @click="kind='cake'">蛋糕</div>
        </div>
    </div>
    <div class="container_btn">
      <button class="submit" @click="submit()">发&nbsp;&nbsp;&nbsp;&nbsp;布</button>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      img: "",
      showImg: false,
      options: [
        {name: "香葱", id: 11},
        {name: "白砂糖", id: 12},
        {name: "食盐", id: 13},
        {name: "酱油", id: 14},
      ],
      placeholder: { name: "名称", num: "用量" },
      //发送的信息数据
      imageUrl: "",
      title: "",
      info: "",
      stuff: [],
      step: [{ num: 1, content: "" }],
      kind: "homecook"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
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
      reader.onloadend = function(e) {
        this.src = e.target.result;
        console.log(this.src);
      };
    },
    addStuff() {
      var name = this.placeholder.name;
      var num = this.placeholder.num;
      var id = "";
      var isAdd = false;
      if (name == "名称" || num == "用量") {
        isAdd = true;
      }
      this.stuff.forEach(n => {
        if (n.name == name) {
          isAdd = true;
        }
      });
      if (!isAdd) {
        this.options.forEach(n => {
          if (n.name == name) {
            this.stuff.push({
              id: n.id,
              name: n.name,
              num: this.placeholder.num,
            })
          }
        })
      }
    },
    addStep() {
      var n = this.step.length;
      this.step.push({ num: n + 1, content: "" });
      console.log(this.step);
    },
    delStep(n) {
      if (n != 0) {
        this.step.splice(n, 1);
        for (var i = n; i < this.step.length; i++) {
          this.step[i].num = this.step[i].num - 1;
        }
      }
    },
    submit() {
      var share = {};
      share.img = this.img;
      share.title = this.title;
      share.info = this.info;
      share.step = this.step;
      share.kind = this.kind;
      share.stuff = this.stuff;
      axios.post("/user/login", user).then(res => {
          state.user_status = res.data;
        })
        .catch(err => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
hr {
  width: 90%;
  size: 1px;
  margin: 0 auto;
}

.container_picture {
  width: 100%;
  height: 245px;
}
.avatar-uploader {
  width: 100%;
  height: 100%;
  background: #ddd;
  text-align: center;
}
.el-upload {
  width: 100%!;
  height: 100%;
  border: 1px dashed #ddd;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader-icon {
  color: #8c939d;
  width: 375px;
  height: 245px;
  line-height: 245px;
  text-align: center;
}
.el-icon-plus:before {
  font-size: 56px;
}
.avatar {
  width: 375px;
  height: 245px;
  display: block;
}

.container_name {
  width: 100%;
  height: 48px;
}

.inputTitle {
  height: 34px;
  width: 80%;
  line-height: 48px;
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
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding-top: 10px;
  font-size: 16px;
  color: #999;
  resize: none;
  font-family: "楷体";
}
.container_stuff {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}
.inputStuff {
  width: 90%;
  margin: 0 auto;
}
.stuff {
  height: 48px;
  display: flex;
  align-items: center;
}
.stuff div {
  flex: 1;
}

.tableStuff {
  width: 90%;
  height: 136px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0 auto;
}
.tableStuff div {
  display: flex;
  flex-direction: row;
}
.tableStuff div span {
  flex: 1;
  height: 34px;
  line-height: 34px;
}
.tableStuff div span:first-child {
  padding-left: 15px;
}
.tableStuff div span:last-child {
  text-align: right;
  margin-right: 75px;
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
  font-size: 16px;
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
  margin-bottom: 10px;
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
.container_kind {
  width: 100%;
  height: 116px;
}
.inputKind {
  width: 90%;
  height: 34px;
  display: flex;
  margin: 7px auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px 0 #ddd;
}

.kind {
  height: 34px;
  flex: 1;
  text-align: center;
  line-height: 34px;
  color: #f95754;
  border-right: 1px solid #ddd;
}
.sel {
  background: #f95754;
  color: #fff;
}
</style>
