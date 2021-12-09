// 语法

// string.replace(searchvalue,newvalue)

// 参数

// searchvalue 必须 => 规定子字符串或要替换的模式的 RegExp 对象。请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。
// newvalue => 必需 => 一个字符串值。规定了替换文本或生成替换文本的函数。

// 说明

// replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串.

// 示例

let str = "Hello World";

let n = str.replace(/Hello/g,'替换');

console.log(n); // 替换 World