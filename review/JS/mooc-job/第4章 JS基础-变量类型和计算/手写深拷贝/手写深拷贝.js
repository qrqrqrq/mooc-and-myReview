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
    let result;
    if (oldObj instanceof Array) {
        result = {};
    } else {
        result = [];
    }
    for (let key in oldObj) {
        result[key] = deepClone(obj[key]);
    }
    return result;
}
const newObj = deepClone(oldObj);
