const fs = require("fs");
// 创建文件，若有文件则会被全部覆盖
fs.writeFile("./avater/a.txt", "hello world", err => {
    console.log(err);
})

// 追加文件  appendFile
fs.appendFile("./avater/a.txt", "\n下午好！", err => {
    console.log(err);
})

// 读文件  readFile
fs.readFile("./avater/a.txt","utf-8",(err, data) => {
    if (!err) {
        console.log(data);
    }
})

// 删除文件 --unlink
fs.unlink("./avater/a.txt", err => {
    console.log(err);
})