// bind() 方法创建一个新的函数，
// 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，
// 而其余参数将作为新函数的参数，供调用时使用。

let o = {
    a: 123,
    b:456
}
function fn1() {
    console.log(this);
}
// 返回的新函数n中，fn1的this指向改为了o
let n = fn1.bind(o)
n()

// -----------------------------------

this.name = 'aaa'
let o2 = {
    name: "joeyee",
    getName:function () {
        console.log(this.name)
    }
}
o2.getName()//joeyee

let o3 = o2.getName
// console.log(o3);
// o3()//this指向全局
// 使用bind修改this指向
let n1 = o3.bind(o2);
n1()//joeyee

// -------------------
// 把类数组转换成真正的数组

function fn2() {
    return Array.prototype.slice.call(arguments)
}
let n2 = fn2.bind(this, 111, 222);
n2()