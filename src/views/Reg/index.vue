<template>
 <van-form>
   <div style="display:none" >{{ exitsVal }}</div>
    <van-icon name="arrow-left" class="return" size="30px" color=" rgb(177, 174, 174)"/>
    <h1>注册艺龙会员</h1>
    <!-- 选择地区部分 -->
    <van-cell-group>
        <van-field 
        v-model.trim="username" 
        label="+86             ﹀" 
        placeholder="请输入用户名"  
        class="user"
        ref="use"
        @blur="checkname"
        />
    </van-cell-group>

  <!-- 发送验证码部分 -->
     <van-field
            v-model.trim="yzm"
            placeholder="请输入验证码"
            ref="permission"
            >
            <template #button>
            <van-button 
            size="middle" 
            type="primary" 
            class="getpermission" 
            @click="getpermission" 
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
  <!-- 服务条款部分 -->
  <div class="ServiceAgreement">
      <van-checkbox v-model="checked" checked-color="rgba(68,153,255,.5)"><span style="color:#ccc">注册即同意《</span><a href="https://m.elongstatic.com/static/webapp/myelong/static/elservice/service_ruler.html">艺龙旅游网服务条款</a><span style="color:#ccc">》</span></van-checkbox>
  </div>
  <!-- 提交部分 -->
  <div>
    <van-button 
    type="info" 
    class="regin" 
    @click="reg()"
    :disabled='disabled'
    >注册</van-button>
  </div>
</van-form>
</template>

<script>
import userApi,{checkName,getverify,checkyzm}from '../../api/userApi';
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
    disabled:true,
    formData:'',
    option1: [
        { text: '中国大陆(+86)', value: 0 },
        { text: '中国香港(+852)', value: 1 },
        { text: '中国澳门(+853)', value: 2 },
        { text: '中国台湾(+886)', value: 3 },
      ],
 }
 },

 components: {
 },
 computed:{
   exitsVal:function(){
        this.formData=Number(Boolean(this.username))+Number(Boolean(this.yzm))+Number(Boolean(this.password));
    }
 },

 methods: {
   //验证用户名
   checkname(){
      // 验证用户名是否符合规范(以1开头第二位3-9后面9位数)
      let checkname = /^1[3-9]\d{9}$/;
      // 校验输入的命名是否符合规范
      let isnamecorrect = checkname.test(this.username);
      // 判断用户名存在与否的提示信息
      if(isnamecorrect){
         userApi.checkName(this.username,"http://8.129.20.147:2006/api/yzuse").then(res =>{
           console.log(res);
        if(res.data.result){
          this.$toast('你已经注册过了哟！')
        }
      })
      }else{
        this.$toast('请输入格式正确的手机号');
      }
   },  
    // 获取验证码
    getpermission(){
      userApi.getverify('http://8.129.20.147:2006/api/yzm').then(res=>{
        this.$refs.yzm.innerHTML=res.data;
      })
    },
    //点击登陆按钮发送请求
    reg() {
        // 验证密码
        let checkpsw = /\w{8,16}/;
        let ispswcorrect = checkpsw.test(this.password);
        if(this.yzm && ispswcorrect && this.checked===true){
          // 验证验证码
          userApi.checkyzm(this.yzm,'http://8.129.20.147:2006/api/jyyzm').then(res => {
            // 获取新的验证码
            userApi.getverify('http://8.129.20.147:2006/api/yzm').then(res=>{
              this.$refs.yzm.innerHTML=res.data;
            });
            this.$router.push('/login');
          })
        } else if(!ispswcorrect){
          this.$toast('请输入格式正确的密码');
        } else if(!this.checked){
          this.$toast('请先勾选《艺龙服务协议条款》');
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
      if(Number(newVal) === 3){
        // 三个input框内都有值时需要做的操作
        this.disabled=false;
      }
    }
 },
  mounted () {     
    // 自动获取焦点
       this.$refs.use.focus();
  }
//  updated(){
//  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/reg.scss"
</style>