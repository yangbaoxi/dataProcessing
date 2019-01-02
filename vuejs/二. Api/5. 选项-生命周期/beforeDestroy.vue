## beforeDestroy

详情：
    实例销毁之前调用。在这一步，实例仍然完全可用。

示例：

<script>
    export default {
        beforeDestroy(){
            console.log('实例销毁之前调用');
        } 
    }
</script>
