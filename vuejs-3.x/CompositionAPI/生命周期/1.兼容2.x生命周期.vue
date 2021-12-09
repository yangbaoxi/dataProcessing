常用生命周期：onBeforeMount、onMounted、onBeforeUpdate、onUpdated、onBeforeUnmount、onUnmounted
<script>
import { ref, nextTick, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
    setup() {
        // 1. 组件内部使用常用生命周期

        onBeforeMount(() => {
            console.log('v2: beforeMount => v3: onBeforeMount');
        })
        onMounted(() => {
            console.log('v2: mounted => v3: onMounted');
        })
        onBeforeUpdate(() => {
            console.log('v2: beforeUpdate => v3: onBeforeUpdate');
        })
        onUpdated(() => {
            console.log('v2: updated => v3: onUpdated');
        })
        onBeforeUnmount(() => {
            console.log('v2: beforeUnmount => v3: onBeforeUnmount');
        })
        onUnmounted(() => {
            console.log('v2: unmounted => v3: onUnmounted');
        })

        const string = ref("");

        function changeString() {
            console.log('change ref String');
            string.value = "hello world";
        }
        nextTick(changeString) // 页面加载后自执行(写到这里，nextTick 是v3 版本最新节点更新事件, 请查阅全局API - nextTick );
        // 控制台执行顺序：
        // (1) v2: beforeMount => v3: onBeforeMount
        // (2) v2: mounted => v3: onMounted
        // change ref String
        // (3) v2: beforeUpdate => v3: onBeforeUpdate
        // (4) v2: updated => v3: onUpdated
        // 销毁页面：
        // (5) v2: beforeUnmount => v3: onBeforeUnmount
        // (6) v2: unmounted => v3: onUnmounted

        // 2. 父子组件 生命周期 执行循序

        // 访问 2.父子组件生命周期.vue

    }
}
</script>
