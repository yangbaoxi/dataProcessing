<script>
import { ref, nextTick, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
    setup() {
        // 2. 父子组件 生命周期 执行循序

        // 父组件：

        onBeforeMount(() => {
            console.log('Parent: onBeforeMount');
        })
        onMounted(() => {
            console.log('Parent: onMounted');
        })
        onBeforeUpdate(() => {
            console.log('Parent: onBeforeUpdate');
        })
        onUpdated(() => {
            console.log('Parent: onUpdated');
        })
        onBeforeUnmount(() => {
            console.log('Parent: onBeforeUnmount');
        })
        onUnmounted(() => {
            console.log('Parent: onUnmounted');
        })

        const string = ref("");

        function changeString() {
            console.log('Parent: change ref String');
            string.value = "hello world";
        }
        nextTick(changeString);


        // 子组件代码在下面）

        // 控制台执行顺序：
        // （1）Parent: onBeforeMount
        // （2）Children: onBeforeMount
        // （3）Children: onMounted
        // （4）Parent: onMounted
        // nextTick执行顺序：
        // （5）Parent: change ref String
        // （6）Children: change ref String
        // 更新生命周期：
        // （7）Parent: onBeforeUpdate
        // （8）Children: onBeforeUpdate
        // （9）Parent: onUpdated
        // （10）Children: onUpdated
        // 销毁生命周期： 
        // （11）Parent: onBeforeUnmount
        // （12）Children: onBeforeUnmount
        // ----- 从父组件点击跳转
        // （13）Parent: onUnmounted
        // （14）Children: onUnmounted
        // ----- 从子组件点击跳转
        // （13）Children: onUnmounted
        // （14）Parent: onUnmounted

    }
}
</script>


<script>
import { ref, nextTick, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
    setup() {
        // 子组件

        onBeforeMount(() => {
            console.log('Children: onBeforeMount');
        })
        onMounted(() => {
            console.log('Children: onMounted');
        })
        onBeforeUpdate(() => {
            console.log('Children: onBeforeUpdate');
        })
        onUpdated(() => {
            console.log('Children: onUpdated');
        })
        onBeforeUnmount(() => {
            console.log('Children: onBeforeUnmount');
        })
        onUnmounted(() => {
            console.log('Children: onUnmounted');
        })

        const string = ref("");

        function changeString() {
            console.log('Children: change ref String');
            string.value = "hello world";
        }
        nextTick(changeString);
    }
}
</script>
