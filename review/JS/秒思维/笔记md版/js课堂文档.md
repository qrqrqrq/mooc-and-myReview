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
## 立即执行函数IIFE：immediately invoked function expression
> 特点：自动执行，执行完成后立即释放
>            用处：初始化函数
>            写法：   1.(function(){})()
>                    2.(function(){}())
>            新增知识点：()里放任何东西都能形成表达式
>           一定是表达式才能被执行符号()执行,这样function test(){return 1;}();不能执行
>            所以立即执行函数里的函数需要是表达式
>            函数声明变成表达式的方法：+ - ! || &&


```javascript
        (function(a,b){
                console.log(a+b);
        })(3,2)//立即执行函数传参
        
        // 接收立即执行函数函数的返回值
        var sum = (function(a,b){
                return a + b;
        })(3,2)
        console.log(sum);
```

注意！
```javascript
function test(){}();//报错，因为表达式才可以立即执行
function test(){}(6);//不报错但也不执行，因为会把(6)看成表达式而不是立即执行符号
```

## 逗号运算符：对它的每个操作数求值（从左到右），并返回最后一个操作数的值。

```javascript
        let x = 1;
        x = (x++, x);
        console.log(x);//2  
```

## 闭包
>    当内部函数被返回到外部并保存时，一定会产生闭包。
>    闭包会产生原来的作用域链不释放。
>    过度的闭包可能会导致内存泄漏或加载过慢

```javascript
		function test1(){
            function test2(){
                var b = 2;
                console.log(a);
            }
            var a = 1;
            return test2();
        }
        var c = 3;
        var test3 = test1();
        test3();
```

### 闭包的案例：
```javascript
        // 打印是10个10
         function test(){
            var arr = [];
            for(var i = 0; i < 10; i++){
                arr[i] = function(){
                    document.write(i + ' ');
                }
            }
            return arr;
        }
        var myArr = test();
        
        for(var j = 0 ;j < 10;j++){
            myArr[j]()//结果是10个10
        } 

        // 打印0-9的两个方法：

         function test(){
            var arr = [];
            for(var i = 0; i < 10; i++){
                arr[i] = function(num){
                    document.write(num + ' ');
                }
            }
            return arr;
        }
        var myArr = test();
        
        for(var j = 0 ;j < 10;j++){
            myArr[j](j)//结果是0-9
        } 

        // 常用：
        function test(){
            var arr = [];
            for(var i = 0; i < 10; i++){
                (function (j){
                    arr[j] = function(){
                        document.write(j + ' ');
                    }
                })(i)
            }
            return arr;
        }
        var myArr = test();
        
        for(var j = 0 ;j < 10;j++){
            myArr[j]()//结果是0-9
        }
```

## 一些面试题
```javascript
<body>
    <!-- 一系列面试题 -->

    <!-- 1.点击li弹出li下标 -->
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>
    <script>
         var oLi =  document.querySelectorAll('li');
        	for(var i = 0;i < oLi.length; i++){
            	oLi[i].onclick = function () {
                console.log(i);//点击哪个都输出5，而不是0-4
            }
        } 
        var oLi =  document.querySelectorAll('li');
        for(var i = 0;i < oLi.length; i++){
            (function(j){
                oLi[j].onclick = function () {
                    console.log(j);//输出0-4,正解
                }
            })(i)
        }


        // 2.逗号运算符 + typeof + 立即执行函数
           var fn = (
            function test1(){
                return 1;
            },
            function test2(){
                return '2';
            }
        )();
        console.log(typeof(fn));//string 

        // 3.函数表达式:忽略函数的名字 + typeof
        var a = 10;
        if(function b(){}){
            a += typeof(b);
        }
        console.log(a);//10undeined

        /* 
        (function b(){})是表达式，函数表达式会忽略函数的名字b,所以b没有声明报b is not defined ，typeof(b)是undefined
         */
    </script>
</body>
```

## 对象
```javascript
        var person = {
        name:'joeyee',
        sex:'female',
        height:160,
        weight:108,
        eat:function(){
            this.weight++;
            console.log("eating....",this.weight);
        },
        study:function(){
            this.weight--;
            console.log("studying....",this.weight);
        },
        sleep:function(){
            console.log("sleeping...");
        }
    }
    // 删除属性
    delete person.height;
    // 删除方法：注意！！面试题
    delete person.sleep //√
    // delete person.sleep() //×

    person.eat();
    person.eat();
    person.study();
```


```javascript
     var attendance  = {
        students:[],
        total:3,
        join:function(name){
            this.students.push(name);
            if(this.students.length === this.total){
                console.log(name + '已到，学生已到齐');
            }else{
                console.log(name + '已到，学生未到齐');
            }
            console.log(this.students);
        },
        leave:function(name){
            var idx = this.students.indexOf(name);
            if(idx !== -1){
                this.students.splice(idx,1);
                console.log(name + '已早退');
            }
            console.log(this.students);
        },
        classOver:function () {
            this.students = [];
            console.log("已下课");
        }
    }
    attendance.join("joe")
    attendance.join("yee")
    attendance.join("joeyee")
    attendance.leave("joe") 
```

