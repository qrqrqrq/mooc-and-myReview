var http = require("http");
var url = require("url");

http.createServer((req, res) => {
    var urlObj = url.parse(req.url, true);
    // console.log(urlObj.query.callback);
            res.end(`${urlObj.query.callback}(${JSON.stringify({
                name: 'joeyee',
                age: 18
            })})`)
}).listen(8000);