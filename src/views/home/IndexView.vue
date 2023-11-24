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
import { useStore } from 'vuex';
import store from '@/store/index';
export default {
  data(){
    return {
      username:"",
      password:""
    }
  },
  methods:{
    login(){
      // if(this.username.match(/^\s*$/)){
      //   toast('请输入用户名');
      //   return;
      // }
      // if(this.password.match(/^\s*$/)){
      //   toast('请输入密码');
      //   return;
      // }
      store.commit("admin/LOGIN",{username:this.username,isLogin:true});
      router.push("/admin");
    }
  },
}
</script>
