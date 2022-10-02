const express = require('express')
const app = express()
// 中间件的分类：

// ● 应用程序级别中间件
// 不关心请求路径：
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now());
//     next()
// })

// 限定请求路径
// app.use("/user/:id", function (req, res, next) {
//     console.log("Request Type:", req.method);
//     next();
// });

// 限定请求方法+请求路径
// app.get("/user/:id", function (req, res, next) {
//     res.send("USER");
// });
// ● 路由级别中间件

// ● 错误处理中间件
// ● 内置中间件
// ● 第三方中间件 


app.get('/', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('Hello,World---get')
})

app.listen(8000, () => {
    console.log("server start at http://localhost:8000/");
})