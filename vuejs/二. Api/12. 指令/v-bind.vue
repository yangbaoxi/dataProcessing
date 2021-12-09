## v-bind

详情：
    动态地绑定一个或多个特性，或一个组件 prop 到表达式

修饰符：

    # .prop - 被用于绑定 DOM 属性 (property)。
    # .camel - (2.1.0+) 将 kebab-case 特性名转换为 camelCase.
    # .sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器

示例：

<template>
    <!-- 绑定一个属性 -->
    <img v-bind:src="imageSrc">

    <!-- 缩写 -->
    <img :src="imageSrc">

    <!-- 内联字符串拼接 -->
    <img :src="'/path/to/images/' + fileName">

    <!-- class 绑定 -->
    <div :class="{ red: isRed }"></div>
    <div :class="[classA, classB]"></div>
    <div :class="[classA, { classB: isB, classC: isC }]">

    <!-- style 绑定 -->
    <div :style="{ fontSize: size + 'px' }"></div>
    <div :style="[styleObjectA, styleObjectB]"></div>

    <!-- 绑定一个有属性的对象 -->
    <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

    <!-- 通过 prop 修饰符绑定 DOM 属性 -->
    <div v-bind:text-content.prop="text"></div>

    <!-- prop 绑定。“prop”必须在 my-component 中声明。-->
    <my-component :prop="someThing"></my-component>

    <!-- 通过 $props 将父组件的 props 一起传给子组件 -->
    <child-component v-bind="$props"></child-component>

    <!-- XLink -->
    <svg><a :xlink:special="foo"></a></svg>
    
    <!-- .camel 修饰符绑定 svg -->
    <svg :view-box.camel="viewBox"></svg>
</template>
