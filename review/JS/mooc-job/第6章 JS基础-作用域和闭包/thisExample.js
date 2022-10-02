// this的指向是由函数执行时决定的
const zhangsan = {
    name: '张三',
    sayHi() {
        // this,当前对象
        console.log(this);
    },
    wait() {
        setTimeout(() => {
            // 即当前对象
            console.log(this);
        });
    }
}
const lisi = {
    name: '李四',
    sayHi() {
        // this,当前对象
        console.log(this);
    },
    waitAgain() {
        setTimeout(function () {
            // this === window
            console.log(this);
        });
    }
}
