// 语法

// Array.every(function(currentValue, index, arr), thisValue);

// 参数说明

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
    // currentValue 必须 => 当前元素的值
    // index 可选 => 元素下标
    // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 详情

// * every()方法用于检测数组所有元素是否都符合指定条件
// * every() 方法使用指定函数检测数组中的所有元素
// * |-- 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
// * |-- 如果所有元素都满足条件，则返回 true
// * every() 不会对空数组进行检测
// * every() 不会改变原始数组

// 示例

let a = new Array(30,10,11,15,50);

a.every((ele, index, array) => {
    console.log('当前元素',ele);
    console.log('当前元素下标',index);
    console.log('元素所属数组',array);
    return ele > 10;
})  // false

// 注意 可以直接 用于 if() 判断中