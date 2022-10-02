const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('Hello,World---get')
})

// app.get('/random.txt', function (req, res) {
//     res.send('random.txt')
// })
// app.get('/ab?cd', function (req, res) {
//     res.send('ab?cd')//匹配acd  abcd
// })
// app.get('/ab*cd', function (req, res) {
//     res.send('ab*cd')//匹配  abcd  * 0个或多个
// })
// app.get('/ab(cd)?e', function (req, res) {
//     res.send('/ab(cd)?e')//匹配  abe   abcde
// })
// app.get('/a/', function (req, res) {
//     res.send('/a/')//匹配 带有a 的任何路径
// })
// app.get('/.*fly$/', function (req, res) {
//     res.send('/.*fly$')//匹配 带有以fly结尾的任意字符
// })
// app.get('/users/:id', function (req, res) {
//     console.log(req.params);
//     res.send('get users/:id')
// })
app.get('/users/:userId(\\d+)', function (req, res) {
    res.send('/users/:userId(\\d+)')
})

app.listen(8000, () => {
    console.log("server start at http://localhost:8000/");
})