// 语法

// string.repeat(number);

// 参数

// number 必填 => 循环拷贝次数 

// 说明

// repeat() 方法返回一个新字符串，表示将原字符串重复n次
// 如果 number 传 0 的话 返回为 ""

// 示例

let str = "Hello World";

let n1 = str.repeat();
let n2 = str.repeat(3);

console.log(n1);// ""

console.log(n2);// Hello WorldHello WorldHello World
