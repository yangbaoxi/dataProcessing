// isSealed()

// 语法

// Object.isSealed(object)

// 参数说明

// object 必须 => 操作的对象

// 详情

// 判断对象是否封闭;true：不能修改对象的现有属性特性并且不能添加新的属性

// 示例

let obj = Object.create({});

console.log(Object.isSealed(obj));// false

Object.seal(obj);

console.log(Object.isSealed(obj));// true

