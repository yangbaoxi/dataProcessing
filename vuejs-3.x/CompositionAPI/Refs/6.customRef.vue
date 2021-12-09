建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。它需要一个工厂函数，该函数接收 track 和 trigger 函数作为参数，并且应该返回一个带有 get 和 set 的对象。
<template>
    <div>
        <input type="text" v-model="input_text">
        <h1>当前值： {{ input_text }}</h1>
    </div>
</template>
<script>
import { customRef } from "vue";
export default {
    setup() {
        // 使用场景1: 定义全局input 的 v-model 响应式函数，全局检测输入数值
        // 解释 value 参数： 参数为数据类型，因为input中绑定的绝大部门都是 string 类型
        // 解释 track、trigger 方法 ！！！ （重点）
        // ！！！ track(): 通知 vue 追踪数据变化，如果不在get方法里面执行 track 方法，变量 input_text 不会进行数据修改或改变（这是针对变量 js 中）。
        // ！！！ trigger(): 通知Vue去重新解析模板 如果不在set方法里面执行 track方法会 改变变量input_text 的值，但是template 里面的模版值不会改变。（这是指 模版语法template中）
        function customRef_model (value, delay = 2000) {
            let timeout;
            return customRef((track, trigger) => {
                return {
                    get() {
                        track(); // 通知vue追踪数据的变化
                        console.log('value', value);
                        return value;
                    },
                    set(newValue) {
                        console.log('newValue', newValue)
                        clearTimeout(timeout);
                        value = newValue;
                        timeout = setTimeout(() => {
                            trigger(); // 通知Vue去重新解析模板
                        }, delay)
                    }
                }
            })
        }
        const input_text = customRef_model("");

        return {
            input_text
        }
    }
}
</script>
