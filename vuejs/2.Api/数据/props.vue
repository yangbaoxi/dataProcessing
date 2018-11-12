## props

详情：
    props 可以是数组或对象，用于接收来自父组件的数据。props 可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义校验和设置默认值。

示例：
<script>
    export default {
        props: ['size', 'myMessage']
    }
</script>

对象语法，提供效验

<script>
    export default {
        props: {
            // 基础的类型检查 (`null` 匹配任何类型)
            propA: Number,
            // 多个可能的类型
            propB: [String, Number],
            // 必填的字符串
            propC: {
                type: String,
                required: true
            },
            // 带有默认值的数字
            propD: {
                type: Number,
                default: 100
            },
            // 带有默认值的对象
            propE: {
                type: Object,
                // 对象或数组默认值必须从一个工厂函数获取
                default: function () {
                    return { message: 'hello' }
                }
            },
            // 自定义验证函数
            propF: {
                validator: function (value) {
                    // 这个值必须匹配下列字符串中的一个
                    return ['success', 'warning', 'danger'].indexOf(value) !== -1
                }
            }
        }
    }
</script>

prop 类型检查：

    # String
    # Number
    # Boolean
    # Array
    # Object
    # Date
    # Function
    # Symbol


注意 特效继承

<template>
    <!-- my-input 是 自定义 一个组件 -->
    <my-input type="date"></my-input>
</template>

// my-input 组件

<template>
    <input type="text" />   
</template>

! 传入的 type="date" 会替换掉 type="text" 

禁用特性继承

<script>
    export default {
        inheritAttrs: false         // 禁用特性继承
    }
</script>

