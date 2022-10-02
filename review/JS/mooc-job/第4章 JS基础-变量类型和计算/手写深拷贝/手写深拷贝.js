const oldObj = {
    name: "joeyee",
    age: 18,
    hobbies: ["吃饭", "睡觉", "打代码"],
    address: {
        city: "datong",
    },
};

// 实现的是浅拷贝
// const newObj = oldObj;

// newObj.address.city = "beijing";
// console.log("oldObj", oldObj);
// console.log("newObj", newObj);

// 实现深拷贝
function deepClone(oldObj = {}) {
    if (typeof oldObj !== "object" || oldObj == null) {
        // obj 是 null ，或者不是对象和数组，直接返回
        return oldObj;
    }
    // 初始化返回结果
    let result;
    if (oldObj instanceof Array) {
        result = [];
    } else {
        result = {};
    }
    for (let key in oldObj) {
        //保证key不是原型的属性
        if (oldObj.hasOwnProperty(key)) {
            // 递归
            result[key] = deepClone(oldObj[key]);
        }
    }
    return result;
}
const newObj = deepClone(oldObj);
console.log(newObj);
