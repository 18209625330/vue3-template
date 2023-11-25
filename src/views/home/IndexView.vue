<template>
  <div class="page">
    <div class="login-wrap">
      <div class="login-title">欢迎登录</div>
      <div class="input-wrap">
        <div class="icon user"></div>
        <div class="input">
          <input type="text" placeholder="用户名" v-model="username">
        </div>
      </div>
      <div class="input-wrap">
        <div class="icon password"></div>
        <div class="input">
          <input type="password" placeholder="密码" v-model="password">
        </div>
      </div>
      <button type="button" class="login-btn" @click="login()">登录</button>
      <div class="tip">输入任意用户名和密码即可登录</div>
    </div>
  </div>
</template>

<script>
// import toast from '../../components/toast/toast';
import router from "@/router";
import store from '@/store/index';
import Toast from '../../components/toast/toast';
export default {
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods:{
    login(){
      if(this.username.match(/^\s*$/)){
        Toast({message:'请输入用户名'});
        return;
      }
      if(this.password.match(/^\s*$/)){
        Toast({message:'请输入密码'});
        return;
      }
      store.commit("admin/LOGIN",{username:this.username,isLogin:true});
      router.push("/admin");
    }
  },
}
</script>


<style scoped>
.page {
  width: 100%;
  min-height: 100vh;
  background-image: url("../../assets/images/home/index/bg.jpg");
  background-size: cover;
}

.login-wrap {
  width: 500px;
  height: 350px;
  background-color: #FFFFFF;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-wrap .login-title {
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  border-bottom: 1px solid #e8eaec;
  height: 60px;
  line-height: 60px;
  box-sizing: border-box;
  padding-left: 5%;
}

.login-wrap .input-wrap {
  width: 80%;
  height: 40px;
  border: 1px solid #e8eaec;
  border-radius: 3px;
  margin: 30px auto 0;
  display: flex;
  align-items: center;
}

.login-wrap .icon {
  width: 45px;
  height: 99%;
  background-color: #F8F8F9;
  border-right: 1px solid #e8eaec;
  position: relative;
}

.login-wrap .icon.user:after {
  width: 25px;
  height: 25px;
  background-image: url("../../assets/images/home/index/username.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-wrap .icon.password:after {
  width: 25px;
  height: 25px;
  background-image: url("../../assets/images/home/index/password.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-wrap .input {
  width: 88%;
  height: 100%;
}

.login-wrap .input input {
  width: 100%;
  height: 95%;
  padding-left: 8px;
  box-sizing: border-box;
  font-size: 16px;
  margin-top: 2px;
}

.login-wrap .login-btn {
  display: block;
  width: 80%;
  height: 40px;
  margin: 30px auto 0;
  background-color: #2d8cf0;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
}

.login-wrap .login-btn:hover {
  opacity: 0.8;
}

.login-wrap .tip {
  width: auto;
  height: auto;
  color: #c3c3c3;
  text-align: center;
  margin-top: 20px;
}
</style>
