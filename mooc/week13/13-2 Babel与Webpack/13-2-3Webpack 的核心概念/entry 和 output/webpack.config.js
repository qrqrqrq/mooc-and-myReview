const path = require("path");

module.exports = {
    mode: "development",
    // 单入口
    // entry: "./src/index.js",
    // 或者
    // entry: {
    //     main: "./src/index.js",
    // },

    // 多入口
    entry: {
        main: "./src/index.js",
        search: "./src/search.js",
    },

    // 单入口输出！！
    output: {
        path: path.resolve(__dirname, "dist"), //得到绝对路径
        filename: "bundle.js",
    },

    // 多入口输出
    output: {
        path: path.resolve(__dirname, "dist"), //得到绝对路径
        filename: "[name].js", //动态输出名
    },
};
