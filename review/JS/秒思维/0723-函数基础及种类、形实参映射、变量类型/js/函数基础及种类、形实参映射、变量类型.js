// 最基本函数的写法-函数声明
// 函数不调用不执行！
// function 函数名 (参数) { 函数的执行语句; }

// 函数是一共固定的功能或者是程序段被封装的过程，实现一个固定的功能或者是程序，在这个封装体中需要一共入口和一个出口
// 入口就是参数，出口就是返回

// 函数声明：
// function test() {
//     var a = 1,
//         b = 2;
//     console.log(a, b);
// }

// 匿名函数表达式/函数字面量
/* var test = function () {//匿名函数
    var a = 1,
        b = 2;
    console.log(a, b);
};
test();
 */

// 函数的形参和实参
// var aa = Number(window.prompt("a"));
// var bb = Number(window.prompt("b"));
// function test(a, b) {
//     console.log(a + b);
// }
// test(aa, bb);

// 实参数<形参数
/* var test = function (a, b, c) {
    console.log(a, b, c); //1 2 undefined
};
test(1, 2); */

// 一个函数被调用时，累加它的实参值
// arguments:实参列表
/* function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    // 默认情况下，函数是返回 undefined 的。
    // 想要返回一个其他的值，函数必须通过一个 return 语句指定返回值。
    return sum;
}
console.log(sum(1, 2, 3)); */

/* // 修改形参接收到的实参值
function test(a, b) {
    console.log(arguments[0]); //1
    a = 3;
    console.log(arguments[0]); //3
}
test(1, 2);

// 形参b未接收到实参的值，那么在函数中修改b的值是无效的
function test1(a, b) {
    console.log(arguments[1]); //undefined
    b = 3;
    console.log(arguments[1]); //undefined
}
test1(1); */

// 默认情况下，函数是返回 undefined 的。
// 想要返回一个其他的值，函数必须通过一个 return 语句指定返回值。
/* function test(name) {
    return name ||"你没有填写姓名"  ;
}
console.log(test("joeyee")); */

/* var a = 2;
function test() {
    var b = 1;
    console.log(a);
}
test(); //2
console.log(typeof b); //undefined
console.log(b); //报错 b is not defined */

/* var a = 1; //全局变量
function test1() {
    var b = 2; //局部变量
    a = 4;
    console.log(a);

    function test2() {
        var c = 3; //局部变量
        b = 5;
        console.log(b);
    }
    test2(); //5

    console.log(c); //报错，c is not defined
}
test1(); //4 */
