// 模拟bind
/* Function.prototype.bind1 = function () {
    // 将参数拆解为数组
    const args = Array.prototype.slice.call(arguments);

    // 获取this(数字第一项)
    const t = args.shift()
    const self = this

    // 返回一个函数
    return function () {
        return self.apply(t,args)
    }
}

function fn1(a, b) {
    console.log('this', this);
    console.log(a, b);
    return 'this is fn1'
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20)
const res = fn2()
console.log(res); */



function Fns(n, age) {
    console.log(this);
    console.log(arguments);
    // 将argument转为数组的三种方法：
    // 1.[...arguments]
    // 2.Array.from(arguments)
    // 3.Array.prototype.slice.call(arguments)
    this.n = n;
    this.age = age;
}

let _pObj = Fns.bind({ a: 123 }, 111, 222);
_pObj(333);