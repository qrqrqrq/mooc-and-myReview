const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('Hello,World---get')
})
app.post('/', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('Hello,World---post')
})
app.put('/user', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('put user')
})
app.delete('/user', (req, res) => {
    // req: 请求对象
    // res:响应对象
    res.send('delete user')
})

app.listen(8000, () => {
    console.log("server start at http://localhost:8000/");
})