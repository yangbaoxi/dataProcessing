// 语法

// string.substring(from, to)

// 参数

// from  必需 => 一个非负的整数，规定要提取的子串的第一个字符在 string Object 中的位置。
// to    可选 => 一个非负的整数，比要提取的子串的最后一个字符在 string Object 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。

// 说明

// substring() 方法用于提取字符串中介于两个指定下标之间的字符。
// substring() 方法返回的子串包括 开始 处的字符，但不包括 结束 处的字符。

// 示例

let str = "Hello World";

let n1 = str.substring(3);

console.log(n1);// lo World

let n2 = str.substring(1, str.length - 1);

console.log(n2);// ello Worl
