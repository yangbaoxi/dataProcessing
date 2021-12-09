检查对象是否是由 readonly 创建的只读代理。
<script>
import { readonly, isReadonly } from "vue";
export default {
    setup() {
        let object = {
            Number: 1
        }
        let readonly_data = readonly(object);

        console.log(isReadonly(readonly_data)) // true
    }
}
</script>
