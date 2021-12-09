// fromEntries()

// 语法

// Object.fromEntries()

// 详情

// Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。

// 示例

let arr = [ 
    ['name', 'Tom'],
    ['age', 18]
]

let object = Object.fromEntries(arr);

console.log(object);

// 谷歌暂不支持