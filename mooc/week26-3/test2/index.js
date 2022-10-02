const http = require('http');//common.js
const querystring = require('querystring');
const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0];
    const queryStr = url.split('?')[1]

    const method = req.method;

    // 定义路由：模拟获取留言板列表
    if (path === '/api/list' && method == 'GET') {
        // res.end('this is list router');
        const result = {
            errNo: 0,
            data: [{
                user: '张三', content: '留言1',
                user: '李四', content: '留言2'
            }]
        }
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        // res.end()只能放字符串，对象变字符串用JSON.stringify()
        res.end(JSON.stringify(result))
    }

    // 定义路由：模拟创建留言
    else if (path === '/api/create' && method === 'POST') {
        // res.end('this is create router');
        // console.log('req content-type', req.headers['content-type']);
        const reqType = req.headers['content-type'];

        let bodyStr = '';
        req.on('data', chunk => {//服务端怎么识别“流”，并接收数据
            // chunk即“流”的每一段数据
            bodyStr += chunk.toString();
        })
        req.on('end', () => {//服务端知道流完了
            if (reqType == 'application/json') {
                const body = JSON.parse(bodyStr);//json格式
                console.log('body is:', body);
            }
            res.end('接收完成');//异步
        })
        // const result = {
        //     errNo: 0,
        //     message: '创建成功'
        // }
        // res.writeHead(200, { 'Content-type': 'application/json' })
        // res.end(JSON.stringify(result))
    }

    else {
        // res.writeHead(404, { 'Content-type': 'text/plain' });
        // res.end('404');
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end(`
            <h1>404 not found </h1>
        `);
    }



})
server.listen(8000);//可以监听http请求
console.log('http请求已被监听，8000端口');
