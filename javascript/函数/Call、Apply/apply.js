// apply() 方法能劫持另外一个对象的方法，继承另外一个对象的属性.

// apply() 方法个人理解跟 call() 非常相似，唯一不同的地方是语法上

// 语法：apply(thisObj[[,args]]);

// 示例：

// 跟原有call方法示例一致

// 其他示例

// *数组合并*

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

Array.prototype.push.apply(arr1, arr2);

console.log(arr1);// [1, 2, 3, 4, 5, 6, 7, 8]

// 获取数组最大值、最小值

let max = Math.max.apply(null, arr1);
console.log(max); // 4

let min = Math.min.apply(null, arr2);
console.log(min); // 5
