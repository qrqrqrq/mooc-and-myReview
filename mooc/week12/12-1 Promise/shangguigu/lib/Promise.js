/*
自定义Promise函数模块:IIFE
*/
(function (window) {
    const PENDING = 'pending',
        FULFILLED = 'fulfilled',
        REJECTED = 'rejected';
    /*
        Promise构造函数
        excutor:执行器函数--同步执行
    */
    function Promise(excutor) {
        this.status = PENDING;
        this.data = undefined;
        this.callbacks = [];//每个元素的结构：{onFulfilled(){},onRejected(){}}
        var that = this;
        function resolve(value) {

            // 如果当前状态不是pending，直接结束
            if (that.status !== PENDING) {
                return
            }

            // 将状态改为fulfilled
            that.status = FULFILLED;
            // 保存value数据
            that.data = value;
            // 如果有待执行的callback函数，立即异步执行回调函数
            if (that.callbacks.length > 0) {
                setTimeout(() => {//模拟异步执行，放入队列中执行回调函数onFulfilled
                    that.callbacks.forEach(callbackObj => {
                        callbackObj.onFulfilled(value);
                    });
                });
            }
        }
        function reject(reason) {

            // 如果当前状态不是pending，直接结束
            if (that.status !== PENDING) {
                return
            }
            // 将状态改为rejected
            that.status = REJECTED;
            // 保存value数据
            that.data = reason;
            // 如果有待执行的callback函数，立即异步执行回调函数
            if (that.callbacks.length > 0) {
                setTimeout(() => {//模拟异步执行，放入队列中执行回调函数onRejected
                    that.callbacks.forEach(callbackObj => {
                        callbackObj.onRejected(reason);
                    });
                });
            }
        }
        // 立即同步执行excutor
        try {
            //new Promise((resolve,reject)=>{}) (resolve,reject)=>{}---> excutor

            excutor(resolve, reject)//excutor执行，执行的时候传参resolve,reject

        } catch (error) {//如果执行器抛出异常，promise对象变为rejected状态
            reject(error);
        }
    }

    /*
    Promise原型对象的then() 
    指定成功和失败的回调函数
    返回一个新的promise对象
    */
    Promise.prototype.then = function (onFulfilled, onRejected) {
        // 返回一个新的promise对象
        const that = this;
        return new Promise((resolve, reject) => {
            // 假设当前状态是pending状态，将回调函数保存
            if (that.status === PENDING) {
                that.callbacks.push({
                    onFulfilled,
                    onRejected
                })
            } else if (that.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        const result = onFulfilled(that.data);
                        if (result instanceof Promise) {
                            result.then(
                                value => resolve(value),
                                reason => reject(reason)
                            )
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                });
            } else {//rejected
                setTimeout(() => {
                    onRejected(that.data);
                });
            }
        })

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
