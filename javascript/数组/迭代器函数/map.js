// 语法

//  Array.map(function(currentValue, index, arr), thisValue);

// 参数说明

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
    // currentValue 必须 => 当前元素的值
    // index 可选 => 元素下标
    // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 详情

// * map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值
// * map() 方法按照原始数组元素顺序依次处理元素
// * map() 不会对空数组进行检测
// * map() 不会改变原始数组

// 示例

let e = [
    { name: "A", age: 18},
    { name: "B", age: 20},
    { name: "C", age: 25},
]

let maps = e.map((ele, index, array) => {
    console.log('当前元素',ele);
    console.log('当前元素下标',index);
    console.log('元素所属数组',array);

    return ele.name;
})

console.log(maps);          // ['A','B','C'];