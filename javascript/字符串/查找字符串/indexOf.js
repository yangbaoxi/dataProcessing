// 语法

// string.indexOf(searchvalue,start)
// string.lastIndexOf(searchvalue,start)

// 参数

// searchvalue 必需 => 规定需检索的字符串值。
// start 可选 => 可选的整数参数,规定在字符串中开始检索的位置。它的合法取值是 0 到 string Object.length - 1;

// 说明

// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
// 如果没有找到匹配的字符串则返回 -1。
// indexOf() 方法区分大小写。

// 示例

let str = "Hello World";

let n = str.indexOf('H');

let m = str.indexOf('o');

console.log(n);// 0

console.log(m);// 4

let a = str.indexOf('i');

console.log(a);// -1