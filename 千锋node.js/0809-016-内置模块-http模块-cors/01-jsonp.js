var http = require("http");
var url = require("url");

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    res.writeHead(200, {
        "Content-type": "application/json;charset=utf-8",
        // cors头
        "access-control-allow-origin":"*"
    })
    // console.log(urlObj.query.callback);
            res.end(`${JSON.stringify({
                name: 'joeyee',
                age: 18
            })}`)
}).listen(8000);