## 构造函数

```javascript
    // 自定义构造函数,构造函数名规范是大驼峰命名
    function Person(){
        this.name = "joeyee";
        this.sex = "female";
        this.height = 160;
        this.weight = 108;
        this.eat = function(){
            this.weight++;
            console.log("eating....",this.weight);
        }
        this.study = function(){
            this.weight--;
            console.log("studying....",this.weight);
        }
        this.sleep = function(){
            console.log("sleeping...");
        }
    }

    var girl1 = new Person();
    var girl2 = new Person();

    girl1.name = "joe"

    console.log(girl,girl2);
```

**传参版：**

```javascript
function Person(name,sex,height,weight){
        this.name = name;
        this.sex = sex;
        this.height = height;
        this.weight = weight;
        this.eat = function(){
            this.weight++;
            console.log("eating....",this.weight);
        }
        this.study = function(){
            this.weight--;
            console.log("studying....",this.weight);
        }
        this.sleep = function(){
            console.log("sleeping...");
        }
    }

    var girl1 = new Person("joe","female",175,110);
    var girl2 = new Person("joeyee","female",158,108);

    console.log(girl1,girl2);
```

**传参升级版---含对象解构**
```javascript
function Person({name,sex,height,weight}){
        this.name = name;
        this.sex = sex;
        this.height = height;
        this.weight = weight;
        this.eat = function(){
            this.weight++;
            console.log("eating....",this.weight);
        }
        this.study = function(){
            this.weight--;
            console.log("studying....",this.weight);
        }
        this.sleep = function(){
            console.log("sleeping...");
        }
    }

    var girl1 = new Person({
        name:"joe",
        sex:"female",
        height:175,
        weight:110
    });
    var girl2 = new Person({
        name:"joeyee",
        sex:"female",
        height:158,
        weight:108
    });

    console.log(girl1,girl2);
```

>构造函数没有实例化时,this指向的是window;
>构造函数实例化后，this指向实例化后的对象而非构造函数

```javascript
        /*GO = {
            Car:function,
            car1:{
                color: 'red',
                brand: 'Benz'
            }
        }
        AO = {
        // new了以后保存一个空this
            this:{
                color:color,
                brand:brand
            }
        }*/

        function Car(color,brand) {
            this.color = color;
            this.brand = brand;

            // 隐式return this
        }

        var car1 = new Car('red','Benz');
        var car2 = new Car('black','Mazda');
        console.log(car1.color);
        console.log(car2.color);

```

**仿一个构造函数**
```javascript
        function Car(color, brand) {
            var me = {};
            me.color = color;
            me.brand = brand;

            return me
        }

        var car1 = Car('red', 'Benz');
        console.log(car1.color);
```
>当return引用类型时[],{},function(){}，this指向会被引用类型覆盖，以引用类型为准 
```javascript
        function Car(color, brand) {
            this.color = color;
            this.brand = brand;

            // 当不隐式的return this时
            return function change() {
                console.log("this指向会被引用类型覆盖，以引用类型为准");
            }
        }

        var car = new Car('red', 'Benz');
        console.log(car);
```
## 包装类
>包装类 new Number new String new Boolean
>原始值没有自己的属性和方法
>undefined 和 null 不能设置任何的属性和方法，会报错

```javascript
        var a = 123;
        a.len = 3;
        // a = 123 -> new Number(123).len = 3 -> 没法保存 -> delete len属性 -> undefined
        console.log(a.len);//undefined

        var a = new Number(123);
        a.len = 3;
        console.log(a);//3 

        var str = 'abc';
        // new String(str).length 因为new String后本身有length属性所以可以直接访问
        // console.log(new String(str).length);
        console.log(str.length);//3

        // 数组的截断方法：
        var arr = [1, 2, 3, 4, 5];
        arr.length = 3;
        console.log(arr)//[1,2,3];
        
        //字符串改变length不发生截断 
        var str = 'abc'
        str.length = 1;
        // new String(str).length = 1 -> 没地方保存 -> delete删除 -> new String(str).length -> 3(原本的长度)
        console.log(str.length);//3 
```

