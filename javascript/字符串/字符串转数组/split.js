// 语法

// string.split(separator,limit)

// 参数

// separator 可选 => 字符串或正则表达式，从该参数指定的地方分割 string Object。
// limit 可选 => 该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度

// 说明

// split() 方法用于把一个字符串分割成字符串数组。
// 如果把空字符串 ("") 用作 separator，那么 stringObject 中的每个字符之间都会被分割。
// split() 方法不改变原始字符串。

let str = "1 2 3 4 5 6 7 8 9 10";

let n1 = str.split(' ');

console.log(n1); // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

let n2 = str.split('');

console.log(n2);// ["1", " ", "2", " ", "3", " ", "4", " ", "5", " ", "6", " ", "7", " ", "8", " ", "9", " ", "1", "0"]

let n3 = str.split(' ', 5);

console.log(n3); // ["1", "2", "3", "4", "5"]
