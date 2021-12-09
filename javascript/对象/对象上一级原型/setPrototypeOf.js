// setPrototypeOf()

// 语法

// Object.setPrototypeOf(object, prototype)

// 参数说明

// object 必须 => 操作的对象
// prototype 必须 => 原型对象

// 详情

// 设置对象的原型

// 示例

let object = Object.create(null);

console.log(Object.getPrototypeOf(object)); // null

Object.setPrototypeOf(object, {});

console.log(Object.getPrototypeOf(object))// => Object 原型
