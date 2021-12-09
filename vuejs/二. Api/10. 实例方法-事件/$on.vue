## $on(event, callback)

详情：
    $on 可以直接理解成 子组件使用 $emit 父组件监听子组件事件，回调函数会接收所有传入事件触发函数的额外参数。

示例：


// 父组件
<template>
    <div>
        <!-- 子组件 -->
        <children-component @add="add"></children-component>
    </div>
</template>
<script>
export default {
    methods: {
        add(number){
            alert('父组件使用$on 监听子组件 $emit 事件');
            console.log(number);
        }
    }
}
</script>

// 子组件

<template>
    <div>
        <button @click="add()">子组件 $emit </button>
    </div>
</template>

<script>
export default {
    methods: {
        add(){
            this.$emit('add', 0);
        }
    }
}
</script>
