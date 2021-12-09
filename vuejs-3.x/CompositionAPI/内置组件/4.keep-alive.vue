<template>
    <!-- 使用  keep-alive 不需要引入，不需要定义，可以直接使用 -->
    <KeepAlive>
        <component :is="isView"></component>
    </KeepAlive>

    <!-- 按钮切换 -->
    <button @click="changeA()">切换A组件</button>
    <button @click="changeB()">切换B组件</button>

    <!-- keep-alive 的参数详情 -->
    <!-- include\exclude -->
    <!-- ！注意 include\exclude 属性所匹配的组件是 组件内部定义 name 选项的时候！！！ ☆☆☆ -->
    <!-- 逗号分隔字符串 -->
    <keep-alive include="childrenA, childrenB">
        <component :is="isView"></component>
    </keep-alive>

    <!-- 使用正则表达式 (必须使用 v-bind) -->
    <keep-alive :include="/childrenA | childrenB/">
        <component :is="isView"></component>
    </keep-alive>

    <!-- 数组 -->
    <keep-alive :include="['childrenA', 'childrenB']">
        <component :is="isView"></component>
    </keep-alive>
    <!-- max -->
    <!-- 注意：
        最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。
    -->
    <keep-alive :max="10">
        <component :is="isView"></component>
    </keep-alive>
</template>

<script>
import { ref, shallowRef } from "vue";
import childrenA from "./childrenA"
import childrenB from "./childrenB"
export default {
    components: {
        childrenA,
        childrenB
    },
    setup() {
        // 1. KeepAlive 使用
        const isView = shallowRef(null);
        changeA(); // 自执行

        function changeA() {
            isView.value = childrenA;
        }

        function changeB() {
            isView.value = childrenB;
        }

        return {
            isView,
            changeA,
            changeB
        }

        // 2. keep-alive 参数
        // include - 字符串或正则表达式。只有名称匹配的组件会被缓存。
        // exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
        // max - 数字。最多可以缓存多少组件实例
        // 直接查看上面 Template
    }
}
</script>
