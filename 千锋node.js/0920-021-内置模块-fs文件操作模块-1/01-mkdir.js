const fs = require("fs")
// 创建目录
fs.mkdir("./avater", (err) => {
    console.log(err);
    if (err && err.code == 'EEXIST') {
        console.log("目录已存在");
    }
})