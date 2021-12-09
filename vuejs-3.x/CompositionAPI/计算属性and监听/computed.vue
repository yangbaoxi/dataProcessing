<script>
import { ref, computed } from "vue";
export default {
    setup() {
        // 1.使用 computed 传入方法 返回一个不可变的 ref 对象

        const ref_number = ref(0);

        const c_ref_number = computed(() => {
            return ref_number.value + 1; // 默认get方法 注意使用return
        })

        const change_ref_number = () => {
            ref_number.value++;
        }

        // 2.使用 computed 自定义 get、set 方法，可创建一个 可修改的 ref 对象

        const c_ref_number_getSet = ({
            get: () => {
                return ref_number.value + 1; // 默认get方法 注意使用return
            },
            set: (val) => {
                ref_number.value = val; // 注意这里不需要return 也必须为赋值
            }
        })

        const change_c_ref_number_getSet = () => {
            c_ref_number_getSet.value = 2; // 注意这必须是赋值 否则不生效
        }

        // 3.调试 Computed v:3.2+ (版本 3.2 增加新api)
        
    }
}
</script>
