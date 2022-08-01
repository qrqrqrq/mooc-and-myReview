## 比较运算符:> <  >= <= == !=  !== ===  

```javascript
/* 
    number---number之间正常比较
    number---string比较---->string转为number再比较
    string---string比较---->看字符对应的ASCII码;多个字符的，从左到右依次对比
    相等不看数据类型，全等需要看数据类型是否相等
    NaN与包括自己在内任何东西都不相等
*/

var num1 = 12,
    num2 = 18,
    numStr = "28",
    str1 = "A3",
    str2 = "A5";
console.log(num1 > num2); //false
console.log(numStr > num2); //true
console.log(str1 > str2); //false  A的ASCII码相等，3的ASCII码小于5的ASCII码

```

## 逻辑运算符

```javascript
/* 逻辑运算符：除了 undefined null NaN false "" 0 剩下的全为真

    &&:遇到真就往后走，遇到假或走到最后就返回当前的值。
    1&&1 返回1 真
    1&&0 返回0 假
    0&&1 返回0 假
    0&&0 返回0 假
    
    ||：遇到假就往后走，遇到真或走到最后就返回当前的值。
    1||1 返回1 真
    1||0 返回1 真
    0||1 返回1 真
    0&&0 返回0 假
    
    !:非，即对当前结果取反
    a为真，!a为假 

*/
var a = 1 && 2 && undefined && 10; //undefined
var b = 0 || 2 || undefined || 10; //2
console.log(a, b);
```

## 引用值

> 引用值： array object function date RegExp

```javascript
// typeof()
console.log(typeof {}); //object
console.log(typeof []); //object

/* 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。
对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），
因此，null 的类型标签是 0，typeof null 也因此返回 "object"。 */

console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof function () {}); //function

//注意！！ typeof(数据类型)，这里的数据类型如number，object....返回的都是string
console.log(typeof typeof 1); //但要注意这里想得string只能这样写，不可将数据类型直接写在typeof后面 ,typeof 总是返回一个字符串
```

## 显示类型转换

```javascript
console.log(typeof Number("123") + "-" + Number("123")); //number-123
console.log(typeof Number(true) + "-" + Number(true)); //number-1
console.log(typeof Number('') + "-" + Number('')); //number-0
console.log(typeof Number(null) + "-" + Number(null)); //number-0
console.log(typeof Number(undefined) + "-" + Number(undefined)); //number-NaN
console.log(typeof Number("a") + "-" + Number("a")); //number-NaN
console.log(typeof Number("1a") + "-" + Number("1a")); //number-NaN 
```
###  isNaN()

```javascript
// isNaN()用来确定一个值是否为NaN
// 如果isNaN函数的参数不是Number类型， isNaN函数会首先尝试将这个参数转换为数值，然后才会对转换后的结果是否是NaN进行判断。
console.log(isNaN(NaN)); //true
console.log(isNaN(123)); //false
console.log(isNaN("123")); //false
console.log(isNaN("a")); //true
console.log(isNaN(null)); //false
console.log(isNaN(undefined)); //true
```
### 字符串转数字的三种方式：

1. parseInt()：返回一个整数或 NaN。

   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt

   > parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数。

   ```javascript
   console.log(typeof parseInt("123") + "-" + parseInt("123")); //number-123
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
   ```

2. parseFloat()

   ```javascript
   var num = parseFloat("3.14555926");
   num.toFixed(2); //3.15，四舍五入保留两位小数
   ```

3. 一元正值符：一元运算符，如果操作数在之前不是 number，试图将其转换为 number

```javascript
console.log(+"3"); // 3
console.log(+"1.1" + +"1.1"); // 2.2
console.log(+true); // 1
console.log(+"true"); // NaN 
```

补充：与一元正值符不同

> 一元负值符 (`-`)：一元运算符，返回操作数的负值。

## 隐式类型转换

