// Symbol

// es6 引入新的数据类型,是第七种数据类型：

// undefined、null、Boolean、String、Number、Object、Symbol

// 使用 Symbol 数据类型都是唯一的,保证不会与其他属性名产生冲突

let s = Symbol();

console.log(typeof s); // symbol

// Symbol() 可以接收一个字符串作为参数,主要是为了区分

let name = Symbol('name');
let age = Symbol('age');

console.log(name); // Symbol(name)
console.log(age);// Symbol(age)

// Symbol()值 不能与其他类型的值进行运算

let sym = Symbol('MySymbol');

console.log(`your symbol is ${sym}`); // Cannot convert a Symbol value to a string

// 转为字符串
sym.toString() || String(sym)
// 转为Boolean
Boolean(sym); // true

// ! Object 使用 Symbol

let name = Symbol('name');
let age = Symbol('age');

let object = {
    [name]: 'Tom',
    [age]: 18
}

console.log(object); // {Symbol(name): "Tom", Symbol(age): 18}

console.log(object[name]); // Tom

object[name] = "Other"; // 修改 Symbol 值

console.log(object[name]); // Other

// !注意 使用 Symbol值作为对象的 属性(key)时  不能使用点运算符

// Symbol.for('')

