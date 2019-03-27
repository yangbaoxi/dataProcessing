// 对象属性

// 一、数据属性

// 说明 

// 包含属性的操作特性；如：设置值、是否可枚举等等
// 1)在使用Object.defineProperty、Object.defineProperties 或 Object.create 函数的情况下添加数据属性，writable、enumerable和configurable默认值为false。
// 2)使用对象直接量创建的属性，writable、enumerable和configurable特性默认为true。

// 特性名称	  描述 => 默认值
// - value	        设置属性的值 => undefined
// - writable	    是否可修改属性的值；true：可修改属性的值；false：不可修改属性的值 => false　　
// - enumerable	    是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举	=> false
// - configurable	是否可修改属性的特性；true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性 => false

let obj_1 = {
    name: 'Tom'
}

console.log(Object.getOwnPropertyDescriptor(obj_1)); // => Object {value: "tom", writable: true, enumerable: true, configurable: true}

let obj_2 = Object.create({}, {
    name: {
        value: "Tom"
    }
})

console.log(Object.getOwnPropertyDescriptor(obj_2));// => Object {value: "tom", writable: false, enumerable: false, configurable: false}

// 二、访问器属性

// 说明

// 设置属性的访问方式；set、get特性等


// 特性名称	   描述 => 默认值
// - get	          属性的返回值函数 => undefined
// - set	          属性的设置值函数；含有一个赋值参数 => undefined
// - enumerable	      是否可枚举属性；true：可枚举，可通过for/in语句枚举属性；false：不可枚举 => false
// - configurable	  是否可修改属性的特性；true：可修改属性的特性(如把writable从false改为true)；false：不可修改属性的特性 => false

let obj = Object.create({}, {
    name: {
        get: function(){
            return this._name; // get和set里的变量不要使用属性，如：属性为name，get和set用的是_name
        },
        set: function(x){
            if (isNaN(x)){
                this._name = x;
            } else {
                this._name = "name不能为纯数字"
            }
        },
        enumerable: true,
        configurable: true
    }
})

console.log(obj); // {} => name: undefined 

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));// => Object {get: function, set: function, enumerable: true, configurable: true}

obj.name = 12;

console.log(obj.name); // => name不能为纯数字
