// Reflect

// 详情

// Reflect对象与Proxy对象一样 也是 ES6 为了操作对象而提供的新 API
// 修改某些Object方法的返回结果，让其变得更合理
// 让Object操作都变成函数行为

// 示例

// *Reflect.get(target, name, receiver)*

// Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined。

let object = Object.create({}, {
    name: {
        value: "Tom"
    },
    getName: {
        get: function(){
            return this.name;
        },
        set: function(value){
            return this.name = this.name + value;
        }
    }
})

console.log(object); // { name: "Tom", get getName: ƒ () }

Reflect.get(object, 'name'); // Tom

// Reflect.get(receiver) receiver => 可以改变this的指向

let object_one = Object.create({}, {
    name: {
        value: "Yang",
        writable: true
    }
})

Reflect.get(object, 'getName', object_one); // Yang

// 示例二

// *Reflect.set(target, name, value, receiver)*

// Reflect.set方法设置target对象的name属性等于value

let object_two = Object.create({}, {
    name: {
        value: "Tom",
        writable: true
    }
})
console.log(object_two);// {name: "Tom"}

Reflect.set(object_two, 'name', 'Yang');

console.log(object_two);// {name: "Yang"}

// Reflect.set(receiver) receiver => 可以改变this的指向

Reflect.set(object, 'getName', 'Yang', object_two);

console.log(object_two);// {name: "TomYang"}

// 示例三 （查找元素）

// *Reflect.has(obj, name)*

Reflect.has(object, 'name');

console.log(Reflect.has(object, 'name')); // true

// 示例四 （删除元素）

// *Reflect.deleteProperty(obj, name)*

let object_three = Object.create({}, {
    name: {
        value: 'Tom',
        configurable: true // 是否可被删除
    }
})

console.log(object_three); // {name: "Tom"}

Reflect.deleteProperty(object_three, 'name'); // 旧写法： delete object_three.name;

console.log(object_three); // {}

// 示例五（new Object） 创建一个对象实例

// *Reflect.construct(target, args)*

// Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。

function GetName (name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    }
}

let instance = Reflect.construct(GetName, ['Tom']); // 旧写法：let instance = new GetName('Tom')

console.log(instance.getName()); // Tom

// 示例六 （读取原型的属性）

// *Reflect.getPrototypeOf(obj)*

// Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)。

Reflect.getPrototypeOf(instance); // constructor: ƒ GetName(name) \n __proto__: Object

// 旧写法： Object.getPrototypeOf(instance) 

// 示例七 （设置对象原型）

// *Reflect.setPrototypeOf(obj, newProto)*

let object_four = Object.create(null);

console.log(object_four); // null

Reflect.setPrototypeOf(object_four, {}); // 旧写法： Object.setPrototypeOf(object, prototype)

console.log(object_four); // => Object 原型

// 示例八 （继承）

// *Reflect.apply(func, thisArg, args)*

// Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。

Reflect.apply(Math.min, Math, [1,2,3,4]); // 1
Reflect.apply(Math.max, Math, [1,2,3,4]); // 4

// 旧写法：let max = Math.max.apply(null, [1,2,3,4]);

// 示例九 （添加/修改对象指定属性的特性）

// *Reflect.defineProperty(target, propertyKey, attributes)*

let object_five = Object.create({}, {
    name: {
        value: "Tom",
        configurable: true // 允许可进行属性符的修改
    }
})

Reflect.defineProperty(object_five, 'name', { // 旧写法：Object.defineProperty(object, property, propertyDescriptor)
    writable: true,
    enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(object_five, 'name')); // {value: "Tom", writable: true, enumerable: true, configurable: true}

// 示例十 （获取对象属性符）

// *Reflect.getOwnPropertyDescriptor(target, propertyKey)*

Reflect.getOwnPropertyDescriptor(object_five, 'name'); // {value: "Tom", writable: true, enumerable: true, configurable: true}

// 上面就是旧写法： Object.getOwnPropertyDescriptor(object, propertyKey)

// 将来会替代掉后者。

// 示例十一 （对象是否可扩展）

// *Reflect.preventExtensions(target)* => Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。

// *Reflect.isExtensible (target)* => Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。

let object_six = Object.create({});

Reflect.isExtensible(object_six); // true

Reflect.preventExtensions(object_six); // true

Reflect.isExtensible(object_six);// false

// 示例十二 （返回对象所有属性）

// *Reflect.ownKeys (target)*

// Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

let object_seven = Object.create({}, {
    name: {
        value: "Tom"
    },
    [Symbol.for('age')]: {
        value: 18
    }
})

console.log(object_seven); // {name: "Tom", Symbol(age): 18}

Object.getOwnPropertyNames(object_seven); // ["name"]

Object.getOwnPropertySymbols(object_seven); // [Symbol(age)]

Reflect.ownKeys(object_seven); // ["name", Symbol(age)]
