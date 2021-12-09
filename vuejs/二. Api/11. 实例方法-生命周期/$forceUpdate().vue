## $forceUpdate()

详情: 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

示例：

<template>
    <div>
        <h1>{{ Title }}</h1>

        <button @click="modifyTitle()">修改标题!</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Title: '组件标题!'
        }
    },
    methods: {
        modifyTitle(){
            this.Title = "修改了标题！";

            setTimeout(()=>{
                this.$forceUpdate();
            }, 5000)
        }
    },
    beforeUpdate(){
        console.log('beforeUpdate:触发事件');
    },
    updated(){
        console.log('updated:触发事件');
    }
}
</script>
<!--
    // 控制台:
    beforeUpdate:触发事件
    updated:触发事件
    ========================== 5秒后
    beforeUpdate:触发事件
    updated:触发事件

-->