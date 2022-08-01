const age = 18;
const sex = "male";
// console.log(age);

// 一个模块只能有一个 export default
export default age;
// Uncaught SyntaxError: Identifier '.default' has already been declared (at module.js:5:8)
// export default sex;

// export default能导出什么？export default可以导出没有名字的数据类型即匿名数据类型

// export default 20;

// export default {};

// const fn = () => {};
// export default fn;

// export default function () {}

//export default class  {}
