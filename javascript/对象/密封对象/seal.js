// seal()

// 语法

// Object.seal(object)

// 参数说明

// object 必须 => 操作的对象

// 详情

// 密封对象，使其无法修改现有属性的特性以及不能添加新的属性

// 示例

let obj = Object.create({}, {
    name: {
        value: "Tom"
    }
})

Object.seal(obj);

obj.age = 18;

console.log(obj.age); // => undefined ：无法向对象添加新的属性

// 报异常：无法修改对象属性的特性
// Uncaught TypeError: Cannot redefine property: name
// (未捕获的类型错误：无法重新定义属性：name)

Object.defineProperty(obj, 'name', {
    enumerable: true
})
