// create() 

// 语法

// Object.create(prototype, propertyDescriptor)

// 参数说明

// prototype 必须 => 返回对象的原型，可以为null。若为null，对象的原型为undefined。
// propertyDescriptor 可选 => 属性描述符

// 示例：

let obj_one = Object.create(null);

console.log(obj_one);// 无原型 无任何原型方法属性

let obj_two = Object.create({});

console.log(obj_two);// 拥有Object原型方法属性 => 等同于 let obj_two = {};

// *propertyDescriptor*

// 语法格式：

// {
//     value: '', // 设置此属性的值
//     writable: true, // 设置此属性是否可写入；默认为false：只读
//     enumerable: true, // 设置此属性是否可枚举(通过for/in预付)；默认为false：不可枚举
//     configurable: true // 设置此属性是否可配置；如：是否可以修改属性的特性及删除属性。默认为false
// }

// 示例：

let obj_three = Object.create({}, {
    name: {
        value: "小宝",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 20
    }
})

console.log(obj_three); // {name: "小宝", age: 20}

obj_three.age = 18; // => 20 age writable 默认false 属性为只读

for (const k in obj_three) {
    console.log(k); // => name 只输入 name 属性 age enumerable 默认为false 不能通过for/in 枚举
}


delete obj_three.age;// => 不可删除 configurable 默认为 false 不能修改属性特性以及删除属性
