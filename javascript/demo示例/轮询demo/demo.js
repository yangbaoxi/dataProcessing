// 轮询demo

// 代码采用 Promise 异步 then 处理方式 + setTimeout 定时器实现轮询

var index = 0;
// List 接口
function promise_api () {
    index++;
    return new Promise((resolve, reject) => {
        // 前后端调接口 消耗的时间  
        let time = Math.random() * 3000;
        console.log('消耗的时间',time);
        setTimeout(() => {
            let data = {
                name: 'Tom' + index
            }
            resolve(data);
        }, time);
    })
}

// 请求接口函数
function getList() {
    promise_api().then((data) => {
        console.log(data);
        return true;
    }).then(() => {
        setTimeout(() => {
            this.getList();
        }, 1000)
    })
}   
// mounted
getList();
