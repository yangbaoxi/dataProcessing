## state  储存数据

创建 全局 state 实例

1. 在store 文件下 创建 state.js 

    目录：
        store
        |-- modules
        |-- index.js
        |-- state.js

2. state.js --->

<script>
    const state = {
        Title: "Vuex state"
    }

    export default state;
</script>

3. index.js --->

<script>
    // ...
    import state from "./state.js"

    // ...

    const store =  new Vuex.Store({
        // ...
        state               // state => state: state
    })

    export default store;
</script>


4. 组件中使用：

<script>
    export default {
        // 计算属性
        computed: {
            Title(){
                return this.$store.state.Title
            }
        }
    }
</script>


5. mapState 辅助函数

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                Title: state => state.Title,
                
                // 传字符串参数 'Title' 等同于 `state => state.Title`
                TitleContent: 'Title'

            })
        }
    }
</script>
