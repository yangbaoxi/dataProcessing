<script>
import { shallowRef, triggerRef } from "vue";
export default {
    setup() {
        const data_shallowRef = shallowRef({
            Number: 0
        })

        // 如果直接修改进行 data_shallowRef.value.Number++; 数值会改变，但是不是响应式数据
        // 讲数据改为响应式数据：

        const change_shallowRef = () => {
            data_shallowRef.value.Number++;
            triggerRef(data_shallowRef); // 通知Vue 进行数据改变
        }
    }
}
</script>
