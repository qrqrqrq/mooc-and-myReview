const fs = require("fs")
fs.rename("./avater", "./avater2", (err) => {
    // console.log(err);
    if (err && err.code == 'ENOENT') {
        console.log("目录不存在");
    }
})
