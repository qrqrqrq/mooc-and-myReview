const http = require('http');//common.js
// require三个层级：1.系统自带模块 2.npm安装 3.自定义
// req:request     res:response
const server = http.createServer((req, res) => {
    console.log('已收到http请求');
    const url = req.url;
    console.log("url is：", url);
    res.end('end')//res返回信息给前端  json
})
server.listen(8000);//可以监听http请求
console.log('http请求已被监听，8000端口');