```javascript
 var a = "123";
 a++;
 console.log(a); //124
```

```javascript
// 在包含的数字和字符串的表达式中使用加法运算符（+），JavaScript 会把数字转换成字符串
console.log("123" + 1); //1231
```

```javascript
//在涉及其它运算符(/ * - % > < >= <=)（译注：如下面的减号'-'）时，JavaScript 语言不会把数字变为字符串。
console.log("3" * 2); //6

console.log("1" > 2); //false
console.log(1 > "2"); //false
console.log("1" > "2"); //转为ASCII码，再比较  false

console.log(1 == "1"); //true

console.log(1 === "1"); //不进行隐式转换，false

```

```javascript
console.log(NaN == NaN); //false

console.log(2 > 1 > 3); //false
console.log(2 > 1 == 1); //true

// undefined 和 null 既不大于0也不小于等于0
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

console.log(undefined == null); //true
console.log(undefined === null); //false
```



## 函数

> 1. 函数**不调用不执行**！
> 2. function 函数名 (参数) { 函数的执行语句; }
> 3. 函数是一共固定的功能或者是程序段被封装的过程，实现一个固定的功能或者是程序，在这个封装体中需要一共入口和一个出口
> 4. 入口就是参数，出口就是返回

### 函数声明：

```javascript
function test() {
     var a = 1,
         b = 2;
     console.log(a, b);
 }
```

### 匿名函数表达式/函数字面量

```javascript
var test = function () {  //匿名函数
    var a = 1,
        b = 2;
    console.log(a, b);
};
test();
```

### 函数的实参和形参

```javascript
var aa = Number(window.prompt("a"));
var bb = Number(window.prompt("b"));
function test(a, b) {
     console.log(a + b);
 }
 test(aa, bb);
```

1. 实参数个数<形参数个数

   ```javascript
   var test = function (a, b, c) {
       console.log(a, b, c); //1 2 undefined
   };
   test(1, 2);
   ```

2. 一个函数被调用时，累加它的实参值，arguments:实参列表

   ```javascript
   function sum() {
       var sum = 0;
       for (var i = 0; i < arguments.length; i++) {
           sum += arguments[i];
       }
       // 默认情况下，函数是返回 undefined 的。
       // 想要返回一个其他的值，函数必须通过一个 return 语句指定返回值。
       return sum;
   }
   console.log(sum(1, 2, 3));
   ```

3. 修改形参接收到的实参值

   ```javascript
   function test(a, b) {
       console.log(arguments[0]); //1
       a = 3;
       console.log(arguments[0]); //3
   }
   test(1, 2);
   ```

4. 形参b未接收到实参的值，那么在函数中修改b的值是无效的

   ```javascript
   function test1(a, b) {
       console.log(arguments[1]); //undefined
       b = 3;
       console.log(arguments[1]); //undefined
   }
   test1(1);
   ```

5. 函数返回值return

> - 默认情况下，函数是返回 undefined 的。
> - 想要返回一个其他的值，函数必须通过一个 return 语句指定返回值。

```javascript
function test(name) {
    return name ||"你没有填写姓名"  ;
}
console.log(test("joeyee"));//joeyee
```

## 全局变量和局部变量

```javascript
var a = 2;
function test() {
    var b = 1;
    console.log(a);
}
test(); //2
console.log(typeof b); //undefined
console.log(b); //报错, b is not defined
```

```javascript
var a = 1; //全局变量
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
test1(); //4 
```

## 函数参数默认值

> 生效条件：不传参数，或者明确的传递 undefined 作为参数

1. ES6写法：

```javascript
 function test(a = 2, b) {
                            console.log(a, b);
                        }
 test(undefined, 3); //2,3
```

2. ES5写法：

```javascript
function test(a, b) {
                            var a = arguments[0] || 1;
                            var b = arguments[1] || 2;
                            console.log(a, b);
                        }
                        test(undefined); //1,2
```

