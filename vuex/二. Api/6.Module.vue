## Module 模块化 + 命名空间

1. 创建模块化 实例对象

在 store 下  modules 创建一个 '业务'.js;

    目录：
    store
        |-- modules
            |-- pm.js 

        |-- index.js
        |-- state.js
        |-- getters.js
        |-- mutations.js
        |-- actions.js


2. pm.js --->

<script>
    const state = {
        title: "111",
        msg: "信息"
    }

    const getters = {
        titleGet(state, getters){
            console.log('state',state);
            console.log('getters',getters);
            return state.title + '1111你哈！'
        }
    }

    const mutations = {
        getData(state, payload){
            console.log('这是什么？',state);
            console.log('触发函数',payload);
            state.title = payload;
        }
    }

    const actions = {
        addTime(context, payload){
            console.log('异步',context)
            console.log('触发函数2',payload);
            context.commit('getData', payload);
        }
    }

    export default {
        namespaced: true,       // 开启命名空间
        state,
        getters,
        actions,
        mutations
    }
</script>


3. index.js --->

<script>
    import Vue from "vue";
    import Vuex from "vuex";
    // 全局实例
    import state from "./state"
    import getters from "./getters"
    import mutations from "./mutations"
    import actions from "./actions"
    // 局部实例 (命名空间)
    import pm from "./modules/pm"

    Vue.use(Vuex);
    // 生产环境 严格模式关闭
    const debug = process.env.NODE_ENV !== 'production';

    const store =  new Vuex.Store({
        strict: debug,
        state,
        getters,
        mutations,
        actions,
        modules: {
            pm
        }
    })

    export default store;
</script>

4. 组件中使用：

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    
    export default {
        methods: {
            ...mapMutations({
                getData: 'pm/getData'
            }),
            ...mapActions({
                addTime: 'pm/addTime'
            })
        },
        computed: {
            // 第一种方法
            ...mapState({
                title: state  => {
                    console.log('111',state)
                    return state.pm.title;
                }
            }),
            // 第二种方法
            ...mapState('pm',{
                title: state => state.title
            }),
            // ======================
            ...mapGetters({
                titleGet: 'pm/titleGet'
            })
        }
    }
</script>
