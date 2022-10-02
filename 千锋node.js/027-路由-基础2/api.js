function render(res, data, type = "application/json;charset=utf8", status = "200") {
    res.writeHead(status, { "Content-Type": type });
    res.write(data);
    res.end();
}

const apiRouter = {
    "/api/login": (res) => {
        render(res,`{ok:1}`)
    }
}
module.exports = apiRouter;