<!-- 该组件是 内置组件/4.keep-alive.vue 的 children 组件 代码如下： -->

<!--组件A -->
<script>
import { onActivated, onDeactivated } from "vue";
export default {
    setup() {
        // 使用 keep-alive 内置组件 内部涉及的组件被缓存，切换组件视图时，将触发相关生命周期：onActivated, onDeactivated
        onActivated(() => {
            console.log('children: one, onActivated')
        })

        onDeactivated(() => {
            console.log('children: one, onDeactivated')
        })
    }
}
</script>

<!--组件B -->
<script>
import { onActivated, onDeactivated } from "vue";
export default {
    setup() {
        onActivated(() => {
            console.log('children: Two, onActivated')
        })

        onDeactivated(() => {
            console.log('children: Two, onDeactivated')
        })
    }
}
</script>

<!-- 组件切换时控制台打印： -->

<!--
    // 页面首次加载：
    (1) children: one, onActivated
    // 切换B组件
    (2) children: one, onDeactivated
    (3) children: Two, onActivated
    // 切换A组件
    (4) children: Two, onDeactivated
    (5) children: one, onActivated

    总结：组件在切换时，不会再次触发 onBeforeMount onMounted onBeforeUnmount, onUnmounted
-->