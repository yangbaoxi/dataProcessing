## model 组件之间的双向数据绑定

详情：
    组件之间实现双向数据绑定，允许自定义组件使用 v-model 定制 prop 和 event。

示例：

1. 首先在说示例之前，在项目中会遇到一个'bug'问题 

问题原因: (引入类型可以在子组件修改,基本类型不可修改,数组需要使用$set修改);

错误代码:

// 父组件
<template>
    <div>
        <children-a :message='message'></children-a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            message: '传递子组件一个 String 类型变量'
        }
    }
}
</script>

// 子组件
<template>
    <div>
        <!-- 父组件的数据 -->
        {{ message }}

        <button @click="modify()">子组件修改父组件传递的数据</button>
    </div>
</template>

<script>
export default {
    props: {
        message: String
    },
    methods: {
        modify(){
            this.message = "我修改父组件数据";
            // 错误信息
            // [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. 
            // Instead, use a data or computed property based on the prop's value. Prop being mutated: "message"
            // (翻译：避免直接对prop进行突变，因为每当父组件重新加载时，都会覆盖该值。相反，使用基于prop值的数据或计算属性。Prop变异：'message')
        }
    }
}
</script>

// ==============================================================
// 实现父子组件双向数据绑定方法一: (可使用度： ★★★)

// 示例：

// 父组件
<template>
    <div>
        父组件: {{ number }}
        <children-a :number="number" @modify="modify"></children-a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            number: 0
        }
    },
    methods: {
        modify(val){
            this.number = val;
        }
    }
}
</script>

// 子组件
<template>
    <div>
        子组件: {{ number }}
        <button @click="modify()">子组件修改父组件传递的数据</button>
    </div>
</template>

<script>
export default {
    props: {
        number: Number
    },
    methods: {
        modify(){
            this.$emit('modify', 5);
        }
    }
}
</script>

// 缺陷：程序过于复杂，可读性略差。

// ==============================================================
// 实现父子组件双向数据绑定方法二: (可使用度： ★★★★★)

// 示例：
// 父组件
<template>
    <div>
        父组件: {{ number }}
        <children-a v-model="number"></children-a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            number: 0
        }
    }
}
</script>

// 子组件
<template>
    <div>
        子组件: {{ number }}
        <button @click="modify()">子组件修改父组件传递的数据</button>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'number',
        event: 'change' // event: 监听 $emit('change') , 将 value 传递给 v-model 绑定的值。
    },
    props: {
        number: Number
    },
    methods: {
        modify(){
            this.$emit('change', 5);
            // 注意：父组件可以不用写 $on 监听子组件传递的数据。
            // 如果父组件写 @change="change"  可以当作'update(更新数据)'结束后的回调函数
        }
    }
}
</script>

// ==============================================================
// 实现父子组件双向数据绑定方法三: (可使用度： ★★★★)

// 扩展知识: 使用 v-bind中的 修饰符 .sync
// 注意： 注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync="doc.title + '!'" 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。


// 示例

// 父组件
<template>
    <div>
        <children-a :Title.sync="Title" v-bind.sync='object'></children-a>

        <!-- 
            v-bind.sync='object'
            object 对象中的每一个属性 (如 a) 都作为一个独立的 prop 传进去，然后各自添加用于更新的 v-on 监听器。
        -->
    </div>
</template>

<script>
export default {
    components: {
        childrenA
    },
    data () {
        return {
            Title: '父组件的Title',
            // 使用 sync 绑定 Object
            object: {
                a: 1,
                b: 2,
                c: 3
            }
        }
    }
}
</script>

// 子组件
<template>
    <div>
        子组件: {{ Title }}
        <button @click="modify()">修改Title</button>
    </div>
</template>

<script>
export default {
    props: {
        Title: String,
        a: Number,
        b: Number,
        c: Number
    },
    methods: {
        modify(){
            this.$emit('update:Title', '修改父组件Title属性');// 父组件会自动监听 $emit 触发 $on 事件

            // this.$emit('update:a',11);
            // this.$emit('update:b',22);
            // this.$emit('update:c',33);
        }
    }
}
</script>

