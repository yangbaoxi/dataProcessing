// getPrototypeOf()

// 语法

// Object.getPrototypeOf(object);

// 参数说明

// object 必须 => 操作的对象

// 详情

// 返回对象的上一级原型

let obj = Object.create({});

console.log(Object.getPrototypeOf(obj));// => Object 对象：对象直接量的原型为Object

let Person = function(name) {
    this.name = name;
}

let p = new Person('Tom');

let people = Object.getPrototypeOf(p);

console.log(people);// => People 对象：new 创建的对象使用构造函数的prototype属性作为他们的原型
console.log(Object.getPrototypeOf(p));// => Object 对象：原型People的原型为Object
