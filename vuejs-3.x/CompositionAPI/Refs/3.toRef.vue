可以用来为源响应式对象上的某个 property 新创建一个 ref。然后，ref 可以被传递，它会保持对其源 property 的响应式连接。

<script>
import { reactive, toRef } from "vue";
export default {
    setup() {
        const data_reactive = reactive({
            number: 1
        })

        const toRef_number = toRef(data_reactive, 'number');

        console.log('data_reactive', data_reactive);
        console.log('toRef_number', toRef_number);

        const change_reactive = () => {
            data_reactive.number++; // 被改变
        }

        const change_toRef = () => {
            toRef_number.value++; // 被改变
        }

        return {
            data_reactive,
            toRef_number,
            change_reactive,
            change_toRef
        }

        // 对响应式对象  reactive 进行单个属性的响应式连接 ref 
    }
}
</script>