// 语法

// string.search(searchvalue)

// 参数

// searchvalue	必须 => 查找的字符串或者正则表达式。

// 说明

// search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。
// 如果没有找到任何匹配的子串，则返回 -1。

// 示例

let str = 'Hello World';

let n1 = str.search('Hello');

console.log(n1);// 0

let n2 = str.search('hello');

console.log(n2);// -1

let n3 = str.search(/orl/g);

console.log(n3);// 7