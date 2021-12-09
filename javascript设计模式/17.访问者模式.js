// 访问者模式

// 针对于对象结构中的元素，定义在不改变该对象的前提下访问结构中元素的新方法

// 字面意思是：A类 使用 B类 方法， 但不改变 B类 状态、属性

// 示例：

// 元素 
class Person {
    constructor(name){
        this.name = name;
    }
}

Person.prototype.setName = function (name){
    this.name = name;
}

let person = new Person('Tom');

console.log(person); // {name: "Tom"}

// 访问器

class Visitor {
    setName(object, name){
        Person.prototype.setName.call(object, name);
    }
}

let visitor = new Visitor();

// 访问对象

class A {
    constructor(){
        this.name = null;
    }
}

let a = new A();

visitor.setName(a, 'Yang');

person.setName('小明');

console.log(person);// {name: "小明"}

console.log(a); // {name: "Yang"}


