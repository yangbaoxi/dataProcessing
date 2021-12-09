// Generator语法

// 特性：，Generator 函数是一个普通函数，但是有两个特征。
    // 一是，function关键字与函数名之间有一个星号；
    // 二是，函数体内部使用yield表达式，定义不同的内部状态

// 示例

function* Generator(){
    yield '开始';
    yield '过程';
    return "结束"
}

let test = Generator();

console.log(test);// Generator {<suspended>}

test.next(); // {value: "开始", done: false}
test.next(); // {value: "过程", done: false}
test.next(); // {value: "结束", done: true}
test.next(); // {value: undefined, done: true}


// yield 表达式

// 由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。
// yield表达式就是暂停标志。

// 详情

// - 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
// - 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
// - 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// - 如果该函数没有return语句，则返回的对象的value属性值为undefined。

// 使用 console.log() + yield 时 需要  console.log((yield))

function* demo(){
    let input = yield; // undefined;
}

// next 方法的参数

// 1. yield value  ==  yield === undefined   value 是抛出后接收的值

// 示例1：

function* demo2(){
    let a = yield 'demo';

    console.log(a); // true
    
    let b = yield a;
}

let demo2 = demo2();

demo2.next(); // {value: "demo", done: false}
demo2.next(true); // {value: true, done: false}

// 由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的。
// V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。

// 示例2：

function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}
  
let genObj = dataConsumer();

genObj.next(); // Started

genObj.next('a'); // 1. a

genObj.next('b'); // 2. b

// for...of 循环

// for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。

// 示例：

function* demo(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (let i of demo()) {
    console.log(i); // 1, 2, 3, 4, 5
}

// 上面代码使用for...of循环，依次显示 5 个yield表达式的值。
// 这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止
// 且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中。


