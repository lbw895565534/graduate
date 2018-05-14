<template>
  <div class="box_regist box_input2 animated" :key="2">
    <div class="input input1">
      <span class="title">用户注册</span>
    </div>
    <div class="input input2">
      <div class="column">
        <div :class={focus:form[0].focus} class="container">
          <input type="text" placeholder="用户名" v-model="username" @focus="focus(0)" @blur="unFocus(0)">
        </div>
      </div>
    </div>
    <div class="input input2">
      <div class="column">
        <div :class={focus:form[1].focus} class="container">
          <input type="text" placeholder="密码" v-model="password" @focus="focus(1)" @blur="unFocus(1)">
        </div>
      </div>
    </div>

    <div class="input input2">
      <div class="column">
        <div :class={focus:form[2].focus} class="container">
          <input type="text" placeholder="手机号码" v-model="telnumber" @focus="focus(2)" @blur="unFocus(2)">
        </div>
      </div>
    </div>
    <div class="input input2">
      <div class="column">
        <div :class={focus:form[3].focus} class="container">
          <input type="text" placeholder="支付密码" v-model="paynumber" @focus="focus(3)" @blur="unFocus(3)">
        </div>
      </div>
    </div>
    <div class="input input2">
      <div class="column">
        <div class="sexbox">
          <div class="sex" :class="{sel:sex=='男'}" @click="sex='男'">男</div>
          <div class="sex" :class="{sel:sex=='女'}" @click="sex='女'">女</div>
        </div>
      </div>
    </div>

    <div class="input input3">
      <button class="regist" @click=submit()>立即注册</button>
    </div>
    <div class="input input4">
      <span class="jump" @click="toLogin()">已经注册，立即登录</span>
    </div>
  </div>
</template>
<script>
  import axios from "axios"
  export default {
    props: ["status"],
    data() {
      return {
        form: [{
            focus: false
          },
          {
            focus: false
          },
          {
            focus: false
          },
          {
            focus: false
          },
        ],
        username: "",
        password: "",
        sex: "男",
        telnumber: "",
        paynumber: ""
      };
    },
    methods: {
      focus(i) {
        this.form[i].focus = true;
      },
      unFocus(i) {
        this.form[i].focus = false;
      },
      toLogin() {
        this.$emit("turn", "login");
      },
      submit() {
        var newUser = new Object();
        newUser.username = this.username;
        newUser.password = this.password;
        newUser.sex = this.sex;
        newUser.telnumber = this.telnumber;
        newUser.paynumber = this.paynumber;
        console.log(newUser);
        axios.post("/user/regist", newUser).then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(error);
          });
      }
    }
  };

</script>
<style scoped>
  input,
  textarea {
    -webkit-appearance: none;
  }

  .box_regist {
    width: 80%;
    max-width: 320px;
    height: 70%;
    min-height: 450px;
    max-height: 520px;
    margin: auto;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 5px 0 #999;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
  }

  .input {
    width: 100%;
    display: table-cell;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .input1 {
    flex: 3;
  }

  .input2 {
    flex: 2;
  }

  .input3 {
    flex: 2;
  }

  .input4 {
    flex: 2;
  }

  .blank {
    flex: 1;
  }

  .title {
    font-size: 24px;
  }

  .column {
    width: 70%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .column .container {
    width: 100%;
    box-shadow: 0px 0px 3px 0 #999;
    padding-right: 5px;
    padding-left: 5px;
  }

  input[type="text"] {
    height: 45px;
    width: 100%;
    border: none;
    outline: none;
  }

  .sexbox {
    width: 40%;
    height: 32px;
    /* border: 2px solid #F95754; */
    box-shadow: 0px 0px 2px 1px #f95754;
    display: flex;
  }

  .sex {
    flex: 1;
    text-align: center;
    line-height: 32px;
    color: #f95754;
  }

  .sel {
    background: #f95754;
    color: #fff;
  }

  input[type="radio"] {
    display: none;
  }

  .jump {
    font-size: 12px;
    color: #05c1ff;
  }

  .focus {
    border: 2px solid #ffc107 !important;
    box-shadow: 0px 0px 10px 0 #ffc107 !important;
  }

  .regist {
    width: 50%;
    height: 45px;
    background: #ffc107;
    border: none;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    outline: none;
    box-shadow: 1px 1px 5px 0 #999;
  }

  .regist:active {
    box-shadow: -1px -1px 5px 0 #999 inset;
  }

</style>
