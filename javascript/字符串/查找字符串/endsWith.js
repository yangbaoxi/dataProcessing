// 语法

// string.endsWith(searchvalue, end);

// 参数

// searchvalue 必须 => 需要检索的字符串值
// end 可选 => 可选的整数参数 规定在字符串选中下标前的位置

// 说明

// endsWith() 返回布尔值，表示参数字符串是否在原字符串的尾部。
// 区分大小写,不会改变原有的字符串

let str = "Hello World";

let n1 = str.endsWith('ld');

console.log(n1); // true

let n2 = str.endsWith('H', 1);

console.log(n2);// true
