<template>
  <div>
    <p v-text="description" class="description-content"></p>
    <div style="float:right;margin-right:65px;margin-top:-40px">
      <div style="width:80px;height:80px;background-color:red"></div>
      <p>真好运APP</p>
    </div>
    <el-form ref="form" :model="form" :rules="rules" class="login-Dialog">
      <p style="font-size:25px;color:blue">欢迎登陆</p>
      <el-form-item prop="username">
        <el-input v-model="form.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
      </el-form-item>
      <div class="password">
        <el-checkbox v-model="form.checked" style="font-size:16px">记住密码</el-checkbox>
        <p class="forget-password">忘记密码</p>
      </div>
      <el-button type="primary" style="width:100%" @click="checkLogin">登陆</el-button>
    </el-form>
    <company-desc></company-desc>
  </div>
</template>

<script>
import CompanyDesc from '../company-description.vue'
import axios from 'axios'
export default {
  name:'Login',
  data() {
    return {
      description: "企业车辆运营平台",
      form: {
        username: "",
        password: "",
        checked: true
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {
      CompanyDesc,
  },
  methods: {
    // 写请求URL的方法，供在mounted里面调用
    checkLogin: function(params) {
      console.log(this.username + this.password);
    }
  },
  mounted: {
    //加载请求的axios方法
  }
};
</script>

<style>
.description-content {
  width: 250px;
  font-size: 1.8rem;
  margin: 70px 0px 0px 55px;
}
.login-Dialog {
  width: 300px;
  height: 350px;
  margin-right: 225px;
  margin-top: 100px;
  float: right;
  padding: 0px 25px;
  background-color: blanchedalmond;
}
.password {
  margin-top: 20px;
  margin-bottom: 60px;
  height: 12px;
  line-height: 12px;
}
.forget-password {
  display: inline-block;
  margin-left: 62px;
  color: #409eff;
}
.el-icon-lock:before {
  color: #409eff;
}
.el-icon-user-solid:before {
  color: #409eff;
}
</style>


