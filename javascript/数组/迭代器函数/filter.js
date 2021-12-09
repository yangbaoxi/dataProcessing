// 语法

// Array.filter(function(currentValue, index, arr), thisValue);

// 参数说明

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
// currentValue 必须 => 当前元素的值
// index 可选 => 元素下标
// arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 详情

// * filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
// * filter() 不会对空数组进行检测。
// * filter() 不会改变原始数组。

// 示例

let d = new Array(20,25,35,50,101);

let filterd = d.filter((ele, index, array) => {
    console.log('当前元素',ele);
    console.log('当前元素下标',index);
    console.log('元素所属数组',array);

    return ele > 30
})

console.log(d);         // [35, 50, 101];