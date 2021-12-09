## destroyed

详情：
    Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

示例：

<script>
    export default {
        destroyed(){
            console.log('Vue 实例销毁后调用');
        }
    }
</script>
    