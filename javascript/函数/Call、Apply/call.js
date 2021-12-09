// call(); 调用一个对象的一个方法，以另一个对象替换当前对象

// call() 方法 个人理解就是 继承属性、方法的一种，改变 this 的作用域

// 语法：call([thisObj[,arg]])

// 示例：

function A (){
    this.age = 18;
    this.getName = function () {
        return this.name || "未知";
    }
}
A.prototype.getAge = function (age) {
    console.log('this.age', this.age); // 18
    console.log('age', age); // 21
    return this.age; // 18
}

function B (name){
    this.name = name;
    A.call(this, this.name);// A 函数 被 B 继承
}

B.prototype.getAge = function () {
    A.prototype.getAge.call(this, 21);
}

let b = new B('xiaobao');

console.log(b.name);// xiaobao
console.log(b.getName());// xiaobao

// 如果 没有 B.prototype.getAge
// console.log(b.getAge()) => b.getAge is not a function

console.log(b.getAge());// undefined

// 如果添加 return A.prototype.getAge.call(this, 21); => 18

// !注意， this 作用域不会指向原对象的原型链
