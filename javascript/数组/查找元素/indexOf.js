// 语法

// Array.indexOf(searchElement[, fromIndex = 0])

// 参数

// searchElement 要查找的元素 
// fromIndex 开始查找的位置。

// 如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。
// 如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 
// 注意：如果参数中提供的索引值是一个负值，仍然从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0

// 示例:

let arr = [1, 2, 3, 4, 5];

console.log(arr.indexOf(1)) // 0 如果监测又该元素返回 元素下标
console.log(arr.indexOf(3)) // 2
console.log(arr.indexOf(6)) // -1 如果监测 无该元素 返回 -1

console.log(arr.indexOf(3,2)); // 2 参数 fromIndex 开始查找的位置
console.log(arr.indexOf(3,-2)); // -1
console.log(arr.indexOf(3,3)); // -1