// 中介者模式

// 通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引入，降低他们之间的耦合。
// 有时候中介者对象也可以改变对象之间的交互

// 中介者跟观察者很相似，观察者是一对多服务，或者是 多对一。
// 中介者是一对一

// 示例

class Mediator {
    constructor(){
        this.msgs = Object.create({}); // 消息存储对象
    }
    // 订阅
    subscribeInfo(type, fn){
        if (this.msgs[type]){
            this.msgs[type].push(fn);
        } else {
            this.msgs[type] = [];
            this.msgs[type].push(fn);
        }
    }
    // 发布
    releaseInfo(type){
        if (!this.msgs[type]) return;
        this.msgs[type].forEach(item => {
            item && item();
        });
    }
}

let mediator = new Mediator();

// 场景： 买房子 与 卖房子 通过中介去查找都有哪些人卖房子

// 1. 卖房子：

mediator.subscribeInfo('sellTheHouse', () => {
    console.log('房东电话：138******');
})

mediator.subscribeInfo('sellTheHouse', () => {
    console.log('房东电话：137******');
})

mediator.subscribeInfo('sellTheHouse', () => {
    console.log('房东电话：135******');
})

// 2. 买房子（客户）

mediator.releaseInfo('sellTheHouse');
