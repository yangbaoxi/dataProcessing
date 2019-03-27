// defineProperties()

// 语法

// Object.defineProperties(object, propertyDescriptor)

// 参数说明

// object 必须 => 操作的对象
// propertyDescriptor 可选 => 属性描述符

// 详情

// 添加/修改对象一个或多个属性的特性
// 若对象包含此属性，则是修改此属性的特性；否则为为对象添加此属性。

// 示例：

let obj = Object.create({});

Object.defineProperties(obj, {
    name: {
        value: '小宝',
        writable: true,
        enumerable: true,
        configurable: true
    }
})

console.log(obj); // {name: "小宝"}

// 注意！ propertyDescriptor 语法格式 参考 creat.js 注释
