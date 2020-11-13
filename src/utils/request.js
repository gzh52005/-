import axios from "axios"

//报错为：
//从origin ' http://localhost:8080 '访问XMLHttpRequest ' http://8.129.20.147:2007/cha '已经被CORS策略阻止:当请求的凭据模式是'include'时，响应中的'Access- control - allow - origin '头的值不能是通配'*'。XMLHttpRequest发起的请求的凭据模式是由withCredentials属性控制的。

// const baseURL = process.env.NODE_ENV === 'development' ? "http://8.129.20.147:2007/cha" : "http://192.168.12.104:2005"
// const request = axios.create({
//     baseURL: baseURL,
//     withCredentials: true,
//     // headers: {'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiMTIzNDU2IiwiaWF0IjoxNTk1NTI0ODY3LCJleHAiOjE1OTYxMjk2Njd9.4jkcI0DMYv3A1REGXQsJmWtwsxBU7nuRvFO7NJz2pms'} 
// })
// const url = "http://8.129.20.147:2007";
// const request = axios.create({
//   baseURL: url,//设置基础路径
//   timeout: 5000,//设置最大响应时间F
// })
let url;
if(process.env.NODE_ENV === 'development'){
  url = "http://8.129.20.147:2007"
}else{
  url = "http://192.168.12.104:2005"
}
const request = axios.create({
  baseURL: url,//设置基础路径
})
export default request
