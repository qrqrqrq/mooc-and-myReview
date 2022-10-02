// 目录下有文件删不掉目录，需要用unlink将目录里的文件都删掉
const fs = require("fs");
fs.rmdir("./avater2", err => {
    if (err && err.code == 'ENOENT') {
        console.log("目录不存在");
    }
})