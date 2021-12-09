创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换
<script>
import { shallowReactive } from 'vue';
export default {
    setup() {
        const data_shallowReactive = shallowReactive({
            Number: 0,
            Object: {
                a: 0
            }
        })

        const change_shallowRef_Number = () => {
            data_shallowReactive.Number++; // 数据进行改变，响应式
        }

        const change_shallowRef_Object = () => {
            data_shallowReactive.Object.a++; // 数值改变，非响应式
        }

    }
}
</script>
