// 语法

// Array.forEach(function(currentValue, index, arr), thisValue);

// 参数说明

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
    // currentValue 必须 => 当前元素的值
    // index 可选 => 元素下标
    // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 示例

let c = new Array(20,25,65,40,11);

c.forEach((ele, index, array) => {
    console.log('当前元素',ele);
    console.log('当前元素下标',index);
    console.log('元素所属数组',array);
})