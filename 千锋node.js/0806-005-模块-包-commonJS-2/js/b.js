/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var moduleA = require('./a');
function test(){
    console.log("test-bbb")
}
module.exports = test;
console.log("b.js"+moduleA.upper("joeyee"));

// console.log(result)n