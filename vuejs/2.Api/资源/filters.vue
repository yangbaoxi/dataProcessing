## filters 过滤器 (管道)

详情：
    用于一些常见的文本格式化

示例：

// 局部 过滤器

<template>
    <div>
        <span v-for="item in DataList">{{ item.Title | madiaTypeFilter(item.year) }}</span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                DataList: [
                    { Title: '没有梦想', year: 2018 },
                    { Title: '何必留下', year: 2019 }
                ]
            }
        },
        // 过滤器可以接受其他参数,默认的value 参数 永远都是 过滤的值!!!
        filters: {
            // 定义一个过滤器  madiaTypeFilter {{ name }}
            madiaTypeFilter(value, year){
                console.log('过滤器参数传入',year);

                let data = 'value' + value;

                return data;
            }
        }
    }
</script>

// 全局过滤器

<script>
    // 单独 js 文件
    import Vue from "vue";

    const dateTime = Vue.filters('dateTime', (value) => {
        return value + 11;
    })

    export default {
        dateTime
    }

    // webpack vue-cli main.js ==================

    // 引入全局过滤器

    import $filters from "./filters.js"

    Vue.use($filters);
    
</script>

