// 语法糖： setup 
    语法糖 setup 中不需要写 return 后续会单独将语法糖
watch 监听

watch 监听需要特定的数据源，并在单独的回调函数中执行副作用
- 惰性地执行副作用
- 访问被侦听状态的先前值和当前值
惰性地解释：
    回调仅在侦听源发生变化时被调用。
<script setup>
    import { ref, reactive, watch } from "vue";
    // 1. watch 单一源监听使用
    const ref_data = ref(0);
    const reactive_data = reactive({
        number: 0
    })
    function change_ref () {
        ref_data.value++;
    }
    function change_reactive () {
        reactive_data.number++;
    }
    watch(ref_data, (newVal, oldVal) => { // 侦听 ref
        console.log('newVal', newVal);
        console.log('oldVal', oldVal);
    })
    watch( // 单一源 侦听 reactive
        () => reactive_data.number,
        (newVal, oldVal) => {
            console.log('newVal', newVal);
            console.log('oldVal', oldVal);
        }
    )
    // 注意！ 回调函数中，为形参 第一个参数是 newVal（改变后的值）， 第二个参数是 oldVal（改变前的值）
    // 注意！ 可以直接监听整个 reactive 对象  watch(reactive, (newVal, oldVal) => { 副作用 }) 这是一个深度监听
    // ========================================================
    // 2. 多源 监听使用
    
    // 方式一：
    watch([ref_data, reactive_data], ([newVal1, newVal2], [oldVal1, oldVal2]) => {
        // 改变后：
        console.log('ref_data - newVal', newVal1);
        console.log('reactive_data - newVal', newVal2);
        // 改变前：
        console.log('ref_data - oldVal', oldVal1);
        console.log('reactive_data - oldVal', oldVal2);
    })

    // 方式二：

    watch(() => [ref_data.value, reactive_data.a], ([newVal1, newVal2], [oldVal1, oldVal2]) => {
        /**
         * ...同上
         */
        /**
         * 注意！！
         * 如果监听 某个属性 使用 () =>  函数方式监听，
         * 监听对象源，可以直接 [ref, ref]
         */
    })

    // ========================================================
    // 3. 

</script>
