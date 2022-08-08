var moduleRenderHtml = require("./module/renderHtml")
var moduleRenderStatus = require("./module/renderStatus")
var http = require('http');

// 创建服务器
http.createServer((req, res) => {
    // req 接受浏览器传的参数
    // res 返回渲染内容
    // res.write("hello,joeyee");
    // res.end("[1,2,3]");

    // res.write("hello,joeyee");
    // res.writeHead(200, { "Content-Type": "text/plain" });//html代码作为普通文本解析
    console.log(req.url);
    res.writeHead(moduleRenderStatus.renderStatus(req.url), { "Content-Type": "text/html;charset=utf-8" });
    res.write(moduleRenderHtml.renderHtml(req.url))
    res.end();
}).listen(8000, () => {
    console.log("server start");
})


