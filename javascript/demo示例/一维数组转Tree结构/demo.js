// 一维数组递归 转Tree结构

// 一维数组数据：

let data = [
    {
        id: 1,
        name: "A",
        parentId: null
    },
    {
        id: 2,
        name: "B",
        parentId: null
    },
    {
        id: 3,
        name: "A-2",
        parentId: 1
    },
    {
        id: 4,
        name: "B-2",
        parentId: 2
    }
]

// 根据 parentId === id 生产 Tree 结构

function HandleData(data, parentId = null) {
    let dataArr = [];
    let temp;
    for (let i = 0; i < data.length; i++) {
        if (data[i].parentId === parentId) {
            let object = data[i];
            temp = HandleData(data, data[i].id);
            if (temp.length > 0) {
                object.children = temp;
            } else {
                object.children = [];
            }
            dataArr.push(object);
        }
    }
    return dataArr;
}

console.log(HandleData(data));

