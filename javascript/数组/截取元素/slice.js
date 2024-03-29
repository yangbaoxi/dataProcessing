// 语法

// Array.slice(start, end);

// 参数

// start 必需 => 规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推
// end 可选 => 规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果这个参数是负数，那么它规定的是从数组尾部开始算起的元素。

// 说明

// 该方法并不会修改数组，而是返回一个子数组。

// 示例

let a = new Array(1,2,3,4,5,6,7,8,9);

let b = a.slice(5);

console.log(b);     // 6 7 8 9 => 截取下标 5 ~ (array.length - 1) 

let c = a.slice(5,6);

console.log(c);     // 6 => 截取下标 5 ~ 6 的值

let d = a.slice(-2);

console.log(d);     // 8 9 => 截取 array.length 倒数第二位 ~ (array.length - 1) 

let e = a.slice(-2, -1);

console.log(e);    // 8 => 截取 array.length 倒数第二位 ~ array.length 倒数第一位