## extends 扩展

详情：
    许声明扩展另一个组件(可以是一个简单的选项对象或构造函数)，而无需使用 Vue.extend。这主要是为了便于扩展单文件组件。


mixins 与 extends 的区别：

    mixins: 多继承、 任何文件都可以引入 去继承里面的属性跟方法
    extends： 单继承、对单个组件的扩展性丰富

实例：

<script>
    // 单独js文件 (extends.js)

    const indexExtends = {
        data () {
            return {
                Title: 'extends扩展'       
            }
        },
        mounted () {
            console.log('extends扩展 钩子函数');
        }
    }

    export default indexExtends;


    // vue 组件引入

    import indexExtends from "./extends.js";

    export default {
        extends: indexExtends           // 使用扩展
    }

</script>

mixins、extends、components 三者执行顺序以及属性、方法覆盖

三者执行顺序：  extends > mixins > components

覆盖顺序： components > mixins > extends

