var http = require('http');

// 创建服务器
http.createServer((req, res) => {
    // req 接受浏览器传的参数
    // res 返回渲染内容
    // res.write("hello,joeyee");//给浏览器写东西
    // res.end("[1,2,3]");//标志已经写完，后边不能再写了

    // res.write("hello,joeyee");
    // res.writeHead(200, { "Content-Type": "text/plain" });//html代码作为普通文本解析
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});
    res.write(`
        <html>
            <div>Hello world</div>
            <div>下午好,乔乔</div>
        </html>
    `)
    res.end();
}).listen(8000, () => {
    console.log("server start");
})