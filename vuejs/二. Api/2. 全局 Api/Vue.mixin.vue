## Vue.mixin 全局混入

详情：
    全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为。不推荐在应用代码中使用。

示例: 
    创建一个独立 .js 文件  --> mixin.js    
    <script>
        const AppMixin = {
            data () {
                return {
                    Title: '全局混入'
                }
            }
        }

        export default AppMixin;
    </script>

    main.js 入口js

    <script>
        import Vue from 'vue';
        import AppMixin from './util/mixin.js';

        Vue.mixin(AppMixin); // 注册全局混入
    </script>
    
    