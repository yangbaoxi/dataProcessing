## $once(event, callback)

详情: 
    监听 $emit 处理的event事件, 只触发一次事件

示例:

<template>
    <div>
        <button @click="one()"> $once 触发事件 </button>
    </div>
</template>

<script>
export default {
    methods: {
        one(){
            this.$emit('once', 0);
        }
    },
    mounted(){
        this.$once('once', (data) => {
            console.log('传递的参数', data);
            console.log('只触发一次');
        })
    }
}
</script>
