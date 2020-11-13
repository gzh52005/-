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

  <!-- 发送验证码部分 -->
     <van-field
            v-model.trim="yzm"
            placeholder="请输入图形验证码"
            ref="permission"
            >
            <template #button>
            <van-button 
            size="middle" 
            type="primary" 
            class="getpermission" 
            ref="yzm"
            native-type="button"
            >获取验证码
            </van-button>
        </template>
     </van-field>
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
  <!-- 七天免登录部分 -->
  <div class="loginFree">
      <van-checkbox v-model="checked" checked-color="rgba(68,153,255,.5)" class="mdl"><span style="color:#4499FF;font-size:16px">七天免登录</span></van-checkbox>
  </div>
  <!-- 提交部分 -->
  <div>
    <van-button 
    type="info" 
    class="regin" 
    @click="login()"
    :disabled='disabled'
    >登录</van-button>
  </div>
  <!-- 未绑定手机号？ 账号密码登录 -->
  <p class="changeMethod">
    <span @click="showOverlay">未绑定手机号？</span>
    <span @click="AccountAndPswLogin">账号密码登录</span>
  </p>
  <van-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block">
      <h5>用户提示</h5>
     <div class="content">
        <p class="clickReg">1.未注册的用户，请点击右上角的按钮<span style="color:#4499FF" @click="toReg">注册</span></p>
        <p class="ContactService">2.已注册但未绑定手机号的用户，请拨打<span style="color:#4499FF">400-666-1166</span>联系客服转会员服务项绑定手机号</p>
     </div>
     <div class="confire" style="#4499FF" @click="show=false">确定</div>
    </div>
  </div>
</van-overlay>
</van-form>
</template>

<script>
import userApi,{checkName,login}from '../../api/userApi';
import CryptoJS from 'crypto-js';
import request from '../../utils/request';
export default {
 data () {
 return {
    username:'',
    password: '',
    type:'password',
    yzm:'',
    value: '',
    disabled:true,
    checked: true,
    isshow:false,
    formData:'',
    show:false,
 }
 },

 components: {
 },
 computed:{
  //  判断页面中有值的输入框的数量
   exitsVal:function(){
        this.formData=Number(Boolean(this.username))+Number(Boolean(this.yzm))+Number(Boolean(this.password));
    }
 },

 methods: {
    //  去首页
    goto(){
      this.$router.push('/home');
    },
    // 去注册页
    toReg(){
      this.$router.push('/reg')
    }, 
    // 去账户密码登录页
    AccountAndPswLogin(){
      this.$router.push('/accountandpassword');
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
        // 如果这三个输入框都有值
        if(ispswcorrect && this.username&&this.yzm){
          // 加密密码
          const psw = CryptoJS.SHA256(this.password).toString();
          // 发送登录请求
          userApi.login(this.username,psw,this.yzm,this.checked,'http://8.129.20.147:2006/api/login').then(res => {
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
              this.$toast('请检查你的用户名、验证码或密码！');
              this.yzm = '';
              // 获取新的验证码
              userApi.getverify('http://8.129.20.147:2006/api/yzm').then(res=>{
                this.$refs.yzm.innerHTML=res.data;
              });
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
    // 显示遮罩层
    showOverlay(){
      this.show = true;
    },
 },

 watch:{
   formData(newVal,oldVal){
      //  判断输入框都有值将disabled改为false
      if(Number(newVal) === 3){
        // 三个input框内都有值时需要做的操作
        this.disabled=false;
      }else{
        this.disabled=true;
      }
    }
 },
 created(){
    this.username = this.$route.query.username;
    // 获取新的验证码
    userApi.getverify('http://8.129.20.147:2006/api/yzm').then(res=>{
      this.$refs.yzm.innerHTML=res.data;
    });
 },
  mounted () {     
   // 自动获取焦点
       this.$refs.use.focus();
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/reg.scss";
</style>