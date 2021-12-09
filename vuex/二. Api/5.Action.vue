## action 类似于mutations，支持任何的异步操作

1. 创建全局 action 实例  --> 创建 actions.js 

    目录：
        store
        |-- modules
        |-- index.js
        |-- state.js
        |-- getters.js
        |-- mutations.js
        |-- actions.js 

2. actions.js 

<script>
    const actions = {
        asynSetMsg(context, payload){
            context.commit('setMsg', payload);
        }
    }
    export default actions;
</script>

3. index.js 

<script>
    // ... 
    import actions from "./actions.js" 

    // ...

    const store =  new Vuex.Store({
        // ...
        actions               // actions => actions: actions
    })

    export default store;
</script>

4. 组件中使用：

<script>
    export default {
        methods: {
            asynSetMsg(){
                this.$store.dispatch('asynSetMsg', '通过异步修改数据');
            }
        }
    }
</script>

5. mapActions 辅助函数

<script>
    import { mapActions } from "vuex";
    export default {
        methods: {
            // 第一种方法
            ...mapActions({
                asynSetMsg: 'asynSetMsg'
            }),
            // 第二种方法
            ...mapActions([
                'asynSetMsg'
            ]),
            modifyAsynMsg(){
                this.asynSetMsg('通过异步修改数据');
            }
        }
    }
</script>


    

