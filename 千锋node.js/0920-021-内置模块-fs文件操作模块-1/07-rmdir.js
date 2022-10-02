// 删除目录(此目录中含目录/文件)
const fs = require("fs")
fs.readdir("./avater", (err, data) => {
    // console.log(data);
    data.forEach(item => fs.unlink(`./avater/${item}`, err => {

    }))
    fs.rmdir("./avater",err=>{})
})