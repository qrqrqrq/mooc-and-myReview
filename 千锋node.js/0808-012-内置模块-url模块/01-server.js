var http = require('http');
var url = require('url');
var moduleRenderHtml = require("./module/renderHtml");
var moduleRenderStatus = require("./module/renderStatus");

// 创建服务器
const server = http.createServer();
server.on('request', (req, res) => {
    var urlObj = url.parse(req.url,true);
    console.log(urlObj.query.name);
    var pathName = url.parse(req.url).pathname;
    res.writeHead(moduleRenderStatus.renderStatus(pathName), { "Content-Type": "text/html;charset=utf-8" });
    res.write(moduleRenderHtml.renderHtml(pathName))
    res.end();
})
server.listen(8000, () => {
    console.log("server start");
})