// 给函数设置默认参数

// x 默认 undefined y 默认 'World';
// 如果 不给 y 值 y 默认 'World';

function A (x, y = 'World') {
    console.log(x, y);
}

A('Hello', ''); // Hello  => y: ""
A('Hello','china'); // Hello china => y: "china"
A('Hello'); // Hello World => y: "World"

// 与解构赋值默认值结合使用
function B({x, y = 0}) {
    console.log(x, y);
}
B({});// undefined 0 => 可理解成形参中又三个变量 x y {} , x 默认 undefined y 默认 0  {} 默认 undefined
B({x: 2});// 2 0
B() // TypeError: Cannot read property 'x' of undefined
// 解释：当直接调用 B 函数 {} 为 undefined 所有 undefined 不可能有 x || y 直接报错。
// 通过 B({}); 可以 以下面函数的方式：

function B1({x, y = 0} = {}) {
    console.log(x, y);
}
B1();// undefined 0

// 示例：
function C1({ x = 0, y = 0 } = {}){
    console.log(x, y);
}

function C2({ x, y } = { x: 0, y: 0 }){
    console.log(x, y);
}
// 无参数
C1();// 0 0
C2();// 0 0

// 有参数
C1({x: 3, y: 8});// 3 8
C2({x: 3, y: 8});// 3 8

// x 有值，y 无值的情况
C1({x: 3});// 3 0
C2({x: 3});// 3 undefined

// x 和 y 都无值的情况
C1({});// 0 0
C2({});// undefined undefined

// 解释： C1函数的形参 x y 默认值 0 并且 {} 值为 {} 调用C1函数 在传或者不传参数 x y 默认都是 0
// C2函数的形参 x y 默认 undefined {} 值为 {x: 0, y: 0} 当我传参时 就会把 {} 里面的参数替换掉
