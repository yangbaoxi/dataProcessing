// Rest 参数 (形式 ...变量), 用于获取函数的多余变量参数

// 语法： function(...args){}

// 示例：

function A(...items){
    console.log(items); // [1, 2, 3]
    console.log(...items);// 1, 2, 3
}

A(1, 2, 3);


// 错误写法：

function A(...items, c){} // Error