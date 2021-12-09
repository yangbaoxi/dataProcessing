// 语法

// Array.join(separator);

// 参数

// separator (分离字符串)  可选 => 指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符

// 示例

let a = ['90','后','加','油'];

let b = a.join();

let c = a.join('.');

console.log(b);     // 90,后,加,油

console.log(c);     // 90.后.加.油

console.log(typeof b);  // String 