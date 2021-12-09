## mutations 修改数据

在处理 vuex 数据的时候，使用 <严格模式> 处理

Mutation 必须是同步函数

1. 严格模式：

store -- index.js --->

<script>
    // ...

    const debug = process.env.NODE_ENV !== 'production';

    const store =  new Vuex.Store({
        strict: debug
        // ...
    })
</script>

2. 创建 全局 mutations 实例 --> 创建 mutations.js 

    目录:
        store
        |-- modules
        |-- index.js
        |-- state.js
        |-- getters.js
        |-- mutations.js

3. mutations.js --->

<script>
    const mutations = {
        setMsg(state, payload){
            state.Height = payload;
        }
    }
    // 参数 state 能够获取子模块 的 state  实例属性  ★★★ (命名空间)
    export default mutations;
</script>


4. index.js --->

<script>
    // ... 
    import mutations from "./mutations.js"

    // ... 
    const store =  new Vuex.Store({
        // ...
        mutations               // mutations => mutations: mutations
    })

    export default store;
</script>

5. 组件中使用： 

<script>
    export default {
        methods: {
            setMsg() {
                this.$store.commit('setMsg', '我修改了 vuex 的数据');
            } 
        }
    }
</script>

6. mapMutations 辅助函数

<script>
    import { mapMutations } from "vuex";
    export default {
        methods: {
            // 第一种方法
            ...mapMutations({
                setMsg: 'setMsg'
            }),
            // 第二种方法
            ...mapMutations([
                'setMsg'
            ]),
            modifyMsg(){
                this.setMsg('我修改了 vuex 的数据');
            }
        }
    }
</script>

