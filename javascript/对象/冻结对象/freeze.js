// freeze()

// 语法

// Object.freeze(object)
// Object.freeze(object, '属性')

// 参数说明

// object 必须 => 操作的对象

// 详情

// 冻结对象，使其不能添加属性以及无法对现有的实例属性进行特性更改、值修改、属性删除等操作
// 此操作不可逆，冻结后无法进行解封。
// 只影响实例属性，不影响原型属性。

// 示例：

let obj = {
    name: "小宝",
    age: 18
}

console.log(obj); // {name: "小宝", age: 18}

Object.freeze(obj);// 冻结对象

obj.age = 20;// => 18

console.log(obj); // {name: "小宝", age: 18}
