// getOwnPropertyDescriptor()

// 语法

// Object.getOwnPropertyDescriptor(object, propertyName)

// 参数说明

// object 必须 => 操作的对象
// propertyName 必须 => 对象的属性

// 详情

// 返回属性描述符对象 

// 示例

let obj = Object.create({}, {
    name: {
        value: "小宝",
        writable: true,
        enumerable: true,
        configurable: true
    }
})

let propertyDes = Object.getOwnPropertyDescriptor(obj, 'name');

console.log(propertyDes);// {value: "小宝", writable: true, enumerable: true, configurable: true}
