## parent 访问父实例

详情：
    指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。

示例：

// 父组件

<template>
    <div>
        <children-a ref="childrenA"></children-a>
        <button @click="TriggerSubLevelEvent()">触发子级事件 Btn</button>
    </div>
</template>

<script>
import childrenA from "./childrenA.vue";
export default {
    components: {
        childrenA
    },
    methods: {
        TriggerSubLevelEvent(){
            // 方法一：
            this.$refs.childrenA.ExecutionEvent();
            // 方法二：
            this.$children[0].ExecutionEvent();
            // 注意：
            // this.$children 是一个集合数组
            console.log(this.$children); // [VueComponent]
        },
        // 父组件执行事件
        ExecutionEvent(){
            alert('父组件事件被触发');
        }
    }
}
</script>


===========================================

// 子组件

<template>
    <div>
        <button @click='TriggeringParentEvents()'>触发父组件 Btn</button>
    </div>
</template>

<script>
export default {
    methods: {
        TriggeringParentEvents(){
            this.$parent.ExecutionEvent();
        },
        // Execution event 子组件执行事件
        ExecutionEvent(){
            alert('子组件事件被触发');
        }
    }
}
</script>
