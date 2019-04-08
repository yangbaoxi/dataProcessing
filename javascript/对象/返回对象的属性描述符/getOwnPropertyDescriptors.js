// getOwnPropertyDescriptors()

// 语法

// Object.getOwnPropertyDescriptors(object)

// 参数说明

// object 必须 => 操作的对象

// 详情

// 返回整个 object 的属性描述符

let object = Object.create({}, {
    name: {
        value: "Tom",
        writable: true,
        enumerable: true,
        configurable: true
    },
    getName: {
        value: function(){
            return this.name
        },
        enumerable: true,
        configurable: true
    }
})

console.log(object);

let object_des = Object.getOwnPropertyDescriptors(object);

console.log(object_des);

// {
//     getName: {
//         configurable: true,
//         enumerable: true
//         value: f(),
//         writable: false
//     },
//     name: {
//         value: "Tom",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// }


