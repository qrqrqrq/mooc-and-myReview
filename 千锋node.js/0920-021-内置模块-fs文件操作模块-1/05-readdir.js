// 读目录
const fs = require("fs");
fs.readdir("./avater", (err, data) => {
    if (!err) {
        console.log(data);
    }
})