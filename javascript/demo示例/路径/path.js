const getColumnPath = (list, id) => {
    // 获取路径
    if (!list || !id) {
        return '';
    }
    let arr = [];
    let findParent = (data, nodeId, parentId) => {
        for (var i = 0, length = data.length; i < length; i++) {
        let node = data[i];
        //由于后端返回的树状结构数组里面的value值为string类型,所以为了避免判断全等有问题,所以将传入的城市id使用toString进行了类型转换
        if (node.id === nodeId) {
            arr.unshift(nodeId);
            if (nodeId === list[0].id) {
            break;
            }
            findParent(list, parentId);
            break;
        } else {
            if (node.children) {
            findParent(node.children, nodeId, node.id);
            }
            continue;
        }
        }
        return arr;
    };
    return findParent(list, id);
}