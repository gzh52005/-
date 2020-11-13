<template>
 <van-form>
    <p class="header">
      <van-icon name="arrow-left" class="return" size="30px" color=" rgb(177, 174, 174)" @click="goto"/>
    </p>
    <h1>重置密码</h1>
    <!-- 选择地区部分 -->
    <van-cell-group>
        <van-field 
        v-model.trim="username" 
        label="+86" 
        placeholder="请输入手机号"  
        class="user"
        ref="use"
        />
    </van-cell-group>
  <!-- 提交部分 -->
  <div>
    <van-button 
    type="info" 
    class="regin" 
    @click="checkPhone"
    >下一步，验证手机号</van-button>
  </div>
</van-form>
</template>

<script>
import userApi,{changePsw}from '../../api/userApi';
import CryptoJS from 'crypto-js';
import request from '../../utils/request';
export default {
 data () {
 return {
    username:'',
    password: '',
    type:'password',
    value: '',
    checked: true,
    isshow:false,
 }
 },

 components: {
 },
 computed:{
 },

 methods: {
     goto(){
         this.$router.push('/login');
     },
     checkPhone(){
         this.$toast('功能正在修复')
     }
 },

 watch:{
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