获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。只读代理是深层的：访问的任何嵌套 property 也是只读的。
<script>
import { reactive, readonly, ref } from "vue";
export default {
    setup() {
        // 1. reactive 方式
        const reactive_data = reactive({
            number: 1,
            string: ""
        })

        const reactive_readonly = readonly(reactive_data);

        const click_change = () => {
            reactive_data.number++;
            console.log('reactive_data.number', reactive_data.number); // 实时改变 1 - 2 - 3 ...
            console.log('reactive_readonly.number', reactive_readonly.number); // 实时改变 1 - 2 - 3 ...
            reactive_readonly.number++; // Set operation on key "number" failed: target is readonly
        }

        // 2. object 方式

        const object = {
            number: 1,
            string: ""
        }

        const object_readonly = readonly(object);

        // object_readonly 仅仅只是只读，但是修改 object.number 可以进行修改。

        // 3. ref 方式
        let number = ref(0); // 注意！！！ 使用 const 定义的 ref 函数 下面进行改变时，报错！！！

        const readonly_ref = readonly(number);

        const click_change_ref = () => {
            number.value++;
            console.log('number', number.value); // 1
            console.log('readonly_ref', readonly_ref); // Proxy { ......., _value: 1 }
            readonly_ref.value++;// Set operation on key "value" failed: target is readonly.
        }

        return {
            reactive_data
        }
    }
}
</script>