// 语法

// String.fromCharCode(n1, n2, ..., nX)

// 参数

// n1, n2, ..., nX 必填 => 一个或多个 Unicode 值，即要创建的字符串中的字符的 Unicode 编码

// 说明

// fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。

// 示例

let num1 = 65;
let num2 = 97;

let str = String.fromCharCode(num1, num2);

console.log(str);// Aa