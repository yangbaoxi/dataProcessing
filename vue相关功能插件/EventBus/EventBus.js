// EventBus 实现的方式 即使 观察者模式

// Vue Api 中  $on =>监听 (订阅) $emit => 触发 (发布) $off => 销毁 (删除)

// 示例代码：

import Vue from "vue";

const EventBus = new Vue();

export default EventBus;

// 组件中使用：

import EventBus from "./EventBus.js";

export default {
    methods: {
        subscribeInfo(){
            EventBus.$on('info', (data) => {
                console.log(data);
            })
        },
        releaseInfo(){
            EventBus.$emit('info', {
                message: "传递的参数"
            })
        }
    }
}

