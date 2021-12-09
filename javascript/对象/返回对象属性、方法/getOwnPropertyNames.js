// getOwnPropertyNames()

// 语法

// Object.getOwnPropertyNames(object) 

// 参数说明

// object 必须 => 操作对象

// 详情

// 返回一个数组，包含对象的所有实例属性和方法，不包含原型继承的属性和方法

// 示例

let obj = {
    name: "Tom",
    age: 18,
    getName: function(){
        console.log(`${this.name}`);
    }
}

console.log(Object.getOwnPropertyNames(obj));// ["name", "age", "getName"]
