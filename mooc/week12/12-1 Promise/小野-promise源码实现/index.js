const MyPromise = require('./MyPromise');

let promise = new MyPromise((resolve, reject) => {//excutor
    resolve('success');
    // reject('Error');
})
promise.then(
    (value) => {
        console.log('onFulfilled,'+value);
    },
    (reason) => {
        console.log('onRejected,'+reason);
    })