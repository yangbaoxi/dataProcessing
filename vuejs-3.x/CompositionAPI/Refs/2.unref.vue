如果参数为 ref，则返回内部值，否则返回参数本身。这是 val = isRef(val) ? val.value : val
<template>
    <div>
        可动态改变的值 ref 类型： {{ number }}
        不可动态改变的值 unref 类型： {{ unref_number }}

        <button @click="clickNumber()">点击 Number  ++</button>
    </div>
</template>
<script>
import { ref, unref } from "vue";
export default {
    setup() {
        // 通过 ref函数 定义变量
        const number = ref(0);
        // 通过 unref函数 定义一个变量  val = isRef(val) ? val.value : val
        const unref_number = unref(number);

        const clickNumber = () => {
            number++; // 改变 number

            unref_number++; // TypeError: "unref_number" is read-only
        }

        return {
            number,
            unref_number,
            clickNumber
        }

        // 注意 使用unref 函数返回的变量 只有 读取的权限
    }
}
</script>