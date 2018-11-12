## updated

详情：
    由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

示例：
<script>
    export default {
        updated(){
            console.log('组件 DOM 已经更新');
        }
    }
</script>

所有视图渲染完毕 可以使用 vm.$nextTick 替换掉 updated

<script>
    export default {
        updated(){
            this.$nextTick(function () {
                // 仅在运行之后才运行的代码
                // 整个视图已被渲染
            })
        }
    }
</script>

