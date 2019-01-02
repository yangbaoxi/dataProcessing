// 语法
        
// Array.shift()

// 说明

// 如果数组是空的，那么 shift() 方法将不进行任何操作，返回 undefined 值。
// 请注意，该方法不创建新数组，而是直接修改原有的 array

// 示例

let a = [
{ name: '没有梦想' },
{ name: '何必留下' }
]

let b = a.shift();

console.log(b);     // { name: "没有梦想" }