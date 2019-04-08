// is();

// 语法

// Object.is(object, object);

// 参数说明

// object => 即将比较的参数

// 详情

// 与严格比较运算符（===）的行为基本一致。

Object.is('foo', 'foo') // true

Object.is({}, {}) // false

// ES5:

+0 === -0 //true
NaN === NaN // false

// ES6：

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

// ES5 可以通过下面的代码，部署Object.is

Object.defineProperty(Object, 'is', {
    value: function(x, y) {
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});
