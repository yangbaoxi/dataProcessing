<script>
import { shallowReadonly } from "vue";
export default {
    setup() {

        const data_shallowReadonly = shallowReadonly({
            Number: 0,
            Object: {
                a: 0
            }
        })

        const change_shallowReadonly1 = () => {
            data_shallowReadonly.Number++;
            console.log('data_shallowReadonly', data_shallowReadonly); // et operation on key "Number" failed: target is readonly
        }

        const change_shallowReadonly2 = () => {
            data_shallowReadonly.Object.a++;
            console.log('data_shallowReadonly', data_shallowReadonly.Object);// 数值改变
        }
    }
}
</script>
