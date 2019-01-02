## $set(target, key, value);

详情:
    参数: 
        @param {Object | Array} target
        @param {String | Number} key
        @param {Any} value

示例: 
<template>
    <div>
        <div>对象Object : {{ obj }}</div>
        <div>数组Array : {{arr}}</div>
        <button @click="set()">$set</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            obj: {
                a: 1
            },
            arr: ['杨宝']
        }
    },
    methods: {
        set(){
            this.$set(this.obj, 'a', 2); // 改变对象
            this.$set(this.arr, 0, '没有梦想.何必留下'); // 改变数组
        }
    }
}
</script>
