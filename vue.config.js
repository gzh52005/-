module.exports = {
  devServer: {
    port: 8080, // 端口号，如果端口被占用，会自动提升 1
    open: true, // 启动服务自动打开浏览器
    https: false, // 协议
    host: "localhost", // 主机名，也可以 127.0.0.1 或 做真机测试时候 0.0.0.0
    // proxy: {//跨域
    //   [process.env.VUE_APP_BASE_API]:{
    //     // 需要代理到的目标路径
    //     target:process.env.VUE_APP_SERVICE_URL,
    //     changOrigin: true, //开启代理
    //     // 重写路径
    //     pathRewrite: {
    //       // 会将 /dev-api 替换为 '',也就是 /dev-api 会移除，
    //       [`^${process.env.VUE_APP_BASE_API}`]:'',
    //     }
    //   }
    // },
  },
  lintOnSave: false, // 关闭语法校验,默认 true, 警告仅仅会被输出到命令行，且不会使得编译失败。
//   outputDir: "dist2", // 默认是 dist ,存放打包文件的目录,
//   assetsDir: "assets", // 存放生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir) 目录
//   indexPath: "out/index.html", // 默认 index.html, 指定生成的 index.html 的输出路径 (相对于 outputDir)。
  productionSourceMap: false, // 打包时, 不生成 .map 文件, 加快打包构建
};
