## keep-alive 缓存组件

详情：
    <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们

    ★★ 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

示例：

<template>
    <!-- 基本使用方法 -->
    <keep-alive>
        <component :is="views"></component>
    </keep-alive>

    <!-- 和 动画组件一起使用  <transition> -->

    <transition>
        <keep-alive>
            <component :is="views"></component>
        </keep-alive>
    </transition>
</template>

keep-alive 接受三个参数：

    Props: 
        include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
        exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
        max - 数字。最多可以缓存多少组件实例。

示例：

<template>
    <!-- include\exclude -->
    <!-- ！注意 include\exclude 属性所匹配的组件是 组件内部定义 name 选项的时候！！！ ☆☆☆ -->
    <!-- 逗号分隔字符串 -->
    <keep-alive include="childrenA, childrenB">
        <component :is="views"></component>
    </keep-alive>

    <!-- 使用正则表达式 (必须使用 v-bind) -->
    <keep-alive :include="/childrenA | childrenB/">
        <component :is="views"></component>
    </keep-alive>

    <!-- 数组 -->
    <keep-alive :include="['childrenA', 'childrenB']">
        <component :is="views"></component>
    </keep-alive>
    
</template>

<template>
    <!-- max -->

    <keep-alive :max="10">
        <component :is="views"></component>
    </keep-alive>

    <!-- 注意：
        最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
     -->
</template>

