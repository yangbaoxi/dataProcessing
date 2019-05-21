// class

// Class => 类 生成实例对象的传统方法是通过构造函数

// 详情：

// 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。
// 类不存在变量提升
// 如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。 => * Name(){}

// 示例：

function Person(name){
    this.name = name;
}

Person.prototype.toString = function () {
    return `我的名字：${this.name}`;
}

// 使用 Class：

class Person {
    constructor(name){
        this.name = name;
    }

    toString(){
        return `我的名字：${this.name}`;
    }
}

// 构造函数的 prototype 属性在 es6 '类' 继续存在，类的所有方法都定义在 prototype 属性上

// 上面代码等同于

Person.prototype = {
    constructor(){},
    toString(){}
}

// prototype对象的constructor属性，直接指向“类”的本身，这与 ES5 的行为是一致的。

Person.prototype.constructor === Person // true

// 类的内部所有定义的方法，都是不可枚举的

// 类内部所有的属性都是定义在 this 方法定义在 prototype 原型上

// 取值函数 (getter) 和 存值函数 (setter)

// 示例：

class Person {

    constructor(){}

    get name(){
        return "Tom"
    }
    set name(value){
        return `修改name=> ${value}`
    }
    get age(){
        return 18
    }

}

let person = new Person();

console.log(a.name);// Tom
console.log(a.age);// 18

// Class 表达式

const MyClass = class Me {
    getName(){
        return Me.name;
    }
}

console.log(new MyClass().getName());// Me => 如果 return是this.name {undefined} 

Me.name // ReferenceError: Me is not defined

// 立即实行的实例化函数

let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('Tom');

console.log(person.sayName());// Tom

// 静态方法

// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
// 如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

// 示例

class Person {
    static getName(){
        console.log('静态方法');
    }

    getAge(){
        console.log('原型方法');
    }
}

let person = new Person();

console.log(person.getAge());// 原型方法

Person.getName() // 静态方法

person.getName()// TypeError: person.getName is not a function

// 如果需要在内部使用 静态方法  写法：Person.getName(); 即可

// !注意 类的继承 也可以 继承 静态方法

// 示例属性：

class Person {
    name = "Tom"
    constructor(){
        this._name = "Tom"
    }
}

let a = new Person();

console.log(a); // {name: "Tom", _name: "Tom"}

// new.target 属性

// new是从构造函数生成实例对象的命令。
// ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。
// 如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。

// 示例

class Person {
    constructor(){
        console.log(new.target === undefined); // false
        console.log(new.target === Person);// true
    }
}

// !注意 子类继承父类时，new.target会返回子类。

// 这个特点可以适用于：

class Person {
    constructor(){
        if (new.target === Person){
            throw new Error('本类不能实例化');
        }
    }
}

