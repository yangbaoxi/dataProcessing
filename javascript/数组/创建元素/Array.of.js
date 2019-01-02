// 语法

// Array.of(ele0, ele1, ele2)

// 参数说明

// ele0 ... 是参数列表当使用这些参数来调用构造函数

// 示例

let arr = Array.of(1,2,3);

console.log(arr) // [1,2,3]

let copy = [1,2,3,4];

let arr2 = Array.of(...copy);

console.log(arr2) // [1,2,3,4]
