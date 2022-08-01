/* 
    number---number之间正常比较
    number---string比较---->string转为number再比较
    string---string比较---->看字符对应的ASCII码;多个字符的，从左到右依次对比
    相等不看数据类型，全等需要看数据类型是否相等
    NaN与包括自己在内任何东西都不相等
*/

/* var num1 = 12,
    num2 = 18,
    numStr = "28",
    str1 = "A3",
    str2 = "A5";
console.log(num1 > num2); //false
console.log(numStr > num2); //true
console.log(str1 > str2); //false  A的ASCII码相等，3的ASCII码小于5的ASCII码 */

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

*/
var a = 1 && 2 && undefined && 10; //undefined
var b = 0 || 2 || undefined || 10; //2
console.log(a, b);
