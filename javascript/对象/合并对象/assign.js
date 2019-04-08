// assign()

// 语法

// Object.assign(object, source);

// 参数说明

// object 必须 => 目标对象
// source 可选 => 源对象

// 详情

// 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
// undefined和null无法转成对象，所以如果它们作为参数，就会报错。
// 如果该参数不是对象，则会先转成对象，然后返回
// 除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
// Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
// Object.assign方法实行的是浅拷贝，而不是深拷贝
// 同名属性的替换
// Object.assign可以用来处理数组，但是会把数组视为对象。以下标为 key
// Object.assign会复制取值函数，只有在函数拿到值以后，将这个值复制过去

// 示例 1

let obj_target = { a: 1 };
let obj_1 = { b: 1 };
let obj_2 = { c: 1 };

Object.assign(obj_target, obj_1, obj_2);

console.log(obj_target);// {a: 1, b: 1, c: 1}

// 示例 2

let obj_target = { a: 1 };
let obj_1 = { b: 1, c: 1 };
let obj_2 = { c: 2 };

Object.assign(obj_target, obj_1, obj_2);

// c 属性被后者c 覆盖 (不会合并)
console.log(obj_target);// {a: 1, b: 1, c: 1}

// 示例 3 浅拷贝

let obj_3 = { a: { b: 2 } };

let obj_4 = Object.assign({}, obj_3);

obj_3.a.b = 3;

console.log(obj_4.a.b); // 3

// 示例 4 数组的处理

console.log(Object.assign([1,2], [3, 4])); //[3, 4] 

// !注意：以下标为 key!!!

// 示例 5 为对象添加属性

class Person {
    constructor(name, age){
        Object.assign(this, {name, age});
        // { name , age } === { name: name , age: age }
    }
}

// 等同于 ===

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// 示例 6 为对象添加方法

Object.assign(Person.prototype, {
    getName(){
        // ...
    },
    getAge(){
        // ...
    }
})

// 等同于 ===

Person.prototype.getName = function (){
    // ...
}

Person.prototype.getAge = function (){
    // ...
}

// 示例 7 克隆对象

function clone(object) {
    return Object.assign({}, object)
}

// 如果保持原型不变需要获取 对象的上一级原型

function clone(object){
    let object_proto = Object.getPrototypeOf(object); // 获取对象上一级原型
    return Object.assign(Object.create(object_proto), object);
}
