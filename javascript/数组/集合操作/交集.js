// 普通数组 交集取值

// 分析: a 过滤 b 数组 数据

// 示例

let a = [1,2,3,4,5];
let b = [3,4,5,6,7];

let n = a.filter((val) => {
    return b.includes(val);
})

console.log(n);// [3,4,5];

// 数组对象 并集取值

let a_obj = [
    { id:1, name: '张三' },
    { id:2, name: '李四' },
    { id:3, name: '王五' },
    { id:4, name: '赵六' }
]

let b_obj = [
    {id:1, name: '张三'},
    {id:2, name: '李四'},
    {id:5, name: '孙七'},
    {id:6, name: '吴九'}
]

let n_obj = a_obj.filter((a_val) => {
    return b_obj.find((b_val) => {
        return a_val.id === b_val.id;
    })
})

console.log(n_obj);// [{ id:1, name: '张三' }, {id:2, name: '李四'}]
