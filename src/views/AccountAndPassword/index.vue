<template>
 <van-form>
   <!-- 一个隐藏域用于判断页面有值的输入框的数量 -->
    <div style="display:none" >{{ exitsVal }}</div>
    <p class="header">
      <van-icon name="arrow-left" class="return" size="30px" color=" rgb(177, 174, 174)" @click="goto"/>
      <span @click="toReg">注册</span>
    </p>
    <h1>欢迎来到艺龙旅行</h1>
    <!-- 选择地区部分 -->
    <van-cell-group>
        <van-field 
        v-model.trim="username" 
        label="+86" 
        placeholder="请输入手机号"  
        class="user"
        ref="use"
        @blur="checkname"
        />
    </van-cell-group>
  <!-- 密码部分 -->
  <van-field
    v-model.trim="password"
    :type='type'
    placeholder="请输入密码"
    ref="psw"
  >
   <template slot="right-icon">
      <van-icon 
        name="closed-eye" 
        @click="showpsw" 
        v-show="!isshow"/>
      <van-icon 
        name="eye-o" 
        v-show='isshow' 
        @click="hiddenpsw"
        />
    </template>
  </van-field>
  <!-- 提交部分 -->
  <div>
    <van-button 
    type="info" 
    class="regin" 
    @click="login()"
    :disabled='disabled'
    >登录</van-button>
  </div>
  <!-- 重置密码  短信快捷登录 -->
  <p class="changeMethod">
    <span style="color: #888" @click="ResetPsw">重置密码</span>
    <span style="color: #888" @click="AccountAndPswLogin">短信快捷登录</span>
  </p>
</van-form>
</template>

<script>
import userApi,{checkName,login,loginp}from '../../api/userApi';
import CryptoJS from 'crypto-js';
import request from '../../utils/request';
export default {
 data () {
 return {
    username:'',
    password: '',
    type:'password',
    value: '',
    disabled:true,
    checked: true,
    isshow:false,
    formData:'',
 }
 },

 components: {
 },
 computed:{
  //  判断页面中有值的输入框的数量
   exitsVal:function(){
        this.formData=Number(Boolean(this.username))+Number(Boolean(this.password));
    }
 },

 methods: {
    //  去登陆页
    goto(){
      this.$router.push('/login');
    },
    // 去注册页
    toReg(){
      this.$router.push('/reg')
    }, 
    // 去账户密码登录页
    AccountAndPswLogin(){
        this.$toast('功能正在修复')
    },
    // 去重置密码页
    ResetPsw(){
      this.$router.push('/resetpsw')
    },
    //验证用户名是否存在
   checkname(){
      // 验证用户名是否符合规范(以1开头第二位3-9后面9位数)
      let yzname = /^1[3-9]\d{9}$/;
      // 校验输入的命名是否符合规范
      let isnamecorrect = yzname.test(this.username);
      // 判断用户名存在与否的提示信息
      if(isnamecorrect){
         userApi.checkName(this.username,"http://8.129.20.147:2006/api/yzuse").then(res =>{
          //  如果用户不存在
          if(!res.data.result){
            this.$toast('请检查你的用户名是否正确哟！')
          }
        });
      }else{
        this.$toast('请输入格式正确的手机号');
        this.username = '';
      }
   },
    //点击登陆按钮发送请求
    login() {
        // 验证密码
        let checkpsw = /\w{8,16}/;
        let ispswcorrect = checkpsw.test(this.password);
        if(ispswcorrect && this.username){
          // 加密密码
          const psw = CryptoJS.SHA256(this.password).toString();
          // 发送登录请求
          userApi.loginp(this.username,psw,'http://8.129.20.147:2006/api/loginp').then(res => {
            console.log(res.data.flag);
            // 如果登录成功
            if(res.data.flag){
              this.$toast(res.data.login);
              // 设置用户名和token到本地
              localStorage.setItem('uid',JSON.stringify(this.username));
              localStorage.setItem('token',JSON.stringify(res.data.token))
              this.$router.push('/home');
            }else{
                // 如果登录失败
              this.$toast('请检查你的用户名或密码！');
            }
          });
        } else{
          this.$toast('请输入格式正确的密码');
        }
    },
    // 显示密码
    showpsw(){
      this.type = 'text';
      this.isshow = true;
    },
    // 隐藏密码
    hiddenpsw(){
      this.type = 'password';
      this.isshow = false;
    },
 },

 watch:{
   formData(newVal,oldVal){
      //  判断输入框都有值将disabled改为false
      if(Number(newVal) === 2){
        // 三个input框内都有值时需要做的操作
        this.disabled=false;
      }else{
        this.disabled=true;
      }
    }
 },
//  created(){
//  },
  mounted () {     
   // 自动获取焦点
       this.$refs.use.focus();
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/reg.scss";
</style>