## 一些练习题
```javascript
        // 1.包装类+typeof
        var name = "蓝轨迹";
        name += 10;//"蓝轨迹10"
        var type = typeof (name);//'string'
        if (type.length === 6) {//true
            // new String(type).text = 'string' -> 没地方保存 -> delete
            type.text = 'string';
        }
        console.log(type.text);//undefined

        // 用new String()包装一下就可以输出！
        var name = "蓝轨迹";
        name += 10;//"蓝轨迹10"
        var type = new String(typeof (name));//'string'
        if (type.length === 6) {//true
            type.text = 'string';
        }
        console.log(type.text);//string

        // 2.构造函数
        function Car(brand, color) {
            this.brand = 'Benz',
            this.color = 'red'
        }
        var car = new Car("Mazda", "black")
        console.log(car);//构造函数没参数，Car {brand: 'Benz', color: 'red'}

        // 3.构造函数+闭包
        function Test(a, b, c) {
            var d = 1;
            this.a = a;
            this.b = b;
            this.c = c;
            function f() {
                d++;
                console.log(d);
            }
            this.g = f;
            // return this;  ->闭包
        }
        var test1 = new Test();
        test1.g();//2
        test1.g();//3
        var test2 = new Test();
        test2.g();//2

        // 4.GO
        /* GO = {
            x:undefined -> 1
            y:undefined -> 0
            z:undefined -> 0
            add:add(n){ return n = n + 1; } -> add(n){ return n = n + 3; }
        } */
        var x = 1,
            y = z = 0;

        function add(n) {
            return n = n + 1;
        }
        y = add(x);

        function add(n) {
            return n = n + 3;

        }
        z = add(x);
        console.log(x, y, z);//1 4 4

        // 5.以下三个函数，哪个能输出12345 --> 1，3可以
        // 立即执行函数
        function foo1(x) {
            console.log(arguments);
            return x;
        }
        foo1(1, 2, 3, 4, 5);

        //函数声明后边不能跟执行符号，会报错;
        // (1, 2, 3, 4, 5),不报错也不执行
        function foo2(x) {
            console.log(arguments);
            return x;
        } (1, 2, 3, 4, 5);

        (function foo3(x) {
            console.log(arguments);
            return x;
        })(1, 2, 3, 4, 5);

        // 6.形参实参一一对应
        function b(x,y,a){
            a = 10;
            console.log(arguments[2]);//10
        }
        b(1,2,3)
```
## 原型
>原型prototype其实是构造对象的一个属性，打印出来看了是对象

```javascript
        //function HandPhone() {}
        //console.log(HandPhone.prototype);//是对象
         function Handphone(coor, brand) {
            this.color = color;
            this.brand = brand;
        }
        // 不需要修改的属性，方法放在构造函数的prototype上
        //这个prototype是定义构造函数构造出的每个对象的公共祖先
        //所有被该构造函数构造出的对象都可以继承原型上的属性和方法
        Handphone.prototype.rom = '64G';
        Handphone.prototype.ram = '6G';
        Handphone.prototype.screen = '18:9';
        Handphone.prototype.system = 'Android';

        Handphone.prototype.call = function () {
            console.log('I am calling somebody');
        }

        // 开发中一般会将Handphone.prototype上的属性，方法写成这样
        // 但会把本来的Handphone.prototype对象里的属性，方法都弄没，比如原本的constructor就会消失
        Handphone.prototype = {
            rom: '64G',
            ram: '6G',
            screen: '18:9',
            call: function () {
                console.log('I am calling somebody');
            }
        }

        var hp1 = new Handphone('red', '小米');
        var hp2 = new Handphone('black', '华为');
        console.log(hp1.rom);
        console.log(hp2.ram);
        console.log(hp1.screen);
        console.log(hp2.screen);
        hp2.call(); 
```
> 实例出的对象只能访问构造函数prototype上的属性,增删改均不行
```javascript
        function Test(){
            // this.name = 'proto'
        }
        Test.prototype.name = 'prototype';
        var test = new Test();
        // 实例出的对象只能访问构造函数prototype上的属性
        console.log(test.name);//prototype 
```

>修改Handphone的constructor
```javascript
        function Handphone(color, brand,system) {
            this.color = color;
            this.brand = brand;
            this.system = system;
        }
        console.log(Handphone.prototype);//constructor: ƒ Handphone(color, brand,system)

        function Telephone(){}
        // 修改Handphone的constructor
        Handphone.prototype = {
            constructor:Telephone
        }
        console.log(Handphone.prototype);//constructor:  ƒ Telephone()
```
>__proto__属于每一个实例化后的对象
```javascript
        function Car(){
            // var this = {
            //     __proto__:Car.prototype
            // }
        }
        Car.prototype.name = 'Benz';
        // __proto__属于每一个实例化后的对象
        var car = new Car();
        console.log(car);
```
```javascript
        function Person() {
             // var this = {
             //     __proto__:Car.prototype
             // }
        }
        Person.prototype.name = 'joeyee';
        var p = {
             name: 'joe'
        }
        var person = new Person();

         // person.__proto__可以更改
        person.__proto__ = p;
        console.log(person.__proto__);
```

>看代码找一个注意点：
```javascript
        Car.prototype.name = 'Benz';
        function Car() { }
         // car实例化之后改了 Car.prototype.name属性，没有用了，对实例化后的对象car不构成影响
        var car = new Car();
        // 对Car.prototype重新赋一个对象的方式--会把本来的Car.prototype对象里的属性，方法都弄没，比如原本的constructor就会消失
        Car.prototype = {
            name: 'Mazda'
        }
        var newCar = new Car();
        console.log(car.name);//Benz
        console.log(newCar.name);//Mazda

        // ----------------------------------------------- 
        
        function Car() { }
        Car.prototype = {
            name: 'Mazda'
        }
        // 实例化之前改了 Car.prototype.name属性
        var car = new Car();
        console.log(car.name);//Mazda
        Car.prototype.name = 'Benz';
```