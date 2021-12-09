返回 reactive 或 readonly 代理的原始对象。
<script>
import { reactive, toRaw } from "vue";
export default {
    setup() {
        let object = {
            Number: 1
        }
        let reactive_data = reactive(object);

        console.log(object === toRaw(reactive_data)); // true

    }
}
</script>
