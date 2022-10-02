var http = require("http");
var https = require("https");
var url = require("url");

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    // console.log(urlObj.query.callback);
    res.writeHead(200, {
        "Content-type": "application/json;charset = utf-8",
        // cors 头
        "access-control-allow-origin": "*"
    })

    switch (urlObj.pathname) {
        case "/api/aaa":
            // 作为客户端 去猫眼要数据
            httpGet((data) => {
                res.end(data)
            })
            break;
        default:
            res.end("404")
    }
}).listen(8000);

function httpGet(response) {
    var data = ""
    https.get(`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%A4%A9%E6%B4%A5&ci=40&channelId=4`, res => {
        res.on("data", (chunk) => {
            data += chunk
        })
        res.on("end", () => {
            console.log(data)
            response.end(data)
        })
    })
}