// 委托模式

// 委托模式：多个对象接受并处理同一请求，他们将请求委托给另一个对象统一处理请求。

// 示例：

// 100个div的事件处理。

// <ul id="ul">
    // <li>11</li>
    // <li>22</li>
    // <li>33</li>
    // <li>44</li>
    // <li>55</li>
    // <li>66</li>
    // <li>77</li>
    // <li>88</li>
// </ul>

// 非事件委托实现：

let lis = document.getElementsByTagName('li');

for (let index = 0; index < lis.length; index++) {
    const element = array[index];
    element.onclick = function(){
        this.style.color = "#0000ff";
    }
}

// 事件委托

let ul = document.getElementById('ul');

ul.onclick = function (event) {
    let $event = event || window.event;
    let tar = $event.target || $event.srcElement;
    console.log($event);
    if (tar.nodeName.toLowerCase() === 'li'){
        tar.style.color = "#0000ff";
    }
}
// 需求： 新增: 添加附件. 删除附件。修改附件对象某一标识。

// {
//     id: 1,
//     name: '1.jpg',
//     size: 54454,
//     ...
// }

// 委托模式可以处理 

class Entrust {
    constructor(){
        this.data = null;
    }
    // 处理
    handle(data, state){
        this.data = data; // 将附件资料赋值给类属性
        return this[state]();
    }
    // 新增
    setEnclosure(){
        this.data.operationFlag = 1;
        return Promise.resolve(this.data);
    }
    // 删除
    deleteEnclosure(){
        this.data.operationFlag = 2;
        return Promise.resolve(this.data);
    }
}
let entrust = new Entrust();

let enclosureObj = {
    id: 1,
    name: '1.jpg',
    size: 54454
}

entrust.handle(enclosureObj, 'setEnclosure').then((data) => {
    console.log(data);
})