```javascript
function test(a, b) {
                            var a = typeof arguments[0] !== "undefined" ? arguments[0] : 1;
                            var b = typeof arguments[1] !== "undefined" ? arguments[1] : 2;
                            console.log(a, b);
                        }
                        test(undefined, 5); //1,5
```

## 递归-----找规律，找出口

```javascript
 // 求n的阶乘 n!= n * (n - 1)!
            function factory(n) {
                            if (n === 1) {
                                return 1;
                            } else {
                                return n * factory(n - 1);
                            }
            }
            console.log(factory(5));
```

```javascript
 // 斐波那契数列 1 1 2 3 5 8 13 ......
                        function Fibonacci(n) {
                            if (n === 1 || n === 2) {
                                return 1;
                            } else {
                                return Fibonacci(n - 1) + Fibonacci(n - 2);
                            }
                        }
                        console.log(Fibonacci(7));
```

## 预编译

> 1.通篇检查语法错误
>
> 1.5.预编译
>
> 2.解释一行，执行一行

### 函数声明整体提升;变量只有声明提升，赋值不提升

```javascript
test(); //1
function test() {
    console.log(1);
}
console.log(a); //undefined
var a = 10;
```

### 暗示全局变量

> var a = 1;//用var声明的变量
>
> b = 2;//未声明直接赋值的变量
>
> 以上两种书写方式的a,b都存在了window对象上，是全局变量

```javascript
function test() {
                   var a = (b = 1);
                }
test();
console.log(b); //1,挂在了window对象上
console.log(a); //a is not defined,是function test的局部变量，出了test函数就访问不到了
console.log(window.a); //undefined,访问window对象上没有的属性，默认就是undefined。
// 但a和window.a只是因为访问方式不同而答案不同其本质还是一样的
```

## AO:函数上下文

> AO = {
>
> ​      1.寻找函数形参和变量声明
>
> ​      2.把实参参数值赋给形参
>
> ​      3.寻找函数的函数体声明赋值给函数体
>
> ​      4.执行函数
>
> }

### 案例一：

```javascript
 function test(a) {
                            console.log(a);//function a() {}
                            var a = 1;
                            console.log(a);//1
                            function a() {}
                            console.log(a);//1
                            var b = function () {};
                            console.log(b);//function () {}
                            function d() {}
                   }
test(2);
```

```javascript
AO={
	a:undefined -> 2 ->function a() {} -> 1
    b:undefined -> function () {}
    d:function d() {}
}
```

### 案例二：

```javascript
function test(a, b) {
                            console.log(a); //3
                            c = 0;
                            var c;
                            a = 5;
                            b = 6;
                            console.log(b); //6
                            function b() {}
                            function d() {}
                            console.log(b); //6
                      }
test(1);
```

```javascript
 AO={
        a:undefined -> 1 -> 5
        b:undefined -> function b() {} -> 6
        c:undefined -> 0
        d:function d() {}
}
```

## GO:全局上下文

> GO = {
>
> ​            //1.寻找变量声明
>
> ​            //2.寻找函数声明
>
> ​            //3.执行
>
> ​        };

### GO案例一：

```javascript
var a = 1;
function a() {
   console.log(2);
}
console.log(a); //1
```

```javascript
GO = {
	a: undefined -> function a(){} -> 1
    };
```

### GO案例二：

```javascript
console.log(a, b); //function a() {} undefined
function a() {}
var b = function b() {};
```

```javascript
GO={
 	b : undefined -> function b() {}
	a : function a() {}
}
```

### AO+GO案例一:

```javascript
function test() {
                var a = (b = 1);
                console.log(a);//1
             }
test();
```

```javascript
GO = {
        b: 1,
     };
AO = {
        a: undefined -> 1
     };
```

### AO+GO案例二:

