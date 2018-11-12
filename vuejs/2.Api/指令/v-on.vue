## v-on 

详情：
    用在普通元素上时，只能监听原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。

修饰符：
    # .stop - 调用 event.stopPropagation()。
    # .prevent - 调用 event.preventDefault()。
    # .capture - 添加事件侦听器时使用 capture 模式。
    # .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
    # .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
    # .native - 监听组件根元素的原生事件。
    # .once - 只触发一次回调。
    # .left - (2.2.0) 只当点击鼠标左键时触发。
    # .right - (2.2.0) 只当点击鼠标右键时触发。
    # .middle - (2.2.0) 只当点击鼠标中键时触发。
    # .passive - (2.3.0) 以 { passive: true } 模式添加侦听器

示例：
<template>
    <!-- 方法处理器 -->
    <button v-on:click="doThis"></button>

    <!-- 内联语句 -->
    <button v-on:click="doThat('hello', $event)"></button>

    <!-- 缩写 -->
    <button @click="doThis"></button>

    <!-- 停止冒泡 -->
    <button @click.stop="doThis"></button>

    <!-- 阻止默认行为 -->
    <button @click.prevent="doThis"></button>

    <!-- 阻止默认行为，没有表达式 -->
    <form @submit.prevent></form>

    <!--  串联修饰符 -->
    <button @click.stop.prevent="doThis"></button>

    <!-- 键修饰符，键别名 -->
    <input @keyup.enter="onEnter">

    <!-- 键修饰符，键代码 -->
    <input @keyup.13="onEnter">

    <!-- 点击回调只会触发一次 -->
    <button v-on:click.once="doThis"></button>

    <!-- 对象语法 (2.4.0+) -->
    <button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
</template>

子组件监听自定义事件：

<template>
    <my-component @my-event="handleThis"></my-component>

    <!-- 内联语句 -->
    <my-component @my-event="handleThis(123, $event)"></my-component>

    <!-- 组件中的原生事件 -->
    <my-component @click.native="onClick"></my-component>  
</template>
