// 语法

// for ... of 

// 示例

let arr = [1,2,3];

for(let a of arr){
    console.log('当前元素', a);
}

// *es6 新增三个方法 用于遍历数组*

// entries() => 对键值对的遍历
// keys() => 对键名的遍历
// values() => 是对键值的遍历

// 示例

// *entries*

for (let [index, item] of arr.entries()) {
    console.log(index, item); // 0 => 1、1 => 2、2 => 3
}

for (let item of arr.entries()) {
    console.log(item); // [0, 1]、[1, 2]、[2, 3]
}

// entries 可以手动调用遍历器 next方法

let item = arr.entries();

console.log(item.next().value); // [0, 1]
console.log(item.next().value); // [1, 2]
console.log(item.next().value); // [2, 3]

// *keys*

for (let item of arr.keys()) {
    console.log(item); // 0、1、2
}

// *values*

for (let item of arr.values()) {
    console.log(item); // 1、2、3
}
