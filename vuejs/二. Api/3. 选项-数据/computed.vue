## computed 计算属性

详情：
    计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。

示例：
<template>
    <span> {{ number }}</span>
</template>
<script>
    export default {
        data(){
            return {
                number: 0
            }
        },
        computed: {
            message(){
                return this.number + 1;
            }
        }
    }
</script>
