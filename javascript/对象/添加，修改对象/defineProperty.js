// defineProperty()

// 语法

// Object.defineProperty(object, propertyName, propertyDescriptor)

// 参数说明

// object 必须 => 操作的对象
// propertyName 必须 => 对象里面的属性
// propertyDescriptor 必须 => 属性描述符

// 详情

// 添加/修改对象指定属性的特性
// 若对象包含此属性，则是修改此属性的特性；否则为添加此属性。

// 示例：

let obj = Object.create({});

Object.defineProperty(obj, 'name', {
    value: '小宝',
    writable: true,
    enumerable: true,
    configurable:true
})

console.log(obj);// {name: "小宝"}