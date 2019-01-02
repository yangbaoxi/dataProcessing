## component 动态组件

详情：
    渲染一个 "元组件" 为动态组件。 依 is 的值 来决定某个组件来渲染

示例： 

<template>
    <div>
        <component :is="views" :props="data" @event='event'></component>   
    </div>
</template>

<script>
import childrenA from "./childrenA"
import childrenB from "./childrenB"
export default {
    data () {
        return {
            views: childrenA
        }
    }
}
</script>
