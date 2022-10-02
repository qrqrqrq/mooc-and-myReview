const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // req: 请求对象
    // res:响应对象
    console.log(req.url);//请求地址
    console.log(req.method);//请求方法
    console.log(req.headers);//请求头
    console.log("请求参数：", req.query);

    // 设置响应状态码
    // res.statusCode = 200

    // 结束响应
    // res.end()
    // res.send('Hello,World')

    // res.write('a')
    // res.write('b')
    // res.write('c')
    // res.end()

    // res.end('bye')
    // res.send({ user: 'zhangsan' })
    // res.status(201).send('ok')
    res.cookie('login', 'yes')
    res.cookie('a',123)
    res.status(201).send('ok')
})

app.listen(8000, () => {
    console.log("server start at http://localhost:8000/");
})