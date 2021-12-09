reactive 函数是生成一个 响应式对象
<template>
    <div>
        <!-- 注意使用 reactive_data里面的响应式变量 需要 使用对象语法 . 属性 -->
        <span>{{ reactive_data.number }}</span>
        <span>{{ reactive_data.string }}</span>
        <span>{{ reactive_data.boolean }}</span>
        <!-- 使用 事件触发器 也需要使用 reactive_data.xxx -->
        <button @click="reactive_data.clickNumber()">点击 Number 改变</button>
        <button @click="reactive_data.clickString()">点击 string 改变</button>
        <button @click="reactive_data.clickBoolean()">点击 Boolean 改变</button>
    </div>
</template>
<script>
import { reactive } from "vue";
export default {
    setup() {
        // 注意！！！  在reactive 里面 this = undefined
        const reactive_data = reactive({
            number: 0,
            string: "Hello World",
            boolean: false,
            clickNumber: () => { // 使用 箭头函数
                reactive_data.number++
            },
            clickString() { // 使用对象方式
                console.log(reactive_data); // 整个 reactive_data 对象，可以访问自己本身函数（递归）
                reactive_data.string = `${reactive_data.string}- 123456`
            },
            clickBoolean() {
                reactive_data.boolean = true;
            }
        })
    }
}
</script>

// 实践：原对象 与 代理对象 修改值

<script>
import { reactive } from "vue";
export default {
    setup() {
        const object = {
            number: 1
        }

        const reactive_data = reactive(object);

        const modify_object = () => {
            object.number++;
        }

        const modify_reactive = () => {
            reactive.number++;
        }

        // 执行 modify_object => modify_reactive
        // 控制台：
        // object { number: 2 }
        // Proxy reactive_data { number: 3 }

        // 注意：代理数据每次修改时，是根据原数据改变而改变

        // 执行 modify_reactive => modify_object
        // 控制台：
        // Proxy reactive_data { number: 2 }
        // object { number: 3 }

        // 注意：代理数据每次修改时，原数据也会跟随代理数据改变而改变

    }
}
</script>
