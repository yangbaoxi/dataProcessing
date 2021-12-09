// 语法

// string.substr(start, length)

// 参数

// start 必需 => 要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符
// length 可选 => 子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。

// 说明

// substr() 方法可在字符串中抽取从 开始 下标开始的指定数目的字符。
// substr() 的参数指定的是子串的开始位置和长度，因此它可以替代 substring() 和 slice() 来使用。
// substr() 方法不会改变源字符串。

// 示例

let str = "Hello World";

let n1 = str.substr(1);

console.log(n1);// ello World

let n2 = str.substr(2, 5);

console.log(n2);// llo W

let n3 = str.substr(-2, 2);

console.log(n3);// ld
