// Promise

// 详情

// Promise 是异步编程的一种解决方案
// 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）

// 示例一

// *基本使用*

function promise (){
    return new Promise((resolve, reject) => {
        // ...
        if (/* ... */true) {
            resolve(value);
        } else {
            reject(value);
        }
    })
}

// Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject
// 异步调用成功 => resolve 函数  异步调用失败 => reject 函数

promise().then((value) => {
    // resolve ...
}).catch((err) => {
    // reject ... 
})

// 示例二

// *Promise.prototype.then() & Promise.prototype.catch()*

function promise(boolean) {
    return new Promise((resolve, reject) => {
        let data = { // 假装是请求后端的数据
            name: "Tom"
        }
        if (boolean) {
            setTimeout(() => { // 异步
                resolve(data)
            }, 1000)
        } else {
            reject();
            // 等同于
            // throw new Error();
        }
    })
}

promise(true).then((data) => {
    console.log(data); // {name: "Tom"}
    return data.name;
}).then((data) => {
    console.log(data); // "Tom"
}).catch((err) => {
    console.error(err);
})

// 示例三

// *Promise.prototype.finally()*

// ES2018 引入标准

// finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

promise(true).then(() => {
    // resolve ...
}).catch((err) => {
    // reject ... 
}).finally(() => {
    // finally ...
})

// 示例四

// *Promise.all()*

// Promise.all方法用于将多个 Promise 实例 可以理解成 循环异步等待

// 语法：const p = Promise.all([p1, p2, p3]);

function promise_async(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {
                name: "Tom"
            }
            resolve(data)
        },time * 1000);
    })
}

let Arr = [1,2,3,4,5];

let promiseAll = [];

Arr.forEach((item, index) => {
    let p = promise_async(item).then(res => res);
    promiseAll.push(p);
})

Promise.all(promiseAll).then(data => {
    console.log(data); // [{name: 'Tom'}, {name: 'Tom'}, {name: 'Tom'}, {name: 'Tom'}, {name: 'Tom'}]
}).catch(err => {
    console.error(err);
})

// !注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

// 示例五

// *Promise.race()*

// 语法：const p = Promise.race([p1, p2, p3]);

// 所有 Promise 实例 率先改变状态，实例 P 就是生成 一个新的 Promise 实例


function promise_async(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {
                name: "Tom:" + time
            }
            resolve(data)
        },time * 1000)
    })
}

let Arr = [2,3,4,5,1];

let promiseAll = [];

Arr.forEach((item, index) => {
    let p = promise_async(item).then(res => res);
    promiseAll.push(p);
})

Promise.race(promiseAll).then(data => {
    console.log(data); // {name: "Tom:1"}
}).catch(err => {
    console.error(err);
})

// Arr 数组中 1 传入 promise_async 函数中 定时器时间最短 率先返回 Promise 新实例
