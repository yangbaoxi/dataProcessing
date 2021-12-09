## getter vuex 的 '计算属性'

创建 全局 getter 实例

1. 在 store 文件下 创建 getters.js 

    目录：
        store
        |-- modules
        |-- index.js
        |-- state.js
        |-- getters.js

2. getters.js --->

<script>
    const getters = {
        msg(state, getters) {
            return state.msg + '全局getters';
        }
    }
    // 参数 state 能够获取子模块 的 state、getters  实例属性  ★★★ (命名空间)
    export default getters;
</script>

3. index.js --->

<script>
    // ... 
    import getters from "./getters.js"

    // ... 

    const store =  new Vuex.Store({
        // ...
        getters               // getters => getters: getters
    })

    export default store;
</script>

4. 组件中使用:

<script>
export default {
    computed: {
        msg(){
            return this.$store.getters.msg
        }
    }
}
</script>

5. mapGetters 辅助函数

<script>
    import { mapGetters } from "vuex";

    export default {
        computed: {
            // 第一种方法
            ...mapGetters({
                // 映射为 `this.$store.getters.msg`
                msg: 'msg'
                // ...
            }),
            // 第二种方法
            ...mapGetters([
                'msg'
                // ...
            ])
        }
    }
</script>

