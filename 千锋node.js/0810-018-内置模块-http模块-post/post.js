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
            // 作为客户端 去小米有品要数据
            httpPost((data) => {
                res.end(data)
            })
            break;
        default:
            res.end("404")
    }
}).listen(8000);

function httpPost(response) {
    var data = ""
    var options = {
        hostname: "m.xiaomiyoupin.com",
        port: "443",
        path: "mtop/market/search/placeHolder",
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    }
    var req = https.request(options, (res) => {
        res.on("data", chunk => { data += chunk })
        res.on("end", () => {
            response(data)
        })
    })
    req.write(JSON.stringify([{}, { "baseParam": { "ypClient": 1 } }]))
    req.end()
}