## v-model

详情： 
    在表单控件或者组件上创建双向绑定。

限制：
    # <input>
    # <select>
    # <textarea>

修饰符：

    # .lazy - 取代 input 监听 change 事件 延迟
    # .number - 输入字符串转为有效的数字
    # .trim - 输入首尾空格过滤

<template>
    <!-- 绑定 -->
    <input type="text" v-model="input" />

    <!-- 延迟监听lazy -->
    <input type="text" v-model.lazy="input" />

    <!-- 将字符串转为Number -->
    <input type="text" v-model.number="input">
</template>
