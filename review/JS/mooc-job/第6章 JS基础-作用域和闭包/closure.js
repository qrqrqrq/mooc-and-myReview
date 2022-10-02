//闭包：自由变量的寻找，是在函数定义的地方，向上级作用域查找而不是在执行的地方

// 1.函数作为返回值
// function create() {
//     const a = 100;
//     return function () {
//         console.log(a);
//     }
// }
// const fn = create();
// const a = 200;
// fn();//100

// 2.函数作为参数被传递
function print(fn) {
    const a = 200;
    console.log(fn);
    fn()
}
const a = 100;
function fn() {
    console.log(a);
}
print(fn)//100