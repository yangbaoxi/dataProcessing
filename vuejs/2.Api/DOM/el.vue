## el 示例化DOM元素

详情： 
    提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

示例：

<script>
    // 第一种绑定方式 
    new Vue({
        el: "#app"
    })
    // 第二种绑定方式
    new Vue({
        // ...
    }).$mount('#app');
</script>
