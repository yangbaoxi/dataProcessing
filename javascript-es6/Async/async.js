// async

// async函数的语法规则总体上比较简单，难点是错误处理机制。

// 1.返回 Promise 对象

async function A(){
    return "Tom"
}

A().then((data) => {
    console.log(data); // Tom
})

// async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。

// 2.await 命令 


