// Proxy 用于修改某些操作的默认行为。
// 在目标对象之前架设一层'拦截器',进行改写、过滤等,可以译为'代理器'

// 语法

new Proxy(target, handler);

// target 目标对象
// handler 处理对象

// 示例：

let obj = Object.create(null);
obj.name = '杨小宝';
obj.age = 18;

// *get*

// 语法：get(target, propKey, receiver) 拦截对象属性的读取 返回'预期的值'

let proxy_1 = new Proxy(obj, {
    get(target, key, receiver){
        console.log('get_target', target);
        console.log('get_key', key);
        console.log('get_receiver', receiver);
        return target[key];
    }
})

console.log(obj.name); // 杨小宝  !注意如果在 'get' 函数不添加 return 最后结果是 undefined

// *set*

// 语法：set(target, propKey, value, receiver) 拦截对象属性的设置 返回一个布尔值。

let proxy_2 = new Proxy(obj, {
    set(target, key, value, receiver){
        console.log('set_target', target);
        console.log('set_key', key);
        console.log('set_value', value);
        console.log('set_receiver', receiver);
        invariant(key, 'set');
        target[key] = value;
        return true;
    }
})

// 防止 set 改写 set、get 方法：

function invariant (key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}

// *apply*

// 语法：apply(target, object, args) 拦截 Proxy 实例作为函数调用的操作

let proxy_3 = new Proxy((a, b) => {
    return a + b;
}, {
    apply(target, ctx, arguments){
        console.log('apply_target', target);
        console.log('apply_ctx', ctx);
        console.log('apply_arguments', arguments);
        return 'No Proxy';
    }
})

proxy_3();

// *has*

// 语法：has(target, propKey) 拦截propKey in proxy的操作，返回一个布尔值。

let proxy_4 = new Proxy(obj, {
    has(target, key){
        console.log('has_target', target);
        console.log('has_key', key);
    }
})

// *construct*

// 语法：construct(target, args) 拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)

let proxy_5 = new Proxy(function() {}, {
    construct(target, args, newTarget){
        console.log('construct_target', target);
        console.log('construct_args', args);
        console.log('construct_newTarget', newTarget);
        return target;
    }
})