```javascript
var b = 3;
console.log(a); //function a (a){}
function a(a) {
     console.log(a); //function a (){}
     var a = 2;
     console.log(a); //2
     function a() {}
     var b = 5;
     console.log(b); //5
}
a(1);
```

```javascript
 GO = {
      b:undefined -> 3
      a:function a (a){}
  }
 AO = {
      a:undefined -> 1 - >
      function a() {
           var b = 5;
           console.log(b);
      }->2
       b:undefined ->5
 }
```

### AO+GO案例三：

```javascript
 a = 1;
function test() {
     console.log(a); //undefined
     a = 2;
     console.log(a); //2
     var a = 3;
     console.log(a); //3
}
test();
var a; 

GO={
     a:undefined -> 1
     test: function test() {}
   }
AO={
     a:undefined -> 2 -> 3
   } 
```

### AO+GO案例四：这道题思路错了！

```javascript
              function test() {
                console.log(b); //undefined
                if (a) {
                    var b = 2;
                }
                c = 3;
                console.log(c); //3
            }
            var a;
            test();
            a = 1;
            console.log(a); //1 

            //错误示范：
             GO = {
                    a : undefined -> 1
                    test : function test(){}
                };
                AO = {
                    a:undefined
                    b:undefined
                    c:undefined -> 3
                }; 

           //正解：
            GO = {
                    a:undefined -> 1
                    test : function test(){}
                    c:undefined -> 3
                };
                AO = {
                    b:undefined

                };

```

### AO+GO案例五：

```javascript
                console.log(a); //function a(a){}
                function a(a) {
                    var a = 10;
                    var a = function () {};
                }
                var a = 1;
                a(2);

                GO={
                    a:function a(a){} ->1
                }
                AO={
                    a:undefined -> 2 ->function () {} ->10
               } 
```

### 几道笔试题：

```javascript
            var a = false + 1;
            console.log(a); //1

            var b = false == 1;
            console.log(b); //false

            // 这题错了！c 未定义，typeof c 就是 undefined
            //  if (typeof c && -true + +undefined + "") ->
            //  if (typeof(undefined) && -1 + NaN + '') ->
            //  if ('undefined' && 'NaN') -> 1

            if (typeof c && -true + +undefined + "") {
                console.log("通过了"); //√
            } else {
                console.log("没通过");
            }

            if (1 + 5 * "3" === 16) {
                console.log("通过了"); //√
            } else {
                console.log("没通过");
            }
            // 加法就是要返回一个数！所以才会将ture变成1
            console.log(!!" " + !!"" - !!false || "没通过"); //1
            console.log(!!"" + !!"" - !!false || "没通过"); //没通过

            // 这题错了，有坑！
            // 括号优先级最高所以先算括号里的，这时候window.d赋值为1，再去走逻辑或因为window.d已经赋值为'1'此时返回'1'
            window.d || (window.d = "1");
            console.log(window.d); //'1'
            
```

### AO,GO的家庭作业

```javascript
             function test() {
                return a;
                a = 1;
                function a() {}
                var a = 2;
            }
            console.log(test()); //function a() {}
            AO={
                a:undefined -> function a() {}
            } 

               function test() {
                a = 1;
                function a() {}
                var a = 2;
                return a;
            }
            console.log(test()); //2
            AO={
                a:undefined ->  function a() {} -> 1 -> 2
            } 

            a = 1;
            function test(e) {
                function e() {}
                arguments[0] = 2;
                console.log(e); //2
                if (a) {
                    var b = 3;
                }
                var c;
                a = 4;
                var a;
                console.log(b); //undefined
                f = 5;
                console.log(c); //undefined
                console.log(a); //4
            }
            var a;
            test(1);
			console.log(a);//1
			console.log(f);//5

            GO={
                a:undefined -> 1
                f:5
                test:function test(e){}
            }
            AO={
                e:undefined -> 1 -> function e() {} -> 2
                a:undefined -> 4
                b:undefined
                c:undefined
            } 
```
##