## deactivated

详情：
    keep-alive 组件停用时调用。

示例：

<script>
export default {
    deactivated(){
        console.log('只有在使用 keep-alive 内置组件的时候才会被调用');
    }
}
</script>
