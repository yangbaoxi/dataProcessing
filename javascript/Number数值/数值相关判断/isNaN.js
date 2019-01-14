// 语法

// Number.isNaN(x)

// 参数

// x 必须 => 接受一个判断的参数

// 说明

// Number.isNaN()用来检查一个值是否为NaN
// 如果参数类型不是NaN，Number.isNaN一律返回false

// 示例

Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9/NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true