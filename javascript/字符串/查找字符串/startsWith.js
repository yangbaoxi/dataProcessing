// 语法

// string.startsWith(searchvalue, start);

// 参数

// searchvalue 必须 => 需要检索的字符串值
// start 可选 => 可选的整数参数 规定在字符串中开始检索的位置

// 说明

// startsWith() 方法可返回 布尔值 表示参数字符串是否在原字符串的头部
// 区分大小写,不会改变原有的字符串

let str = "Hello World";

let n1 = str.startsWith('He');

console.log(n1); // true;

let n2 = str.startsWith('ll', 2);

console.log(n2); // true;