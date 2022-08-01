// const age = 18;

// export default age;//√
// export age;//×
// export 18;//×

// export 声明或语句
// 导出方法一：
// export const age = 18;

// 导出方法二：
// const age = 18;
// // export age;//×
// export { age }; //√

// 多个导出
// 写一个导出一个
// function fn() { }
// export fn; // ×
// export function () {} // 匿名不行

// export function fn() {}
// export class className {}

// 多个一起导出
function fn() {}
class className {}
const age = 18;
const age2 = 18;
// export { fn, className, age };

// 导入导出时起别名
export { fn as func, className, age };

// export和export default可以同时存在，只要保证export default只有一个即可
export default age2;
