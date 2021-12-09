创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
<script>
import { shallowRef } from "vue";
export default {
    setup() {
        const data_shallowRef_1 = shallowRef({ // Object 类型
            Number: 0,
            object: {
                a: "A",
                b: "B"
            }
        })

        console.log('data_shallowRef_1', data_shallowRef_1.value); // { Number: 0, object: {a: 'A', b: 'B'} }

        const data_shallowRef_2 = shallowRef(0); // Number 类型

        console.log('data_shallowRef_2', data_shallowRef_2.value); // 0

        const change_shallowRef = () => {

            data_shallowRef_1.value.Number++; // 不可执行，不可以修改深层数据

            data_shallowRef_2.value++; // 可执行 响应式实时更新
        }

        // 注意 使用场景：
        // 场景1: 适用于仅对数值的 .value 监听变化， 数值不会变成响应式。 （如果shallowRef 使用 number string 等）value 值是 响应式。
        // 对于浅层监听是响应式，深层监听仅对 值 处理
    }
}
</script>
