检查对象是 reactive || readonly 创建的代理 或者关系
<script>
import { reactive, readonly, isProxy, ref } from "vue";
export default {
    setup() {
        const reactive_data = reactive({ // reactive 响应式对象
            number: 1,
            string: "",
            object: {}
        })
        const readonly_data = readonly(data);// readonly 代理 reactive响应式对象

        const readonly_data_object = readonly({ // readonly 对象
            number: 1,
            string: "",
            object: {}
        })

        const ref_number = ref(0); // ref 单个响应式属性

        console.log('isProxy - reactive_data', isProxy(reactive_data)); // true
        console.log('isProxy - readonly_data', isProxy(readonly_data)); // true
        console.log('isProxy - readonly_data_object', isProxy(readonly_data_object)); // true
        console.log('isProxy - ref_number', isProxy(ref_number)); // false
    }
}
</script>
