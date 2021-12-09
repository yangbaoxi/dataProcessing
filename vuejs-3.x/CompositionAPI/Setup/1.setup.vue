setup() 函数是 vue3 中，专门为组件提供的新属性。它为我们使用 vue3 的 Composition API 新特性提供了统一的入口。

setup 函数会在 beforeCreate 之后、created 之前执行

<script>
export default {
    setup() {
        console.log('替代了 mounted、beforeMount函数');
    }
}
</script>

setup 函数 接收俩个 形参：
    1. props 定义当前组件允许外界传递过来的参数名称
    2. context 函数的第二个形参是一个上下文对象，这个上下文对象中包含了一些有用的属性，这些属性在 vue 2.x 中需要通过 this 才能访问到

