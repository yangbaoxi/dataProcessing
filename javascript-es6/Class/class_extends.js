// class 继承

// Class 可以通过extends关键字实现继承

// 示例

class Person {
    getName(){
        return Person.name;
    }
}

class Children extends Person {

}

let children = new Children();

console.log(children.getName()); // Person

// 子类调用父类方法、属性

class Person {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getY(){
        console.log(this.x);
    }

    getX(){
        console.log(this.y);
    }
}

class Children extends Person {
    constructor(x, y){
        super(x, y);
    }

    getPersonMenthod(){
        super.getX();
    }
}

let children = new Children(5, 6);

children.getPersonMenthod(); // => 触发 父级 getX() 方法 => 6

// !注意 如果父类的 constructor 又实例化参数 必须在 子类的 constructor 中调用super方法 否则示例就会报错：

// 错误信息：
// Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

// 检测 示例对象是否在原对象基础上

console.log(children instanceof Person); // true
console.log(children instanceof Children);// true

// Object.getPrototypeOf()

// Object.getPrototypeOf方法可以用来从子类上获取父类。

Object.getPrototypeOf(Children) === Person; // true

// super 关键字

// super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

class A {};

class B extends A {
    constructor() {
        super();
    }
}

// 注意，super 代表 A 父类的构造函数，返回B 实例对象 及 super 内部的 this 指向 B 实例 所以 super() 可以理解 ：
// A.prototype.constructor.call(this);

// 在 B 类 执行 A 父类方法 都可以理解成： A.prototype.xx();

// 注意 super 指向父类原型对象，所以定义在父类实例的方法、属性是无法通过 super 调用的

// 示例：

class Person {
    constructor(){
        this.age = 18;
    }
}
Person.prototype.name = "Tom";

class Children extends Person {
    constructor(){
        super();
        console.log(super.age); // undefined
        console.log(super.name);// Tom
    }
}

let children = new Children();

// 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。


class A {
    constructor(){
        this.x = 1;
    }

    print(){
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2;
    }
}

let b = new B();

b.print(); // 2

// 上面代码 b 实例调用 的父类 A 中的 print 方法 但是 b 内部的 print this 指向 B 类
// 导致输入 2 而不是 1。 实际上执行的是  super.print.call(this);

// !注意 在静态方法中 super this 是指向 父类的 this 而不是当前子类实例

// 类的 prototype 属性和__proto__属性

// 每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
// 子类的__proto__属性，表示构造函数的继承，总是指向父类。
// 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。

class A {};

class B extends A {}

B.__proto__ === A; // true

B.prototype.__proto__ === A.prototype; // true

// 记住一点： 子类的 __proto__ 继承的 父类
// 子类的 prototype（原型） 的 __proto__ 继承的 父类的 prototype（原型）

// 原生构造函数的继承

- Boolean()

- Number()

- String()

- Array()

- Date()

- Function()

- RegExp()

- Error()

- Object()

// Mixin 模式的实现 

// '混入' 指多个对象合成一个新的对象，新对象具有各个组成成员的接口。

// 最简单的实现：

let a = {
    a: "a"
}

let b = {
    b: "b"
}

const c = {...a, ...b}; // {a: "a", b: "b"}

// 实例代码： 复制对象原型

function copyProperties (traget, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== "prototype" && key !== 'name'){
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(traget, key, desc);
        }
    }
}

function mix(...mixins) {
    class Mixin {
        constructor(){
            for (let mixin of mixins){
                copyProperties(this, new mixin());
            }
        }
    }
    for (let mixin of mixins) {
        copyProperties(Mixin, mixin);
        copyProperties(Mixin, mixin.prototype);
    }
    return Mixin;
}

// 使用：

class A {
    constructor(){
        this.x = 2;
    }
    getName(){
        console.log(this.x);
    }
}

class B {
    constructor(){
        this.y = 1;
    }
    getY(){
        console.log(this.y);
    }
}


class C extends mix(A, B) {

}

let c = new C();

console.log(c);//  {x: 2, y: 1}  => __proto__: Mixin
