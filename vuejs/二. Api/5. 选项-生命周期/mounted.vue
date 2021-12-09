## mounted

详情：
    el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

示例：
<script>
    export default {
        mounted(){
            // 处理一些页面刷新 之后的接口调用  ★★★★★
            console.log('处理一些页面刷新 之后的接口调用');
        }
    }
</script>

所有视图渲染完毕 可以使用 vm.$nextTick 替换掉 mounted

<script>
    export default {
        mounted(){
            this.$nextTick(function () {
                // 仅在运行之后才运行的代码
                // 整个视图已被渲染
            })
        }
    }
</script>
