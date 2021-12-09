## mixins 混入

详情：
    mixins 接受一个混入对象的数组，混入实例对象可以像正常的实例对象一样包含选项，他们将在 Vue.extend() 里最终选择使用相同的选项合并逻辑合并。

示例：

<script>
    // 单独js文件 (mixins.js)

    const indexMixins = {
        data () {
            return {
                Title: 'mixins混入'  
            }
        },
        methods: {
        },
        mounted () {
            console.log('mounted 钩子函数');
        }
        // ...  包含所有 选项函数、属性
    }

    export default indexMixins;


    // vue 组件引入

    import indexMixins from "./mixins.js";

    export default {
        mixins: [indexMixins]       // 使用混入
    }
</script>

注意： 
    再俩个文件公用混入时，只能公用相同的处理函数，以及相同的变量属性，无法进行消息传递！！！
