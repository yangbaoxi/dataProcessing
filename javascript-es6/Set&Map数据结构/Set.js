// 语法

// new Set()

// 说明

// Set本身是一个构造函数，用来生成 Set 数据结构。
// 它类似于数组，但是成员的值都是唯一的，没有重复的值。

// 一、去重示例

// *普通数组去重*

let arr = [1,1,2,3,4,5,5];

let s = new Set(arr);

console.log(s);// [1,2,3,4,5];

// 二、Set属性和方法示例

// 语法说明

// 属性：
// - Set.prototype.constructor：构造函数，默认就是Set函数。
// - Set.prototype.size：返回Set实例的成员总数。

// 方法：
// - add(value)：添加某个值，返回 Set 结构本身
// - delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// - has(value)：返回一个布尔值，表示该值是否为Set的成员。
// - clear()：清除所有成员，没有返回值。

// 遍历方法：
// - keys()：返回键名的遍历器
// - values()：返回键值的遍历器
// - entries()：返回键值对的遍历器
// - forEach()：使用回调函数遍历每个成员

// *属性*

let arr2 = [1,1,2,3,4,5,5];

let s2 = new Set(arr2);

console.log(s2.size);// 5

// *add*

let arr3 = [1,1,2,3,4,5,5];

let s3 = new Set(arr3);

s3.add(5).add(6);

console.log(s3);// [1,2,3,4,5,6];

let arr4 = [
    {id: 1, age: '18'},
    {id: 2, age: '20'}
]

let s4 = new Set(arr4);

s4.add({id: 1, age: '18'}).add({id:3, age: '22'});

console.log(s4);// [{id: 1, age: '18'}, {id: 2, age: '20'}, {id: 1, age: '18'}, {id:3, age: '22'}]

// 数组对象不给于过滤去重！！！

// *delete*

s3.delete(1); // 注意不能 连续操作删除
s3.delete(5);

console.log(s3);// [2,3,4,6];

s4.delete({id: 1, age: '18'});

console.log(s4);// 删除失败，数组对象删除无效 

// *has*

s3.has(1);// false;
s3.has(2);// true;

// *keys()*

console.log(s3.keys()); // {1, 2, 3, 4, 5, 6}

for (const item of s3.keys()) {
    console.log(item);// 1 ~ 6
}

// *values()*

console.log(s3.values());// {1, 2, 3, 4, 5, 6}

for (const item of s3.values()) {
    console.log(item);// 1 ~ 6
}

// *entries()*

console.log(s3.entries());// {1, 2, 3, 4, 5, 6}

for (const item of s3.entries()) {
    console.log(item);// [1, 1] ~ [6, 6]
}

// *forEach()*

s3.forEach((value, key) => {
    console.log('value: ' ,value, 'key: ', key); // value: 1 key:  1 ~ value: 6 key:  6 
})

