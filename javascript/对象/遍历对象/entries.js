// entries()

// 语法

// Object.entries()

// 详情

// 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
// 可以直接使用该对象 转换为 Map 结构


let object = {
    name: "Tom",
    age: 18
}

let object_entries = Object.entries(object);

console.log(object_entries); // [ ["name", "Tom"], ["age", 18] ]
