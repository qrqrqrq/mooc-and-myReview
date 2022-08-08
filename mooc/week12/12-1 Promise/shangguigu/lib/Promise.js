/* 
自定义Promise函数模块:IIFE
*/
(function (window) {
    /*
        Promise构造函数
        excutor:执行器函数--同步执行
    */
    function Promise(excutor) {
        this.status = 'pending';
        this.data = undefined
        this.callback = []
        function resolve(value) {
            
        }
        function reject(reason) {
            
        }
        // 立即同步执行excutor
        excutor(resolve,reject)
    }

    /*
    Promise原型对象的then() 
    指定成功和失败的回调函数
    返回一个新的promise对象
    */
    Promise.prototype.then = function (onResolved, onRejected) {

    }

    /* 
    Promise原型对象的catch()
    指定失败的回调函数
    返回一个新的promise对象
    */
    Promise.prototype.catch = function (onRejected) {

    }

    /*
    Promise函数对象resolve方法
    返回一个指定结果的成功的promise
    */
    Promise.resolve = function (value) {

    }

    /*
    Promise函数对象reject方法
    返回一个指定reason的失败的promise
    */
    Promise.reject = function (reason) {

    }
    /*
    Promise函数对象all方法
    返回一个promise，只有当所有promise都成功时才成功，否则只要有一个失败就失败
    */
    Promise.all = function (promises) {

    }
    /*
    Promise函数对象race方法
    其结果由第一个完成的promise决定
    */
    Promise.race = function (promises) {

    }
    // 向外暴露Promise函数
    window.Promise = Promise;
}(window))
