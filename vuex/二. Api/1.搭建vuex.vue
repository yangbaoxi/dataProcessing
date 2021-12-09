## 创建 Vuex

1. 在src 创建 store 文件夹, 接着创建一个 index.js 和 modules文件夹
   
   目录：
        store
        |-- modules
        |-- index.js
    
2. index.js  --->

<script>
    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);

    const debug = process.env.NODE_ENV !== 'production';      // 严格模式开启

    const store =  new Vuex.Store({
        strict: debug,
        // ... ,                    // 全局状态
        modules: {
            // ...                  // 局部状态 （命名空间）
        }
    })

    export default store;
</script>

3. main.js  (vue-cli 入口文件)

<script>
    import store from "./store/index"


    new Vue({
        // ... ,
        store           // store => store: store
    })
</script>


