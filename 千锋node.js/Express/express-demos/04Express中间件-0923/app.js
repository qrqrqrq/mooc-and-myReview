const express = require('express')
const app = express()



app.use((req,res,next) => {
    console.log(req.method, req.url, Date.now());
    next()
})

app.get('/', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('get /')
})
app.get('/about', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('get /about')
})
app.post('/login', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('post/login')
})
// const myLogger = (req) => {
//     console.log(req.method, req.url, Date.now());
// }

// app.get('/', (req, res) => {
//     // req: 请求对象
//     // res:响应对象
//     myLogger(req)
//     res.send('get /')
// })
// app.get('/about', (req, res) => {
//     // req: 请求对象
//     // res:响应对象
//     myLogger(req)
//     res.send('get /about')
// })
// app.post('/login', (req, res) => {
//     // req: 请求对象
//     // res:响应对象
//     myLogger(req)
//     res.send('post/login')
// })

app.listen(8000, () => {
    console.log("server start at http://localhost:8000/");
})