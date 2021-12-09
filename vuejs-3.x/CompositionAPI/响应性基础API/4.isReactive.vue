检查对象是否是 reactive 创建的响应式 proxy。
<script>
import { reactive, readonly, isReactive, ref } from 'vue';
export default {
    setup() {
        const reactive_data = reactive({
            number: 1,
            string: "",
            object: {}
        })

        const readonly_data = readonly(reactive_data);

        const readonly_data_object = readonly({
            number: 1,
            string: "",
            object: {}
        })

        const ref_data = ref(0)

        console.log('isReactive -- reactive_data', isReactive(reactive_data)) // true
        console.log('isReactive -- readonly_data', isReactive(readonly_data)) // true
        console.log('isReactive -- readonly_data_object', isReactive(readonly_data_object)) // false
        console.log('isReactive -- ref_data', isReactive(ref_data)) // false
    }
}
</script>
