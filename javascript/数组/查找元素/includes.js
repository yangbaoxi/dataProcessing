// 语法

// Array.includes(searchElement, fromIndex)

// 参数

// searchElement 必须 => 需要查找的元素值。
// fromIndex 可选 => 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。

// 示例

let arr = [1,2,3,4,5,6,7,8,9,10];

let a = arr.includes(1);

console.log(a); // true

let b = arr.includes(1, 1);

console.log(b); // false;

let c = arr.includes(1, -1);

console.log(c); // false