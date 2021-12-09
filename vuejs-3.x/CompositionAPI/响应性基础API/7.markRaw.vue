标记一个对象，使其永远不会转换为 proxy。返回对象本身。
<script>
import { reactive, markRaw } from "vue";
export default {
    setup() {
        let markRaw_data = markRaw({ // 定义一个非响应式对象 
            number: 1
        })
        console.log('markRaw_data', markRaw_data);

        let object = reactive({ // 定义一个响应式对象，
            number: markRaw_data.number // 响应式属性 number 里面被赋值非响应式对象属性值
        })

        // 改变 非响应式对象

        const change_markRaw = () => { // 页面不实时改变，只有当整个dom元素刷新时，页面会更新最新数值
            markRaw_data.number++;
        }


        const change_reactive = () => { // 响应式数据，实时改变
            object.number++;
        }

        return {
            markRaw_data,
            object,
            change_markRaw,
            change_reactive
        }
    }
}
</script>
