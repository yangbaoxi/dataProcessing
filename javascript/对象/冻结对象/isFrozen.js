// isFrozen()

// 语法

// Object.isFrozen(object)

// 详情

// 判断对象是否冻结;true：不能修改对象的现有属性特性和值并且不能添加新的属性

// 示例

let obj = Object.create({});

console.log(Object.isFrozen(obj)); // false

Object.freeze(obj);// 冻结对象

console.log(Object.isFrozen(obj));// true
