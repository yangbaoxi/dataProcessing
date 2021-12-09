// 语法

// new Map();

// 一、创建 Map 数据结构

let data = [
    [ // [] key => value
        'key', 'value'
    ],
    [
        'name', '杨宝'
    ]
]

let a = new Map(data);

console.log(a); // [ {"key" => "value" }, { "name" => "杨宝" } ];

// 二、Map属性和方法示例

// 语法说明

// 属性：
// - Map.prototype.constructor：构造函数，默认就是Map函数。
// - Map.prototype.size：返回Map实例成员总数

// 方法：
// - set(key, value)：set方法设置键名key对应的键值为value；返回整个map对象
// - get(key)：get方法读取key对应的键值，如果找不到key，返回undefined
// - has(key)：has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
// - delete(key)：delete方法删除某个键，返回true。如果删除失败，返回false。
// - clear()：clear方法清除所有成员，没有返回值。

// 遍历方法：
// - keys()：返回键名的遍历器。
// - values()：返回键值的遍历器。
// - entries()：返回所有成员的遍历器。
// - forEach()：遍历 Map 的所有成员。

// *属性*

console.log(a.size); // 2

// *方法*

// 1. set(key, value)

a.set(3,'新增值');

console.log(a); // [ {"key" => "value" }, { "name" => "杨宝" }, { 3 => "新增值" } ]; 

// 2. get(key)

let key = a.get('key');

console.log(key); // value

// 3. has(key)

a.has(3); // true
a.has(4); // false

// 4. delete(key)

a.delete(3); // true

// 5. clear()

a.clear();
console.log(a.size); // 0

// *遍历方法*

// 1. keys() 返回键名的遍历器。

console.log(a.keys()); // {"key", "name"}

for (let item of a.keys()) {
    console.log(item); // key, name
}

// 2. values()

console.log(a.values()) // {"value", "杨宝"}

for (let item of a.values()) {
    console.log(item); // value , 杨宝
}

// 3. entries()

console.log(a.entries()); // {"key" => "value", "name" => "杨宝"}

for (let item of a.entries()) {
    console.log(item); // ["key", "value"], ["name", "杨宝"]
}

// or 或者

for (let [key, value] of a.entries()) {
    console.log(key, value);
}

// 4. forEach()

a.forEach(item => {
    console.log(item); // value , 杨宝
});

// 与其他数据结构的互相转换

// 1. Map 转为数组

[...a] // [ ["key", "value"], ["name", "杨宝"] ]

// 2. 数组 转为 Map

[ [], [] ] // map 只能接收 ‘二维’数组的结构

// 3. Map 转为对象

let obj = Object.create(null);
console.log(obj);

for (let [key, value] of a.entries()) {
    obj[key] = value;
}
// {key: "value", name: "杨宝"}

// 4. 对象转为 Map

let map = new Map();
let data = {
    'age': 18,
    'name': '杨小宝'
}

for (let k of Object.keys(data)) {
    map.set(k, data[k]);
}
// {"age" => 18, "name" => "杨小宝"}
