<template>
    <component :is="isView"></component>
</template>

<script>
import { shallowRef } from "vue";
import childrenA from "./childrenA"
import childrenB from "./childrenB"
export default {
    components: { childrenA, childrenB },
    setup() {
        // component 模板语法中组件形式的特性，不需要引入

        // 注意！！！ 定义component is属性绑定的变量时，只能通过 shallowRef、markRaw 定义。
        // 原因：Vue接收到一个组件，该组件被设置为反应对象。这可能会导致不必要的性能开销，应该通过将组件标记为“markRaw”或使用“shallowRef”而不是“ref”来避免。

        const isView = shallowRef(childrenA);

        function changeCom() {
            isView.value = childrenB; // 注意 使用shallowRef 改变值 需要 .value
        }

        return {
            isView,
            changeCom
        }
    }
}
</script>
