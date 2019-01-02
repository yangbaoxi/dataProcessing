// 语法

// string.slice(start,end)

// 参数

// start 必须 => 要抽取的片断的起始下标。第一个字符位置为 0
// end 可选 => 截取字符的结束下标点，如果为负数那么字符串的尾部开始算起的位置。

// 说明

// slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
// 使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分。
// 如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符

// 示例

let str = "Hello World";

let n1 = str.slice(1);

console.log(n1); // ello World

let n2 = str.slice(0, 3);

console.log(n2); // Hell

let n3 = str.slice(0, -2);

console.log(n3); // Hello Wor
