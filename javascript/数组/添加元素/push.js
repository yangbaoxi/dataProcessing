// 语法

// Array.push(newElement, ...newElementN);

// 参数

// newElement 必填 => 要添加到数组的第一个元素

// 说明

// push() 方法可把它的参数顺序添加到 array 的尾部。它直接修改 array 而不是创建一个新的数组。
// push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。

// 示例

let a = new Array(1,2,3);

a.push(4);

console.log(a);     // 1 2 3 4