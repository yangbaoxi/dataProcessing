## beforeCreate 

详情：
    在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

示例：

<script>
    export default {
        beforeCreate(){
            console.log('实例初始化');
        }
    }
</script>
