function render(res, data, type = "application/json;charset=utf8", status = "200") {
    res.writeHead(status, { "Content-Type": type });
    res.write(data);
    res.end();
}

const apiRouter = {
    "/api/login": (req, res) => {
        // 怎样获取参数呢？
        const myUrl = new URL(req.url, "http://127.0.0.1");
        if (myUrl.searchParams.get("username") === "kerwin" && myUrl.searchParams.get("password") === "123456") {
            render(res, `{"ok":1}`)
        } else {
            render(res, `{"ok":0}`)
        }
        // console.log(myUrl.searchParams.get("username"));
    },
    "/api/oLoginPost": (req, res) => {
        // 怎样获取参数呢？
        var post = "";

        req.on("data", chunk => {
            // console.log(chunk);
            post += chunk
        })
        req.on("end", () => {
            console.log(post);
            post = JSON.parse(post);
            if (post.username === "kerwin" && post.password === "123456") {
                render(res, `{"ok":1}`)
            } else {
                render(res, `{"ok":0}`)
            }
        })
    }

}
module.exports = apiRouter;