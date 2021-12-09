## directives 自定义 指令

详情：
    操作底层的DOM元素，实现对一些DOM元素的操作

示例：

// 局部自定义 指令

<script>
    export default {
        directives: {
            // 定义一个 v-changeColor {{ name }}
            changeColor: {
                // 指令内部钩子函数
                // 指令第一次绑定到元素时调用触发  (相似于 => vue实例 created)
                bind(el, binding, vnode){
                    console.log('bind');
                },
                // 被绑定元素插入父节点时调用 (相似于 => vue实例 mounted);
                inserted(el, binding, vnode){
                    console.log('inserted');
                    console.dir('el', el);
                    console.log('binding', binding);
                },
                // 所在组件的 VNode 更新时调用 (相似于 => vue实例 beforeUpdate);
                update(el, binding, vnode, oldVnode){
                    console.log('update');
                    console.log('oldVnode', oldVnode);
                },
                // 指令所在组件的 VNode 及其子 VNode 全部更新后调用 (相似于 => vue实例 updated);
                componentUpdated(el, binding, vnode, oldVnode){
                    console.log('componentUpdated');
                },
                // 只调用一次，指令与元素解绑时调用。 (相似于 => vue实例 destroyed);
                unbind(el, binding, vnode){
                    console.log('unbind');
                }
            }
        } 
    }
</script>

// 全局自定义指令

<script>
    // 单独 js文件
    import Vue from "vue";

    const changeColor = Vue.directive('changeColor', {         
        // 与局部指令钩子函数一致
        inserted(el, binding){
            console.dir('Dom', el);
        }
    })

    export default {
        changeColor
    }

    // !注意 这里 directive 不加 's' 

    // webpack vue-cli main.js ==================

    // 引入全局自定义指令

    import $directive from './directive.js'

    Vue.use($directive);

</script>

// 钩子函数参数 详情

* el: 指令所绑定的元素，可以用来直接操作 DOM 。

* binding: 一个对象，包含以下属性

    . name: 指令名，不包括 v- 前缀。
    . value: 指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
    . oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用.
    . expression: 字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"
    . arg: 传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"
    . modifiers: 一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }

* vnode: Vue 编译生成的虚拟节点 (!!!暂停不考虑了解)

* oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
