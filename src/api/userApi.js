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

// 注册
function regin(use,psw,url){
    return request.post(url,{
        use,
        psw,
    })
}

// 登录
function login(use,psd,vcode,mdl,url){
    return request.post(url,{
        use,
        psd,
        vcode,
        mdl,
    })
}

// 无验证码登录
function loginp(use,psd,url){
    return request.post(url,{
        use,
        psd,
    })
}

// 修改密码
function changePsw(use,psd,url){
    return request.post(url,{
        use,
        psd
    })
}
module.exports = {
    checkName,
    getverify,
    checkyzm,
    regin,
    login,
    loginp,
    changePsw,
}