// 语法

// string.match(regexp)

// 参数

// regexp 必须 => 规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。

// 说明

// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
// match() 方法将检索字符串 String Object 以找到一个或多个与 regexp 匹配的文本

// 示例

let str = "Hello World";

let n1 = str.match(/o/g);

console.log(n1);// ['o', 'o'];
