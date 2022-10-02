const http = require('http');//common.js
const querystring = require('querystring');
// require三个层级：1.系统自带模块 2.npm安装 3.自定义
// req:request     res:response
const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0];
    const queryStr = url.split('?')[1]

    // 解析queryString
    // const query = {};
    // queryStr && queryStr.split('&').forEach(item => {
    //     // item即为a=100的形式
    //     const key = item.split('=')[0]
    //     const value = item.split('=')[1]
    //     query[key] = value;
    // })
    const query = querystring.parse(queryStr || '')
    console.log('query is', query);

    const method = req.method;
    // console.log(path);
    // console.log("url is：",url);
    // console.log("method is：", method);

    // 定义路由：模拟获取留言板列表
    if (path === '/api/list' && method == 'GET') {
        if (query.filterType === '1') {
            res.end('this is list router,all');
        } else if (query.filterType === '2') {
            res.end('this is list router,only mine');
        }
    }

    // 定义路由：模拟创建留言
    if (path === '/api/create' && method === 'POST') {
        res.end('this is create router');
    }
    // res.end('404');


})
server.listen(8000);//可以监听http请求
console.log('http请求已被监听，8000端口');
