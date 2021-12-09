// 语法

// string.includes(searchvalue, start);

// 参数

// searchvalue 必须 => 需要检索的字符串值
// start 可选 => 可选的整数参数,规定在字符串中开始检索的位置

// 说明

// includes() 方法可返回 布尔值 表示是否找到了参数字符串
// 区分大小写,不会改变原有字符串

let str = "Hello World";

let bool = str.includes('wor');

console.log(bool); // false

let bool2 = str.includes('Wor');

console.log(bool2);// true
