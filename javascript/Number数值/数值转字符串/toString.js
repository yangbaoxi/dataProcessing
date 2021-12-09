// 语法

// number.toString(radix)

// 参数

// radix 可选 => 规定表示数字的基数，使 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。但是要注意，如果该参数是 10 以外的其他值
    // 2 - 数字以二进制值显示
    // 8 - 数字以八进制值显示
    // 16 - 数字以十六进制值显示

// 说明

// 数字的字符串表示
// 可转换为二进制值/八进制值/十六进制值

// 示例

let num = 3;

let n = num.toString();

console.log(n);// 3
console.log(typeof n); // String

console.log(num.toString(2));// 11
console.log(num.toString(8));// 3
console.log(num.toString(16));// 3