/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
function test(){
    console.log("test-aaa")
}



function upper(str){

    _init()
    return str.substring(0,1).toUpperCase()+str.substring(1)
}

function _init(){
    console.log("init")
}

// 只能导出一个
// module.exports = test;

// 导出多个
// module.exports = {
//     test,
//     upper
// }

exports.test = test;
exports.upper = upper;