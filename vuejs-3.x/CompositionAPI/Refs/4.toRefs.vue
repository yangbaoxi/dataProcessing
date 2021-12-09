将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref
<script>
import { reactive, toRefs } from "vue";
export default {
    setup() {
        const data_reactive = reactive({
            number: 1,
            string: "hello wold",
            arr: [1, 2, 3, 4]
        })

        console.log(toRefs(data_reactive));

        const { number } = toRefs(data_reactive);

        const change_reactive = () => {
            data_reactive.number++; // 数据改变
        }
        const change_number = () => {
            number.value++; // 数据改变
        }

        return {
            data_reactive,
            number,
            change_reactive,
            change_number
        }

        // 主要应用于 ‘代码片’ 地方使用功能区分，加上代码片段 简化组件代码
    }
}

</script>
