## slot 插槽

详情：
    <slot> 元素作为组件模板之中的内容分发插槽。<slot> 元素自身将被替换。

Props: 
    name - String 用于命名插槽。

示例：

<template>
    <!-- 子组件 -->
    <div>
        <h1>插槽</h1>

        <slot name="main"></slot>
    </div>
</template>

<template>
    <!-- 父组件 -->
    <div>
        <children-a>
            <h2 slot='main'>我是插槽部门数据！！！</h2>      
        </children-a>    
    </div> 
</template>

