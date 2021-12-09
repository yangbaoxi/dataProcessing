// 普通数组 差集取值

// 分析: 数组合并 => 过滤 => a 与 b 不同的数组

let a = [1,2,3,4,5];
let b = [3,4,5,6,7];

let n = a.concat(b).filter((val) => {
    return a.includes(val) && !b.includes(val);
})

console.log(n);// [1, 2]

// 数组对象 差集取值

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

let n_obj = a_obj.concat(b_obj).filter((val) => {
    return a_obj.find((a_val) => {
        return a_val.id === val.id;
    }) && !b_obj.find((b_obj) => {
        return b_obj.id === val.id;
    })
})

console.log(n_obj);// [{ id:3, name: '王五' }, { id:4, name: '赵六' }]
