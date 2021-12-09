## beforeUpdate

详情：
    数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

示例：
<script>
    export default {
        beforeUpdate(){
            console.log('数据更新时调用');
        }   
    }
</script>
