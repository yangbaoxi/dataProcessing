检查值是否为一个 ref 对象。
<script>
import { reactive, ref, toRefs, toRef, isRef } from 'vue';
export default {
    setup() {
        const data_reactive = reactive({
            number: 1
        })

        const data_ref = ref([]);

        const { toRefs_number } = toRefs(data_reactive);

        const toRef_number = toRef(data_reactive, 'number');

        console.log('data_ref', isRef(data_ref)) // true
        console.log('toRefs_number', isRef(toRefs_number)) // false
        console.log('toRef_number', isRef(toRef_number)) // true
        console.log('data_reactive', isRef(data_reactive)) // false

        // 注意 reactive 对象属于响应式对象，所以为false
        // ref 本身就为 ref 对象 true
        // toRefs 将响应式对象转换为普通对象 false
        // toRef 将响应式对象的property 新创建一个 ref 所以为 true
    }
}
</script>