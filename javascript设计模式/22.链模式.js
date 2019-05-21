// 链模式

// 链模式：通过在对象方法中将当前对象返回，实现对同一个对象多个方法的链式调用。从而简化对该对象的多个方法的多次调用时，对该对象的多次引用

// 如：JQuery

// Jq 源码解析：

// 一、原型式继承

function A() {
}

A.prototype = {
    length: 0,
    size: function(){
        return this.size;
    }
}

let a = new A();

console.log(a.size);// 0

console.log(A.size());//  A.size is not a function
console.log(A().size());// Cannot read property 'size' of undefined

// 二、实现类调用

function A(){
    return B
}

let B = A.prototype = {
    length: 0,
    size: function(){
        return this.size;
    }
}

A().size(); // 0

// 将 B 属性 实现成 A 函数的某一个属性：

function A(){
    return A.fn
}

A.fn = A.prototype = {
    length: 0,
    size: function(){
        return this.length;
    }
}
A().size(); // 0

// 三、获取元素

function A(selector){
    return A.fn.init(selector);
}

A.fn = A.prototype = {
    init: function(selector){
        return document.getElementById(selector);
    },
    length: 0,
    size: function() {
        return this.length;
    }
}

// 四、实现链式调用 （将元素簇写入对象）

function A(selector){
    return A.fn.init(selector);
}

A.fn = A.prototype = {
    init: function(selector){
        this[0] = document.getElementById(selector);
        this.length = 1;
        return this;
    },
    length: 0,
    size: function() {
        return this.length;
    }
}

A('demo').size();// 1

// 发现bug：

let demo = A('demo');
let test = A('test');
console.log(demo); // {0: test}
console.log(test); // {0: test}

// 后者覆盖前者

// 改造：

function A(selector){
    return new A.fn.init(selector);
}

console.log(demo); // {0: demo}
console.log(test); // {0: test}

// 但是 发现没有 size 这个方法了

// 修改：

A.fn = A.prototype = {
    constructor: A,
    init: function(selector){
        if ( !selector ) {
            return this;
        }
        this[0] = document.getElementById(selector);
        this.length = 1;
        return this;
    },
    length: 0,
    size: function() {
        return this.length;
    },
    css: function() {
        console.log('css');
        return this;
    },
    other: function() {
        console.log('other');
        return this;
    }
}

A.fn.init.prototype = A.fn;

let demo = A('demo');

demo.css().other(); // css other


