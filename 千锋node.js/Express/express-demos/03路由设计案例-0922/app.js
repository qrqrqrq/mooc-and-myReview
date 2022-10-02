/* 需求：实现对任务清单的CRUD接口服务

查询任务列表
GET / todos

根据ID查询单个任务
GET / todos /: id

添加任务
POST / todos

修改任务
PATCH / todos

删除任务
DELETE / todos /: id */


// const { json } = require('express')
const express = require('express')
const fs = require('fs')
const app = express()

// 配置解析表单请求体:application/json
app.use(express.json())
// 配置解析表单请求体:application/x-www-form-urlencoded
app.use(express.urlencoded())

const { getDb, saveDb } = require('./db')


app.get('/todos', async (req, res) => {
    try {
        const db = await getDb()
        res.status(200).json(db.todos)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})
// /todos/:id  params参数格式
app.get('/todos/:id', async (req, res) => {
    try {
        const db = await getDb()
        const todo = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
        if (!todo) {
            return res.status(404).end()
        }
        res.status(200).json(todo)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})
app.post('/todos', async (req, res) => {
    try {
        // 1.获取客户端请求体参数
        const todo = req.body;
        // console.log(req.body);
        // 2.数据验证
        if (!todo.title) {
            return res.status(422).json({
                error: 'The field title is required'
            })
        }
        // 3.验证通过，把数据存到db中
        const db = await getDb();
        const lastTodo = db.todos[db.todos.length - 1]
        todo.id = lastTodo ? lastTodo.id + 1 : 1
        db.todos.push({
            id: lastTodo ? lastTodo.id + 1 : 1,
            title: todo.title
        })
        await saveDb(db);
        // 4.发送响应
        res.status(200).json(todo)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})
app.patch('/todos/:id', async (req, res) => {
    try {
        // 1.获取表单数据
        const todo = req.body
        // 2.查找到要修改的任务项
        const db = await getDb()
        const result = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))

        if (!result) {
            return res.status(404).end()
        }

        Object.assign(result, todo);

        await saveDb(db);

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})
app.delete('/todos/:id', async (req, res) => {
    try {
        const todoId = Number.parseInt(req.params.id)
        const db = await getDb()
        const index = db.todos.findIndex(todo => todo.id === todoId);
        if (index === -1) {
            return res.status(404).end()
        }
        db.todos.splice(index, 1)
        await saveDb(db)
        res.status(204).end
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
    // res.send('delete/todos')
})

app.listen(8000, () => {
    console.log("server start at http://localhost:8000/");
})
