// 语法

// Array.pop()

// 说明

// pop() 方法将删除 array 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。
// 如果数组已经为空，则 pop() 不改变数组，并返回 ★undefined★ 值。


let a = [
    { name: '没有梦想' },
    { name: '何必留下' }
]

let b = a.pop();

console.log(b); // { name: '何必留下' }