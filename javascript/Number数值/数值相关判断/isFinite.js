// 语法

// Number.isFinite(x)

// 参数

// x 必须 => 接受一个判断的参数

// 说明

// 如果参数类型不是数值，Number.isFinite一律返回false。

// 示例

Number.isFinite(15); // true
Number.isFinite(15.5); // true
Number.isFinite('15'); // false
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false