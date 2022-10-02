// 查看目录信息的方法
const fs = require("fs");
fs.stat("./avater", (err, data) => {
    console.log(data.isFile());//判断是否是文件
    console.log(data.isDirectory());//判断是否是目录
})
