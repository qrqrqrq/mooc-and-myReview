---
typora-root-url: ..
---

# HTML面试题

## 如何理解HTML语义化？

![](C:\Users\Dell\Desktop\面试\css\如何理解HTML语义化？.png)

1.让人更容易读懂代码即增加代码的可读性

2.让搜索引擎更容易读懂代码

## 默认情况下，哪些HTML标签是块级元素、哪些是内联元素？

display:block/table:有div h1(h1-h6) table **ul ol** p等

display:inline/inline-block:有span img input button等

# css面试

##  css布局

### 盒子模型的宽度如何计算？

> **HTMLElement.offsetWidth**是一个只读属性，返回一个元素的布局**宽度**。
>
> offsetWidth=border+padding+width+scrollbar（如果存在的话）。

![盒模型宽度计算](/mooc-job/css/盒模型宽度计算.jpg)

答：1+1+10+10+100=122px

![image-20220711155302401](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220711155302401.png)

给盒子加**border或padding**时，盒子会被撑大，如果盒子不想被撑大？

方案：css3的自动内减：给盒子添加**box-sizing:border-box;**

优点：浏览器会自动计算自动计算多余大小，自动在内容中减去

### margin纵向重叠的问题

![](/mooc-job/css/margin纵向重叠的问题.png)

> 外边距折叠现象 – ① 合并现象
>
> 场景：垂直布局 的 相邻块级元素，上下的margin会合并。
>
> 都正，结果是两者间较大值
>
> 都负，结果是两者绝对值的较大值。 
>
> 一正一负时，结果是两者相加的和
>
> 即相邻元素的margin-top 和 margin-bottom 会发生重叠；
>
> 空白内容的P标签、div标签等也会重叠。
>
> 

答：15px

### margin负值的问题

对margin的top left right bottom设置负值，有何效果？

| 方向  |        属性         |               效果               |
| :---: | :-----------------: | :------------------------------: |
| 水平  |  margin-left(正值)  |           当前盒子右移           |
| 水平  | margin-right(正值)  | 当前盒子不受影响，右边的盒子右移 |
| 垂直  |  margin-top(正值)   |           当前盒子下移           |
| 垂直  | margin-bottom(正值) | 当前盒子不受影响，下边的盒子下移 |

| 方向  |        属性         |               效果               |
| :---: | :-----------------: | :------------------------------: |
| 水平  |  margin-left(负值)  |           当前盒子左移           |
| 水平  | margin-right(负值)  | 当前盒子不受影响，右边的盒子左移 |
| 垂直  |  margin-top(负值)   |           当前盒子上移           |
| 垂直  | margin-bottom(负值) | 当前盒子不受影响，下边的盒子上移 |

![image-20220711165535269](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220711165535269.png)

![image-20220711165805262](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220711165805262.png)

![image-20220711170127533](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220711170127533.png)

![image-20220711170330083](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220711170330083.png)

### BFC理解和应用

什么是BFC?开启BFC的条件？如何应用？

开启BFC后元素是一块独立渲染区域，内部元素的渲染不会影响边界以外的元素。

