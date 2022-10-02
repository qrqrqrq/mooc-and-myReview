const http = require("http");
const Router = {}

function use(obj) {
    Object.assign(Router,obj);
}
    
function start() {
    http.createServer((req, res) => {
        const myUrl = new URL(req.url, "http://127.0.0.1")
        // console.log(myUrl.pathname);
        try {
            Router[myUrl.pathname](req,res);
        } catch (error) {
            Router["/404"](req,res)
        }
        res.end()
    }).listen(8000, () => {
        console.log("server start");
    })
}
exports.start = start
exports.use = use