// 备忘录模式

// 在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后对象使用或者对象恢复到以前的某个

// 1. 写一个 获取存储的函数。简单示例代码：

class Info {
    constructor(){
        this.info = Object.create({});
    }
    // 存储数据
    setInfo(type, data){
        this.info[type] = data;
        return Promise.resolve(data);
    }
    // 获取数据
    getInfo(type){
        if (this.info[type]) {
            return Promise.resolve(this.info[type]);
        } else {
            console.error('无存储数据');
        }
    }
}


let info = new Info();

info.setInfo('msg', {a: 1, b: 2});
info.setInfo('msg2', [1,2,3]).then(data => {
    console.log(data);
})

console.log(info);
