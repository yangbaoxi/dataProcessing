// values()

// 语法

// Object.values()

// 详情

// 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

// 示例

let object = {
    name: "Tom",
    age: 18
}


let object_values = Object.values(object);

console.log(object_values); // ["Tom", 18]

