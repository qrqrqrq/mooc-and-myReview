/* 
// 引用值： array object function date RegExp
// typeof()
console.log(typeof {}); //object
console.log(typeof []); //object

/* 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。
对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），
因此，null 的类型标签是 0，typeof null 也因此返回 "object"。 */

/* console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof function () {}); //function
//注意！！ typeof(数据类型)，这里的数据类型如number，object....返回的都是string
console.log(typeof typeof 1); //string typeof 总是返回一个字符串

// 1.显示类型转换
console.log(typeof Number("123") + "-" + Number("123")); //number-123
console.log(typeof Number(true) + "-" + Number(true)); //number-1
console.log(typeof Number('') + "-" + Number('')); //number-0
console.log(typeof Number(null) + "-" + Number(null)); //number-0
console.log(typeof Number(undefined) + "-" + Number(undefined)); //number-NaN
console.log(typeof Number("a") + "-" + Number("a")); //number-NaN
console.log(typeof Number("1a") + "-" + Number("1a")); //number-NaN */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// 字符串转为数字：parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数。返回一个整数或 NaN。

/* console.log(typeof parseInt("123") + "-" + parseInt("123")); //number-123
console.log(typeof parseInt("3.95") + "-" + parseInt("3.95")); //number-3(直接砍去，不四舍五入)
console.log(typeof parseInt(true) + "-" + parseInt(true)); //number-NaN
console.log(typeof parseInt(null) + "-" + parseInt(null)); //number-NaN
console.log(typeof parseInt(undefined) + "-" + parseInt(undefined)); //number-NaN
console.log(typeof parseInt(NaN) + "-" + parseInt(NaN)); //number-NaN

//这里要注意！！！
console.log(parseInt("abc123")); //NaN,当radix为10时
console.log(parseInt("abc123", 16)); //11256099,当radix为16时
console.log(parseInt("123abc")); //123
console.log(parseInt("1abc23")); //1
 */

// 字符串转为数字：parseFloat
// var num = parseFloat("3.14555926");
// num.toFixed(2); //3.15，四舍五入保留两位小数

// undefined和null没有toString(),调用了会报错

// undefined null NaN false 0 "" 是false 其它为true

// 字符串转为数字：一元加法运算符
/* console.log(+"3"); // 3
console.log(+"1.1" + +"1.1"); // 2.2
console.log(+true); // 1
console.log(+"true"); // NaN */

// 2.隐式类型转换

// var a = "123";
// a++;
// console.log(a); //124

/* // 在包含的数字和字符串的表达式中使用加法运算符（+），JavaScript 会把数字转换成字符串
console.log("123" + 1); //1231

// 在涉及其它运算符(/ * - % > < >= <=)（译注：如下面的减号'-'）时，JavaScript 语言不会把数字变为字符串。
console.log("3" * 2); //6

console.log("1" > 2); //false
console.log(1 > "2"); //false
console.log("1" > "2"); //转为ASCII码，再比较false

console.log(1 == "1"); //true

console.log(1 === "1"); //不进行隐式转换，false

console.log(NaN == NaN); //false

console.log(2 > 1 > 3); //false
console.log(2 > 1 == 1); //true

// undefined 和 null 既不大于0也不小于等于0
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

console.log(undefined == null); //true
console.log(undefined === null); //false */

// isNaN()用来确定一个值是否为NaN
// 如果isNaN函数的参数不是Number类型， isNaN函数会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是NaN进行判断。
console.log(isNaN(NaN)); //true
console.log(isNaN(123)); //false
console.log(isNaN("123")); //false
console.log(isNaN("a")); //true
console.log(isNaN(null)); //false
console.log(isNaN(undefined)); //true
