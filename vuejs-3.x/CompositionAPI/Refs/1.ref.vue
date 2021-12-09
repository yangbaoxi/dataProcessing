接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property .value

<script>
import { ref } from "vue";
export default {
    setup() {
        // String
        const string = ref(""); // 定义String类型
        // Number
        const number = ref(0); // 定义Number 类型
        // Array
        const array = ref([]); // 定义Array 类型
        // Object
        const object = ref({}); // 定义Object 类型
        // Boolean
        const boolean = ref(false); // 定义Boolean 类型
        // Null
        const Null = ref(null); // 定义 null 类型
        
        // undefined 暂无演示

        // 使用 ref 定义的数据类型，可以在template 中使用，需要在 setup 函数中 return 出去

        return {
            string,
            number,
            array,
            object,
            boolean,
            Null
        }

        // 如果要进行对 ref 定义的变量进行修改，可使用 ref(T).value 形式赋值。
        // 注意 必须要使用 .value 形式赋值。
    }
}
</script>