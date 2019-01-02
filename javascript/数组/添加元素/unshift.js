// 语法

// Array.unshift(newElement, ...newElementN);

// 参数

// newElement 必填 => 要添加到数组的第一个元素

// 说明

// unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。
// unshift() 方法不创建新的创建，而是直接修改原有的数组。

let a = new Array(1,2,3,4);

a.unshift(5);

console.log(a);     // [5, 1, 2, 3, 4]