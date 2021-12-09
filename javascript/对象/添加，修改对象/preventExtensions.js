// preventExtensions()

// 语法

// Object.preventExtensions(object)

// 参数说明

// object 必须 => 操作的对象

// 详情

// 设置对象不能添加新的属性

// 示例

let obj = Object.create({}, {
    name: {
        value: "Tom"
    }
})

Object.preventExtensions(obj);

obj.age = 18;

console.log(obj.age); // undefined
