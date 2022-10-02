const http = require("http");
const route = require("./route")
http.createServer((req, res) => {
    const myUrl = new URL(req.url, "http://127.0.0.1")
    // console.log(myUrl.pathname);
    route[myUrl.pathname](res);
    res.end()
}).listen(8000, () => {
    console.log("server start");
})