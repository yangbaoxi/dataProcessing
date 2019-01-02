## inheritAttrs 继承

类型: boolean

默认值: true

详情: 
    没有被子组件继承的属性,不会当作属性展示在子组件的根元素上

示例:

// 父组件
<template>
    <div>
        <children-a :Title="Title" :Msg="Msg"></children-a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            Title: '父组件属性Title',
            Msg: '父组件属性Msg'
        }
    }
}
</script>

// 子组件

<template>
    <!-- F12(Elements) => 根元素

        <div Msg='父组件属性Msg'></div>
    -->
    <div> 
        被子组件继承的属性: {{ Title }}; <!-- 父组件属性Title -->
        非子组件继承的属性: {{ $attrs }};<!-- { Msg: '父组件属性Msg' } -->
    </div>
</template>

<script>
export default {
    inheritAttrs: true,// 是否不继承子组件未定义的属性
    props: {
        Title: String
    }
}
</script>

如果 inheritAttrs: false // 开启继承
子组件的根元素 就不会显示 非继承的属性 

// ==============================================================
相关联 api

## $attrs

详情:
    包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
    并且可以通过 v-bind="$attrs" 传入内部组件 创建高级组件;

示例:

// 父组件
<template>
    <div>
        <children-a
            :Title="Title"
            :Target="Target"
            :array="array"></children-a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            Title: '基本类型String',
            Target: {
                a: '引用类型 Object'
            },
            array: ['引用类型Array']
        }
    }
}
</script>

// 子组件

<template>
    <div>
        {{ $attrs }}
        <!--
            {
                Title: '基本类型String',
                Target: {
                    a: '引用类型 Object'
                },
                array: ['引用类型Array']
            }
        -->
        <button @click='modify()'>修改 $attrs 属性</button>
    </div>
</template>

<script>
export default {
    methods: {
        modify(){
            this.$attrs.Title = "修改基本类型";// 未被修改
            this.$attrs.Target.a = "修改引用类型 Object";// 被修改
            this.$attrs.array = ['修改引用类型Array'];// 被修改
        }
    }
}
// 结论:
    // 子组件可以修改未被定义的属性, 注意 '基本类型' 不可被修改, 引用类型可修改
    // 子组件可以修改定义的属性(props) 注意 '基本类型' 不可被修改, 引用类型可修改 , 数组引用类型需要使用 $set 修改
</script>

// ==============================================================
// $attrs => 高级组件: (多级组件继承)

示例:

// 父组件
<template>
    <div>
        <children-a 
            :Title="Title"
            :Target="Target"
            :array="array"></children->
    </div>
</template>

<script>
import childrenA from "./childrenA";
export default {
    components: { childrenA },
    data () {
        return {
            Title: '基本类型String',
            Target: {
                a: '引用类型 Object'
            },
            array: ['引用类型Array']
        }
    }
}
</script>

// 子组件 A

<template>
    <div>
        A 组件未继承属性 {{ $attrs }};

        <children-b v-bind="$attrs"></children-b>
    </div>
</template>

<script>
import childrenB from "./childrenB"
export default {
    components: { childrenB }
}
</script>

// 子组件 B

<template>
    <div>
        多级继承属性 {{ $attrs }}
    </div>
    <!--
        总结: 子组件 B 同样可以修改 $attrs 跟上一个示例总结一致
    -->
</template>

// ==============================================================
相关联 api

## $listeners

详情:
    包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
    它可以通过 v-on="$listeners" 传入内部组件创建更高层次的组件

示例:  $listeners => 高级组件: (多级组件监听)

// 父组件
<template>
    <div>
        <children-a
            @eventOne="eventOne"
            @eventTwo="eventTwo"></children-a>
    </div>
</template>

<script>
import childrenA from "./childrenA";
export default {
    components: { childrenA },
    methods: {
        eventOne(){
            alert('函数一');
        },
        eventTwo(){
            alert('函数二');
        }
    }
}
</script>

// 子组件 A
<template>
    <div>
        <button @click="childrenAClick()">子组件A 通过 $on && $emit 触发 父组件事件</button>
        <hr />
        <children-b v-on="$listeners"></children-b>
    </div>
</template>

<script>
import childrenB from "./childrenB";
export default {
    components: { childrenB },
    methods: {
        childrenAClick(){
            this.$emit('eventOne');
        }
    }
}
</script>

// 子组件 B
<template>
    <div>
        <button @click="childrenBClick()">子组件B 通过 $listeners 触发 父组件事件</button>
    </div>
</template>

<script>
export default {
    methods: {
        childrenBClick(){
            this.$emit('eventTwo')
        }
    }
}
</script>
