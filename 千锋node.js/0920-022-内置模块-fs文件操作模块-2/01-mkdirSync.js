const fs = require("fs")
try {
    fs.mkdirSync("./avater")

} catch (error) {
    console.log('11',error);
}
// 阻塞后面代码执行