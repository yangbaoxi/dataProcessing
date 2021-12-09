## Vue.component 全局组件

详情：
    注册全局组件使用方法：
    # Vue.component('my-component', Vue.extend({ /* ... */ })) // 注册组件，传入一个扩展过的构造器

    # Vue.component('my-component', { /* ... */ }) // 注册组件，传入一个选项对象 (自动调用 Vue.extend)

    # var MyComponent = Vue.component('my-component') // 获取注册的组件 (始终返回构造器)

示例：

MyButton.vue 

<template>
    <!-- 单一全局组件 -->
    <div>
        <button @click.stop="btn()">全局组件！</button>
    </div>
</template>

<script>
export default {
    name: 'MyButton',
    methods: {
        btn(){
            alert(1);
        }
    }
}
</script>

MyButton ---- index.js 

<script>
    import MyButton from "./src/MyButton.vue";

    MyButton.install = (Vue) => {
        Vue.component(MyButton.name, MyButton);
    } 

    export default MyButton;
</script>

cli -- main.js 

<script>
    import Vue from "vue";
    import MyButton from "@/myui/MyButton/index.js";

    Vue.use(MyButton);
</script>


// 多个组件同时引入

<template>
    <!-- 组件 A -->
    <div> 我是组件A </div>
</template>
组件A ==> index.js
<script>
    import ComponentA from "./ComponentA.vue";

    ComponentA.install = (Vue) => {
        Vue.component(ComponentA.name, ComponentA);
    }

    export default ComponentA;
</script>

<template>
    <!-- 组件 B -->
    <div> 我是组件B </div>
</template>
组件B ==> index.js
<script>
    import ComponentB from "./ComponentB.vue";

    ComponentB.install = (Vue) => {
        Vue.component(ComponentB.name, ComponentB);
    }

    export default ComponentB;
</script>

组件库集合 ==> index.js 

<script>
    import ComponentA from "./ComponentA/index.js";
    import ComponentB from "./ComponentB/index.js";

    const components = [
        ComponentA,
        ComponentB
    ]

    const install = (Vue) => {
        components.forEach(component => {
            Vue.component(component.name, component);
        })
    }

    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue);
    }

    export default {
        install,
        ComponentA,
        ComponentB
    }
</script>

cli ==> main.js

<script>
    import Vue from "vue";
    // 第一种
    import MyUi from "@/MyUi/index.js";
    Vue.use(MyUi);
    // 第二种
    // 引入部分组件
    import {
        ComponentA,
        ComponentB
    } from "@/MyUi/index.js";

    Vue.use(ComponentA);
    Vue.use(ComponentB);
</script>


<script>
getReDictInfo() { // 获取车站字典表
    this.$api.getReDictInfo(this.queryBody).then((res) => {
        this.$Fn.CodeError(res.code, res.msg).then(() => {
            let data = res.data.dict.list || [];
            this.stationData = [...this.stationData, ...data];
        })
    })
}
</script>