// keys();

// 语法

// Object.keys(obj);

// 参数说明

// object 必须 => 操作的对象

// 详情

// 返回一个数组，包含对象的可枚举的实例属性名称

let obj = {
    name: "Tom",
    age: 18,
    getName: function(){
        console.log(`${this.name}`);
    }
}

// 1) getOwnPropertyNames 与 keys 方法返回的内容都相同

console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "getName"] ：返回对象的所有实例成员
console.log(Object.keys(obj)); // => ["name", "age", "getName"] ：返回对象的所有可枚举成员

// 设置对象的name属性不可枚举

Object.defineProperty(obj, 'name', {
    enumerable: false
});

// 2)keys方法，只包含可枚举成员

console.log(Object.getOwnPropertyNames(obj)); // => ["name", "age", "getName"] ：返回对象的所有实例成员
console.log(Object.keys(obj)); // => ["age", "getName"] ：返回对象的所有可枚举成员