[BFC理解和应用](https://vue3js.cn/interview/css/BFC.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88)



### float布局的问题，以及clearfix

实现圣杯布局

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>圣杯布局</title>
        <style>
            .top {
                background-color: aquamarine;
            }
            .main {
                padding: 0 200px;
            }
            .left {
                position: relative;
                width: 200px;
                background-color: chocolate;
                margin-left: -100%;
                left: -200px;
            }
            .center {
                width: 100%;
                background-color: chartreuse;
            }
            .right {
                width: 200px;
                background-color: blueviolet;
                margin-right: -200px;
            }
            .bottom {
                background-color: cornflowerblue;
            }
            .column {
                float: left;
            }
            /* 清除column浮动对bottom的影响 */
            .clearfix:after {
                content: "";
                display: table;
                clear: both;
            }
        </style>
    </head>
    <body>
        <div class="top">This is top</div>
        <div class="main clearfix">
            <div class="center column">This is center</div>
            <div class="left column">This is left</div>
            <div class="right column">This is right</div>
        </div>
        <div class="bottom">This is bottom</div>
    </body>
</html>
```

实现双飞翼布局

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>双飞翼布局</title>
        <style type="text/css">
            body {
                min-width: 550px;
            }
            .col {
                float: left;
            }
            #main {
                width: 100%;
                height: 200px;
                background-color: #ccc;
            }
            #main-wrap {
                margin: 0 190px;
            }

            #left {
                width: 190px;
                height: 200px;
                background-color: #0000ff;
                margin-left: -100%;
            }
            #right {
                width: 190px;
                height: 200px;
                background-color: #ff0000;
                margin-left: -190px;
            }
        </style>
    </head>
    <body>
        <div id="main" class="col">
            <div id="main-wrap">this is main</div>
        </div>
        <div id="left" class="col">this is left</div>
        <div id="right" class="col">this is right</div>
    </body>
</html>

```



手写clearfix

```css
.clearfix:after,
.clearfix:before{
	content:'';
    display;table;
    clear:both
}
```



### flex布局的问题

flex实现一个三点的色子

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>flex实现三点色子</title>
        <style type="text/css">
            .div1 {
                display: flex;
                justify-content: space-between;
                width: 200px;
                height: 200px;
                padding: 15px;
                border: 1px solid #ccc;
                box-sizing: border-box;
            }
            .div1 .point {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: pink;
            }
            .point:nth-child(2) {
                /* 添加到子容器要使用：align-self */
                /* align-self:XXX是添加到父容器的*/
                align-self: center;
            }
            .point:nth-child(3) {
                align-self: flex-end;
            }
        </style>
    </head>
    <body>
        <div class="div1">
            <div class="point"></div>
            <div class="point"></div>
            <div class="point"></div>
        </div>
    </body>
</html>

```



## css定位

### absolute定位依据

相对于其包含块元素定位，

这里的包含块是指离该元素最近的开启了定位的祖先元素（position：relative，fixed，absolute）

### relative定位依据

依据自身位置定位

### 垂直/水平居中对齐的实现方式（大总结）

**水平居中：**

- inline元素：text-align:center;

- block元素：margin:0 auto;

- absolute元素：left:50%;+margin-left:**-**(需要居中元素的宽度的一半)px;

  可见absolute元素用此方法居中时要已知居中元素的宽度！

**垂直居中：**

1. inline元素：line-height:height;(即line-height=height)
2. absolute元素：

- top:50%;+margin-top:**-**(需要居中元素的高度的一半)px;

  可见absolute元素用此方法居中时要已知居中元素的高度！

- top:50%;+transform： translateY（-50%）

  

**垂直水平居中：**

- top:50%+left:50%+transform:translate(-50%,-50%)
- left:50%+top:50%+margin-left:**-**(需要居中元素的宽度的一半)px+margin-top:**-**(需要居中元素的高度的一半)px;
- top,left,right,bottom=0+margin:0 auto;

## css图文样式

### line-height如何继承？

![image-20220717164207898](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220717164207898.png)

p标签行高：20px*200%=40px，先计算再继承

其他情况：

上图其它代码不变，当line-height:50px;    此时p标签行高也为50px

上图其它代码不变，当line-height:1.5;    此时p标签行高为16px*1.5=24px

## css响应式

### rem，vw/vh是什么

https://vue3js.cn/interview/css/em_px_rem_vh_vw.html#%E4%B8%80%E3%80%81%E4%BB%8B%E7%BB%8D

### 响应式布局的常用方案

https://vue3js.cn/interview/css/responsive_layout.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88

### 网页视口尺寸





## css动画

# 第4章 JS基础-变量类型和计算

## 变量类型
### 值类型和引用类型的区别

> 原始类型（基本类型）：undefined String Boolean Number null Symbol

![image-20220718100558535](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220718100558535.png)



undefined和null的区别：
> 引用类型(常用)：object array function date  RegExp

![image-20220718100650034](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220718100650034.png)

![image-20220718102806730](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220718102806730.png)

### typeof能判断哪些类型

### 手写深拷贝
## 变量计算

### 类型转换

字符串拼接

![image-20220718104354869](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220718104354869.png)

何时使用==

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality

![image-20220718104505251](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220718104505251.png)https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality

![image-20220718104629827](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220718104629827.png)

因为：如果一个操作数是`null`，另一个操作数是`undefined`，则返回`true`。即`undefined==null`

除了以上一种情况，其它情形都使用 ===



if语句和逻辑计算

![image-20220831113650358](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220831113650358.png)

```javascript
//以下都是falsely变量。除此之外都是truely变量
!!0 === false
!!NaN === false
!!'' === false
!!nullL === false
!!undefined === false
!!false === false
```





# 第5章 JS基础-原型和原型链

> 涉及知识点：原型和原型链、instanceof、class、继承

### 如何准确判断一个变量是不是数组

**`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

### 手写一个简易的jQuery,考虑插件及扩展性

### class的原型本质，怎么理解

### 继承的多种方式：

####  通过原型链实现继承:让子类构造函数的prototype指向父类构造函数的实例

![image-20220925101854280](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220925101854280.png)

```javascript
        // 父类，People,有sayHello(),sleep()
        function People(name, age, sex) {
            // 如果父类的属性中有引用类型值，则这个属性会被所有子类的实例共享；
            // this.arr = [12, 22];

            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        People.prototype.sayHello = function () {
            console.log("你好，我是" + this.name + "我今年" + this.age + "岁了");
        };
        People.prototype.sleep = function () {
            console.log(this.name + "正在睡觉，zzzzzz");
        };

        // 子类，Student类除了父类的sayHello(),sleep()还有自己独有的study(),exam()
        function Student(name, age, sex, studentNumber, school) {
            this.name = name;
            this.age = age;
            this.sex = sex;
            this.studentNumber = studentNumber;
            this.school = school;
        }

        // 改变Student.prototype
        // 让子类的prototype指向父类的实例
        Student.prototype = new People();

        Student.prototype.study = function () {
            console.log(this.name + "正在学习");
        };
        Student.prototype.exam = function () {
            console.log(this.name + "正在考试");
        };

        // 子类重写父类的方法
        Student.prototype.sayHello = function () {
            console.log("您好，敬礼！我是" + this.name + "我今年" + this.age + "岁了");
        };
        var hanmeimei = new Student("韩梅梅", 9, "女", 123456, "慕课小学");
        hanmeimei.sleep();
        hanmeimei.study();
        hanmeimei.sayHello();

        // 通过原型链实现继承的问题
        // 问题1：如果父类的属性中有引用类型值，则这个属性会被
        // 所有子类的实例共享；
        // 问题2：子类的构造函数中，往往需要重复定义很多超类定
        // 义过的属性。即，子类的构造函数写的不够优雅；
```
#### 组合继承:借用原型链+借用构造函数 (对原型链继承进行优化)
>优化方式：“借用构造函数”的技术。即在子类构造函数的内部调用超类的构造函数，但是要注意使用call()绑定上下文
>缺点：组合继承最大的问题就是无论什么情况下，都会调用两次超类的构造函数：一次是在创建子类原型的时候，另一次是在子类构造函数的内部

```javascript
    // 父类，People,有sayHello(),sleep()
        function People(name, age, sex) {
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        People.prototype.sayHello = function () {
            console.log("你好，我是" + this.name + "我今年" + this.age + "岁了");
        };
        People.prototype.sleep = function () {
            console.log(this.name + "正在睡觉，zzzzzz");
        };

        // 子类，Student类除了父类的sayHello(),sleep()还有自己独有的study(),exam()
        function Student(name, age, sex, studentNumber, school) {
           /*  apply，call，bind三者的区别
            三者都可以改变函数的this对象指向。
            三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
            三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
            bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。 */

            People.call(this,name,sex,age);

            // People.apply(this,[name,sex,age]);
            // const newPeopele = People.bind(this,name,sex,age);
            // newPeopele()
            this.studentNumber = studentNumber;
            this.school = school;
        }

        // 改变Student.prototype
        // 让子类的prototype指向父类的实例---实现继承
        Student.prototype = new People();

        Student.prototype.study = function () {
            console.log(this.name + "正在学习");
        };
        Student.prototype.exam = function () {
            console.log(this.name + "正在考试");
        };

        // 子类重写父类的方法
        Student.prototype.sayHello = function () {
            console.log("您好，敬礼！我是" + this.name + "我今年" + this.age + "岁了");
        };
        var hanmeimei = new Student("韩梅梅", 9, "女", 123456, "慕课小学");
        hanmeimei.sleep();
        hanmeimei.study();
        hanmeimei.sayHello();
```
#### 原型式继承
>   Object.create()方法：根据指定对象为原型创建出新对象
> 如：var obj2 = Object.create(obj1)    即:Obj2.__proto__ =Obj1

```javascript
var obj1 = {
    a: 33,
    b: 44,
    c: 55,
    test: function () {
        console.log(this.a + this.b);
    },
};
// 这样可以不用构造对象new一次
var obj2 = Object.create(obj1, {
    // 补充属性的形式:
    d: {
        value: 99,
    },
    a: {
        value: 22,
    },
});
console.log(obj2.__proto__ == obj1); //true
console.log(obj2.a);
console.log(obj2.d);
obj2.test();
```
>补充：面试会考的Object.create()兼容写法

```javascript
function object(o) {
        // 创建一个临时构造函数
        function F() {}
        //让临时构造函数的prototype指向o,这样一来它new出来的对象的__proto__就指向了o
        F.prototype = o;
        // 返回F的实例
        return new F();
    }
    var obj1 = {
        a: 23,
        b: 5,
    };
    var obj2 = object(obj1);

    console.log(obj2.__proto__ === obj1); //true
    console.log(obj2.a); //23
```

#### 寄生式继承：编写一个函数，它接收一个对象参数o，返回以o为原型的新对象p,同时给p上添加预置的新方法
```javascript
// 在主要考虑对象而不是自定义类型和构造函数的情况下，寄生式继承也是一种有用的模式;

// 寄生式继承缺点：使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率，即“方法没有写到prototype上”
var o1 = {
    name: "小明",
    age: 12,
    sex: "男",
};
var o2 = {
    name: "小红",
    age: 12,
    sex: "女",
};
function f(o) {
    // 以o为原型创建出新对象
    var p = Object.create(o);
    // 补充方法：
    p.sayHello = function () {
        console.log("你好，我是" + this.name + "我今年" + this.age + "岁了" + "我是" + this.sex + "生");
    };
    p.sleep = function () {
        console.log(this.name + "开始睡觉zzzzz");
    };
    return p;
}

var p1 = f(o1);
p1.sayHello();

var p2 = f(o2);
p2.sayHello();
```

####寄生组合式继承

>通过借用构造函数来继承属性，通过原型链的混成形式来继承方法
>其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。
>本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。

```javascript
/* 这个函数接收两个参数，
subType：子类的构造函数
superType：父类的构造函数 */
function inheritPrototype(subType, superType) {
    var newPrototype = Object.create(superType.prototype)
    subType.prototype = newPrototype;
}
// 父类
function People(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.arr = [11, 22, 33];
}
People.prototype.sayHello = function () {
    console.log("你好，我是" + this.name + "我今年" + this.age + "岁了");
};
People.prototype.sleep = function () {
    console.log(this.name + "正在睡觉，zzzzzz");
};

// 子类
function Student(name, sex, age, school, sid) {
    // 借用构造函数解决原型链继承的重点：在子类构造函数的内部调用超类的构造函数，但是要注意使用call()绑定上下文
    // 解决了原型链继承的两大问题
    // 组合继承美中不足：第一次调用父类
    People.call(this, name, sex, age);
    this.school = school;
    this.sid = sid;
}
// 改变Student.prototype
// Student.prototype = new People();
// 调用我们自己编写的inheritPrototype函数，这个函数可以让Student类的prototype指向“以People.prototype为原型的一个新对象”
inheritPrototype(Student,People)

Student.prototype.study = function () {
    console.log(this.name + "正在学习");
};
Student.prototype.exam = function () {
    console.log(this.name + "正在考试");
};
// 子类重写父类的方法
Student.prototype.sayHello = function () {
    console.log("您好，敬礼！我是" + this.name + "我今年" + this.age + "岁了");
};

var xiaoming = new Student("小明", "男", 12, "小慕学校", 100666);
console.log(xiaoming);
xiaoming.arr.push(888);
console.log(xiaoming.hasOwnProperty("arr"));
var xiaohong = new Student("小红", "女", 11, "小慕学校", 100667);
console.log(xiaohong);
console.log(xiaohong.hasOwnProperty("arr"));

// 组合继承实现继承
xiaoming.sleep();
```

![image-20220926090329598](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220926090329598.png)

####内置构造函数的关系
console.log(Object.__proto__ === Function.prototype)
console.log(Object.__proto__.__proto__ === Object.prototype)
console.log(Function.__proto__ === Function.prototype)

console.log(Function instanceof Object)
console.log(Object instanceof Function)
console.log(Function instanceof Function)
console.log(Object instanceof Object)

![img](http://mollypages.org/tutorials/jsobj_full.jpg)


# 第6章 JS基础-作用域和闭包

> 知识点：作用域和自由变量、闭包、this

自由变量：在A作用域中使用的变量x,却没有在A作用域中声明(即在其他作用域中声明的),对于A作用域来说,x就是一个*自由变量*。

### this的不同应用场景，如何取值？				

### 手写bind函数

### 实际开发中闭包的应用场景，举例说明

![image-20220719072515515](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220719072515515.png)

# 第7章 JS基础-异步基础及进阶

### 请描述event loop(事件循环/事件轮询)的机制，可画图
JS是单线程运行的。
异步要基于回调来实现。
event loop就是异步回调的实现原理。
总结event loop 过程：
同步代码，一行一行放在Call Stack执行 --> 遇到异步，会先“"记录”下，等待时机(定时、网络请求等) --> 时机到了，就移动到Callback Queue --> 如Call Stack为空（即同步代码执行完）Event Loop开始工作 --> 轮询查找Callback Queue,如有则移动到Call Stack执行 --> 然后继续轮询查找Callback Queue（像永动机一样）

```javascript
console.log('Hi')
setTimeout(function cb1(){
    console.log('cb1')//cb callback
},5000)
console.log('Bye')
```
### DOM事件(不是异步)和event loop
> DOM事件是基于event loop实现的

```javascript
<button id="btn1">提交</button>
<script>
console.log('Hi')
('#btn1').click(function (e){
    console.log('button clicked')
})
console.log('Bye')
</script>
```
### Promise有哪三种状态？如何变化？
#### 三种状态 
pendding fulfilled rejected
#### 状态的表现和变化
pendding --> fulfilled 或 pendding --> rejected  状态变化不可逆
#### then和catch对状态的影响
- pending状态，不会触发then和catch
- resolved状态，会触发后续的then回调函数。then正常返回resolved,里面有报错则返rejected
- rejected状态，会触发后续的catch回调函数。catch正常返回resolved,里面有报错则返rejected


### 场景题：promise then和catch的连接
>Promise then catch链式调用，但也是基于回调函数
>async/await是同步语法，彻底消灭回调函数
```javascript
//第一题：1 3
Promise.resolve().then(()=>{
    console.log(1)
}).catch(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
})
```
```javascript
//第二题：1 2 3
Promise.resolve().then(()=>{
    console.log(1)
    throw new Error('error1')
}).catch(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
})
```
```javascript
//第三题 1 2
Promise.resolve().then(()=>{
    console.log(1)
    throw new Error('error1')
}).catch(()=>{//返回fulfilled状态的promise
    console.log(2)
}).catch(()=>{//这里是catch
    console.log(3)
})
```

### 场景题：async/await语法
> mdn文档:
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function
>https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await

1. async 函数
函数的**返回值**为promise对象
promise对象的结果由async函数执行的返回值决定

2. await 表达式
await右侧的表达式一般为promise对象, 但也可以是其它的值
如果表达式是promise对象, await返回的是promise成功的值
如果表达式是其它值, 直接将此值作为await的返回值

3. 注意:
    await必须写在async函数中, 但async函数中可以没有await
    如果await的promise失败了, 就会抛出异常, 需要通过try...catch来捕获处理


- async 函数返回结果都是 Promise 对象（如果函数内没返回 Promise ，则自动封装一下）

```js
async function fn2() {
    return new Promise(() => {})
}
console.log( fn2() )

async function fn1() {
    return 100
}
console.log( fn1() ) // 相当于 Promise.resolve(100)
```

- await 后面跟 Promise 对象：会阻断后续代码，等待状态变为 resolved ，才获取结果并继续执行
- await 后续跟非 Promise 对象：会直接返回

```js
(async function () {
    const p1 = new Promise(() => {})
    await p1
    console.log('p1') // 不会执行
})()

(async function () {
    const p2 = Promise.resolve(100)
    const res = await p2
    console.log(res) // 100
})()

(async function () {
    const res = await 100
    console.log(res) // 100
})()

(async function () {
    const p3 = Promise.reject('some err')
    const res = await p3
    console.log(res) // 不会执行
})()
```

- try...catch 捕获 rejected 状态

```js
(async function () {
    const p4 = Promise.reject('some err')
    try {
        const res = await p4
        console.log(res)
    } catch (ex) {
        console.error(ex)
    }
})()
```

总结来看：

- async 封装 Promise
- await 处理 Promise 成功
- try...catch 处理 Promise 失败

### 几个例题：

```javascript
async function fn(){
    return 100//相当于return Promise.resolve(100)
}
(async function (){
    const a = fn()//??
    const b = await fn()//??
})()
```
```javascript
(async function(){
console.log('start')
const a = await 100
console.log('a',a)
const b = await Promise.resolve(200)
console.log('b',b)
const c = await Promise.reject(300)
console.log('c',c)
console.log('end')
})()//执行完毕，打印出那些内容？
```
### 异步的本质:await 是同步写法，但本质还是异步调用。
```javascript
async function async1 () {
  console.log('async1 start')//2.重要
  await async2()//undefined
// await后面可以看做是callback里的内容，即异步
// 类似于setTimeout(function () {console.log('async1 end');})
  console.log('async1 end') //5. 关键在这一步，它相当于放在 callback 中，最后执行
}

async function async2 () {
  console.log('async2')//3.重要
}

console.log('script start')//1.
async1()
console.log('script end')//4.重要
// 至此同步任务已经执行完
```
>上面案例的一个复杂版:
```javascript
async function async1 () {
  console.log('async1 start')//2
  await async2()

//   以下三行都是异步回调的内容
  console.log('async1 end')//5.

  await async3()

        //下面一行是异步回调内容 
        console.log('async3 end')//7.
}

async function async2 () {
  console.log('async2')//3.
}
async function async3 () {
  console.log('async3')//6.
}

console.log('script start')//1.
async1()
console.log('script end')//4.
// 至此同步任务已经执行完
```

### for...of 常用于异步的遍历
>for in/forEach/for 是常规的同步遍历

```javascript
function muti (num) {
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(num*num)
        }, 1000);
    })
}

const arr  = [1,2,3]
// arr.forEach(async (i)=>{
//     const res = await muti(i)
//     console.log(res);
// })

;(async function () {
    for (let i of arr) {
        const res = await muti(i)
        console.log(res);
    }
})()
```


### 什么是宏任务和微任务，两者有什么区别？
微任务比宏任务执行早！
- 宏任务：DOM渲染后触发，setTimeout setInterval Ajax DOM事件
- 微任务：DOM渲染前触发，Promise async/await mutation回调

### 微任务执行原理:

![image-20220923091958597](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220923091958597.png)

![image-20220923092014826](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20220923092014826.png)

### 场景题：promise和setTimeout的执行顺序问题

```javascript
console.log(100)
setTimeout(()=>{
    console.log(200)
})
Promise.resolve().then(()=>{
    console.log(300)
})
console.log(400)
```

### 场景题：
```javascript
async function async1 (){
    console.log('async1 start')//2.
    await async2()
    // await后边是回调---微任务
    console.log('async1 end')//6，微任务1
}
async function async2 (){
    console.log('async2')//3.
}
console.log('script start')//1
setTimeout(function (){//8，宏任务
    console.log('setTimeout')
},0)
async1()
// 初始化promise时，传入的函数会被立刻执行
new Promise (function (resolve){
    console.log('promise1')//4.
    resolve()
}).then (function (){//7，异步，微任务2
    console.log('promise2')
})
console.log('script end')//5.
// 同步代码执行完毕,根据eventloop循环机制，callstack被清空--->执行微任务
```
### 几道promise面试题：
#### 第一题：
```javascript
setTimeout(() => {
        console.log(1)//4.
}, 0)//宏队列
Promise.resolve().then(() => {
    console.log(2)//2.
})//微队列
Promise.resolve().then(() => {
    console.log(4)//3.
})//微队列
console.log(3)//1.
```
#### 第二题：
```javascript
setTimeout(() => {
    console.log(1)//5.
}, 0)//宏任务
// 初始化promise时，传入的函数会被立刻执行 
new Promise((resolve) => {
    console.log(2)//1.
    resolve()
}).then(() => {
    console.log(3)//3.
}).then(() => {
    console.log(4)//4.
})//微任务
console.log(5)//2.
```
#### 第三题：
```javascript
const first = () => (new Promise((resolve, reject) => {
    console.log(3)//1.
    let p = new Promise((resolve, reject) => {
        console.log(7)//2.
        setTimeout(() => {//宏任务1
            console.log(5).//6.
            resolve(6)
        }, 0)
        resolve(1)
    })
    resolve(2)
    p.then((arg) => {
        console.log(arg)//4.
    })
}))
first().then((arg) => {
    console.log(arg)//5.
})
console.log(4)//3.
```
#### 第四题：  1723 846 50
```javascript
/**
  1 7           1 7 2 3          1 7 2 3 8        1 7 2 3 8 4        1 7 2 3 8 4 6      1 7 2 3 8 4 6 5       1 7 2 3 8 4 6 5 0
  宏：[0]   ->  宏：[0]      ->  宏：[0]       ->  宏：[0]        ->   宏：[0]        ->  宏：[0]           ->   
  微：[2 8]     微：[8 4 6]      微：[4 6]         微：[6 5]           微：[5]
 */
setTimeout(() => {
    console.log("0")//9.
}, 0)//宏任务1
new Promise((resolve, reject) => {
    console.log("1")
    resolve()
}).then(() => {
    console.log("2")
    new Promise((resolve, reject) => {
        console.log("3")
        resolve()
    }).then(() => {
        console.log("4")
    }).then(() => {
        console.log("5")
    })
}).then(() => {
    console.log("6")
})
new Promise((resolve, reject) => {
    console.log("7")
    resolve()
}).then(() => {
    console.log("8")
})
```
### 手写promise

>要求：
>初始化&异步调用
>then/catch链式调用
>API的实现：.resolve .reject .all .race


# 第9章Web-API-DOM(Document Object Model)
>知识点：
### DOM本质
从html文件中解析出来的一棵树
### DOM节点操作
获取DOM节点
attribute和property
### DOM结构操作
新增/插入节点
获取子元素列表，获取父元素
删除子元素
### DOM性能
对DOM查询做缓存
将频繁操作改为一次性操作
>面试题：
### DOM是哪种数据结构
DOM树
### DOM操作的常用API
DM节点操作
DOM结构操作
### attribute和property的区别
attribute：修改html属性，会改变html结构
DOM节点的property：修改对象属性，不会体现到html结构中
两者都有可能引起DOM重新渲染
### 一次性插入多个DOM节点，考虑性能
```javascript
// 将频繁操作改为一次性操作
const listNode=document.getElementById('list')
//创建一个文档片段,此时还没有插入到D0M树中
const frag= document.createDocumentFragment()
//执行插入
f0r(let x=0;x<10;x++){
    const li= document.createElement("li")
    li.innerHTML= "List item "+x
    frag.appendChild(li)
}
//都完成之后,再插入到D0M树中
listNode.appendChild(frag)
```

# 第10章Web-API-BOM(Broswer Object Model)
#### 如何识别浏览器的类型
```javascript
// navigator
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome);

// screen
console.log(screen.width);
console.log(screen.height);

// location
console.log(location.href);
console.log(location.protocol);//协议名，https/http
console.log(location.pathname);//路径
console.log(location.search);//查询参数
console.log(location.hash);//#后边的内容

history
history.forward()
history.back()
```
#### 分析拆解url各个部分

# 第11章Web-API-事件
>知识点：
### 事件绑定

### 事件冒泡

### 事件代理
>面试题：
### 编写一个通用的事件监听函数
```javascript
//通用的事件绑定函数:普通事件绑定/事件代理均可使用
function bindEvent(elem, type, selector, fn) {
// 判断是否未普通事件绑定
if (fn == null) {
    fn = selector;
    selector = null;
}
elem.addEventListener(type, event => {
    // 触发事件监听的对象（事件源）
    const target = event.target
    if (selector) {
        //事件代理绑定
        if (target.matches(selector)) {
            fn.call(target, event)

        }
    } else {
        // 普通绑定
        fn.call(target, event)

    }
})
```
### 描述事件冒泡的流程

### 无限下拉的图片列表，如何监听每个图片的点击？
事件代理
用e.target获取触发元素
用matches来判断是否是触发元素

# 第12章Web-API-Ajax
>知识点：
## XMLHttpRequest
```javascript
// GET请求
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://localhost:8080/review/JS/mooc-job/%E7%AC%AC12%E7%AB%A0Web-API-Ajax/data/test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
            alert(xhr.responseText)
        } else {
            console.log('其它情况');
        }
    }
}
xhr.send(null)

// POST请求
const xhr = new XMLHttpRequest()
xhr.open("POST", "/login", true)//true代表异步请求
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert(xhr.responseText)
        } else {
            console.log('其它情况');
        }
    }
}
const postData = {
    userName: "zhangsan",
    password: "123456"
}
xhr.send(
    JSON.stringfy(postData)
)
```
## 状态码
 `readystatechange`事件监听readyState这个状态变化：
它的值从 0 ~ 4，一共 5 个状态
0：未初始化。尚未调用 open()
1：启动。已经调用 open()，但尚未调用 send()
2：发送。已经调用 send()，但尚未接收到响应
3：接收。已经接收到部分响应数据
4：完成。已经接收到全部响应数据，而且已经可以在浏览器中使用了
`xhr.status`状态码：
2xx-表示成功处理请求,如200
3xx-需要重定向,浏览器直接跳转,如301 302 304
4xx-客户端请求错误,如404 403
5xx-服务器端错误

## 跨域：同源策略，跨域解决方案
### 什么是跨域（同源策略）
- ajax请求时，浏览器要求当前网页和server必须同源（安全）
- 同源：协议、域名、端口，三者必须一致
- 加载图片，css，js可以无视同源策略
`<img src = 跨域的图片地址/>`统计打点，可使用第三方统计服务

`<link href = 跨域的css地址/>`可使用CDN
`<script src = 跨域的js地址></script> `可使用CDN，可实现JSONP
- 所有的跨域，都必须经过server端允许和配合
- 未经server端允许就实现跨域，说明浏览器有漏洞，危险信号
### JSONP
### CORS（服务端支持）
服务器设置http header
>面试题：
### 手写一个简易的ajax
```javascript
function ajax(url){
    const p =new Promise((reolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                if(xhr.status===200){
                    resolve(
                        JSON.parse(xhr.responseText)
                    )
                }else if (xhr.status === 404) {
                    reject(new Error('404 not found'))
                }
            }
        }
        xhr.send(null)
    })
    return p
}
const url = 'http://localhost:8080/review/JS/mooc-job/%E7%AC%AC12%E7%AB%A0Web-API-Ajax/data/test.json'
ajax(url)
.then(res=>console.log(res))
.catch((error)=>{console.log(error);})
```
### 跨域的常用实现方式
JSONP原理
cors原理



## fetch

## Axios

# 第13章Web-API-存储
## 描述cookie localStorage sessionStorage区别
- 容量
- API易用性
- 是否跟随http请求发送出去
cookie:
1. 浏览器存储数据的一种方式，
2. 利用 Cookie 跟踪统计用户访问该网站的习惯
3. 每个域名下Cookie 的存储容量很小，最多只有 4KB 左右
4. 一般会自动随着浏览器每次请求发送到服务器端
cookie格式：
1. 名值对构成的字符串
2. 每个名值对之间由“; ”（一个分号和一个空格）隔开
3. 写入和读取都用：`document.cookie`；
4. 设置cookie时要一个个用document.cookie写入

localStorage sessionStorage:
1. HTML5专门为存储而设计，最大可存5M(针对每个域名来说)
2. 不会随着http请求被发送出去
3. 使用setItem/getItem/removeItem来分别进行写入/读取/移除
4. localStorage：数据会永久存储，除非代码或手动删除
5. sessionStorage：数据只存在于当前会话，浏览器关闭则清空

# 第14章http面试题
>知识点：
## 状态码

- 状态码分类:
  1xx：服务器收到请求
  2xx:请求成功，如200
  3xx:重定向，如302
  4xx客户端错误，如404
  5xx服务端错误，如500
  
- 常见状态码:
  200成功
  301永久重定向(配合location,浏览器自动处理)
  302临时重定向(配合location,浏览器自动处理)
  304资源未修改
  404资源未找到
  403没有权限
  500服务端错误
  504网关超时
  
- 关于协议和规范
  遵守业内规范，严格执行，不要自创规范
  
  ## http methods

- 传统的methods
  get获取服务器的数据
  post向服务器提交数据
  简单的网页功能，就这两个操作
- 现在的methods
  get获取数据
  post新建数据
  patch/put更新数据
  delete删除数据
- Restful API
  传统API设计：把每个url当做一个功能
  Restful API设计：把每个url当做一个唯一的资源的标识
    - 如何设计成一个资源？
      尽量不用url参数
      用method表示操作类型
      请求 = 动词 + 宾语
      动词：五种HTTP方法，对应CRUD操作
      宾语URL应该全部使用名词复数，但可以有例外
      过滤信息：API提供参数，过滤返回结果
    - 传统API设计 VS Restful API设计：
      传统：
      post请求 /api/create-blog
      post请求 /api/update-blog?id = 100
      get请求 /api/get-blog?id = 100
      Restful API:
      post请求 /api/blog   ---新建一个blog
      patch请求 /api/blog/100 ---更新id为100的blog信息
      get请求 /api/blog/100 ---获取id为100的blog信息

## http headers
    - 常见的Request Headers---客户端向服务端发送请求
        - Accept浏览器可接收的数据格式
        - Accept-Encoding 浏览器可接收的压缩算法，如gzip
        - Accept-Language浏览器可接收的语言，如zh-CN
        - Connection:keep-alive 一次TCP连接重复使用
        - Cookie
        - Host
        - User-Agent:浏览器信息
        - Content-type发送数据格式，如application/json
        
    - 常见的Response Headers
        - Content-type返回数据格式，如application/json
        - Content-length返回数据大小，多少字节
        - Content-Encoding返回数据的压缩算法，如gzip
        - Set-Cookie服务端修改cookie的方式
    - 自定义header
    - 缓存相关的headers
        - Cache-Control 控制缓存的时长
          - max-age：缓存资源的最长时间，如：Cache-Control:max-age = 31536000秒
          - no-cache 不使用本地缓存，去服务端请求(服务端用不用缓存不关心)
          - no-store 不使用本地缓存，去服务端请求，但也不用服务端的缓存
          - private 允许用户做缓存
          - public  允许中间代理，路由做缓存
        - Expires  同为控制缓存过期，已被Cache-Control代替
        - Last-Modified 资源的最后修改时间（初次请求时获取）
        - If-Modified-Since 再次请求时带上资源的最后修改时间
        - Etag 资源的唯一标识，内容改变才会变
        - If-None-Match
## http缓存
     - 关于缓存的介绍
            减少网络请求数量和体积，缓存让页面加载更快。静态资源(js,css,img)可以被缓存
      - http缓存策略(强制缓存+协商缓存)
          - 强制缓存
          - 协商(对比)缓存--服务端缓存策略
             - 服务端判断客户端资源是否和服务端资源一样？一致返回304(资源未修改)否则返回200，新资源和最新资源标识
             
             - 资源标识：位于Response Headers中有两种：① Last-Modified ②Etag
             
             - Last-Modified 作为资源标识
             
               ![image-20221002095502780](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20221002095502780.png)

   - Etag作为资源标识：（优先使用，更精确）
             
               ![image-20221002095813106](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20221002095813106.png)
                    
      - 刷新操作方式，对缓存的影响
        - 三种刷新操作：
          - 正常操作：地址栏输入ul，跳转链接，前进后退等 ---> 强制缓存，协商缓存均有效
          - 手动刷新：F5，点击刷新按钮，右击菜单刷新 ---> 强制缓存无效，协商缓存有效
          - 强制刷新：ctrl+F5 --->  强制缓存，协商缓存均无效
## https
   - http和https
        - http：明文传输，敏感信息容易被中间劫持
        - https:http+加密，中间劫持无法解密
   - https加密方式：(同时用到了以下这两种加密方式)
        - 对称加密：一个key负责加密，解密
        - 非对称加密：一对key，A加密之后只能用B来解密
   - https证书
        - 中间人攻击，替换pubkey ---> 使用第三方证书(慎用免费，不合规证书) --->浏览器自己校验证书
        - ![image-20221002103309512](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20221002103309512.png)
        - ![image-20221002103328013](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20221002103328013.png)
>面试题：
1. http常见的状态码有哪些？

2. http常见的header有哪些？

3. 什么是Restful API

4. 描述一下http的缓存机制（重要）

   ![image-20221002100125329](/C:/Users/Dell/AppData/Roaming/Typora/typora-user-images/image-20221002100125329.png)


# 第15章开发环境
>知识点
## git：最常用代码版本管理工具
    git add .
    git checkout XXX 文件还原
    git commit -m "xxx" 文件提交
    git push origin master
    git pull origin master
    git branch
    git checkout -b xxx /git checkout xxx 切换分支
    git merge xxx 合并分支

## 调试工具
## 抓包（手机端应用）
## webpack babel
## 登录测试机需要的linux常用命令