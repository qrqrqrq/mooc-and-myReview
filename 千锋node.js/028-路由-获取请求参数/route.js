const fs = require("fs")
function render(res, path, type = "text/html;charset=utf8", status = "200") {
    res.writeHead(status, { "Content-Type": type });
    res.write(fs.readFileSync(path), "utf-8");
    res.end();
}
const route = {
    "/login": (req,res) => {
        render(res, "./static/login.html");
    },
    "/home": (req, res) => {;
        render(res, "./static/home.html");
    },
    "/404": (req, res) => {
        render(res, "./static/404.html", "text/html;charset=utf8", "404");
    },
    "/favicon.ico": (req, res) => {
        render(res, "./static/favicon.ico", "image/x-icon;charset=utf8");
    }

}
module.exports = route;