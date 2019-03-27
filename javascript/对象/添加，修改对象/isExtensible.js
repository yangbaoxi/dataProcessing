// isExtensible()

// 语法

// Object.isExtensible(object) 

// 参数说明

// object 必须 => 操作的对象

// 详情

// 判断是否可向对象添加新的属性

// 示例

let obj = Object.create({});

console.log(Object.isExtensible(obj)); // true

Object.freeze(obj);// 冻结对象
Object.preventExtensions(obj);// 禁止添加新的属性

// 执行以上任意一种方法，都可以使对象无法添加新的属性

console.log(Object.isExtensible(obj));// false
