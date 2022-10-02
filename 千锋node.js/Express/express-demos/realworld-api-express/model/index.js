const mongoose = require('mongoose');
const {dbUrl} = require('../config/config.default')
// 连接MongoDB数据库
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// 当连接失败的时候
db.on('error', err => {
    console.log('MongoDB数据库连接成功', err);
});

// 当连接成功的时候
db.once('open', function () {
    console.log('MongoDB数据库连接成功');
});

// 组织导出模型类
module.exports = {
    User:mongoose.model('User',require('./user')),
    Article: mongoose.model('Article', require('./article'))
}