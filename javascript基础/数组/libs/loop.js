// 迭代方法

// 1. every()

// 语法

// Array.every(function(currentValue, index, arr), thisValue);

// 参数说明

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
                                            // currentValue 必须 => 当前元素的值
                                            // index 可选 => 元素下标
                                            // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 说明

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
})                          // false

// 注意 可以直接 用于 if() 判断中

// =================================================

// 2. some()

// 语法

// Array.some(function(currentValue, index,arr), thisValue);

// 参数说明

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
                                            // currentValue 必须 => 当前元素的值
                                            // index 可选 => 元素下标
                                            // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 说明

// * some() 方法用于检测数组中的元素是否满足指定条件
// * some() 方法会依次执行数组的每个元素
// * |-- 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// * |-- 如果没有满足条件的元素，则返回false。
// * some() 不会对空数组进行检测
// * some() 不会改变原始数组

// 示例

let b = new Array(20,25,65,40,11);

b.some((ele, index, array) => {
    console.log('当前元素',ele);
    console.log('当前元素下标',index);
    console.log('元素所属数组',array);

    return ele < 10;
})                          // false

// =================================================

// 3. forEach()

// 语法

// Array.forEach(function(currentValue, index, arr), thisValue);

// 参数

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
                                            // currentValue 必须 => 当前元素的值
                                            // index 可选 => 元素下标
                                            // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

let c = new Array(20,25,65,40,11);

c.forEach((ele, index, array) => {
    console.log('当前元素',ele);
    console.log('当前元素下标',index);
    console.log('元素所属数组',array);
})

// =================================================

// 4. filter()

// 语法

// Array.filter(function(currentValue, index, arr), thisValue);

// 参数

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
                                            // currentValue 必须 => 当前元素的值
                                            // index 可选 => 元素下标
                                            // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 说明

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

// =================================================

// 5. map();

// 语法

// Array.map(function(currentValue, index, arr), thisValue);

// 参数

// function(currentValue, index, arr)  必填 => 函数，数组中的每个元素都会执行这个函数
                                            // currentValue 必须 => 当前元素的值
                                            // index 可选 => 元素下标
                                            // arr 可选 => 当前元素属于的数组对象
// thisValue 可选 => 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined"

// 说明

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