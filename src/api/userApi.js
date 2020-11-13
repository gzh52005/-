// 引入axios
let request = require('../utils/request');
// 验证用户名是否存在
function checkName(use,url) {
    return request.post(url,{
            use 
    })
}

// 请求验证码
function getverify(url){
    return request.post(url)
}

// 验证验证码
function checkyzm(vcode,url){
    return request.post(url,{
            vcode
    })
}

module.exports = {
    checkName,
    getverify,
    checkyzm,
}