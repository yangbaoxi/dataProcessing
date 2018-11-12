## beforeMount

详情：
    在挂载开始之前被调用：相关的 render 函数首次被调用

示例：

<script>
    export default {
        beforeMount(){
            console.log('在挂载开始之前被调用');
        }
    }
</script>
