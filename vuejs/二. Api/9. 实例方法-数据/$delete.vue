## $delete(target, key)

详情: 
    参数: 
        @param {Object | Array} target
        @param {String | Number} key

示例:

<template>
    <div>
        <div>对象Object: {{ obj }}</div>
        <div>数组Array : {{arr}}</div>
        <button @click="deletes()">$delete</button>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            obj: {
                a: 1,
                b: 2
            },
            arr: ['1','2']
        }
    },
    methods: {
        deletes(){
            this.$delete(this.obj, 'a'); // 删除对象中的 a
            this.$delete(this.arr, 0); // 删除数组中的下标 0
        }
    }
}
</script>
