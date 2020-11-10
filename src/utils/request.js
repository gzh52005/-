//axios二次封装
const axios = require('axios');

const request = axios.create({
    baseURL: '/',//设置基础路径
    timeout: 5000,//设置最大响应时间
    //工作后：设置请求头，设置token。后端才会响应数据
    // headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTIzNDU2IiwiaWF0IjoxNTk1NTI0ODY3LCJleHAiOjE1OTYxMjk2Njd9.4jkcI0DMYv3A1REGXQsJmWtwsxBU7nuRvFO7NJz2pms'} 
  });

  //拦截器


  module.exports = request;//request==axios 但是又比axios多了一些基础设置



