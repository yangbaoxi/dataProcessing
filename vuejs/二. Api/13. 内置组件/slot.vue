## slot 插槽

详情：
    <slot> 元素作为组件模板之中的内容分发插槽。<slot> 元素自身将被替换。

Props: 
    name - String 用于命名插槽。

示例：

<!-- 子组件 -->
<template>
    <div>
        <h1>插槽</h1>
        <!-- 匿名插槽 -->
        <slot></slot>
        <!-- 具名插槽 -->
        <slot name="content"></slot>
    </div>
</template>

<!-- 父组件 -->
<template>
    <div>
        <children-a>
            <h2>我是插槽部门数据！！！</h2>
            <p slot="content"></p>  
        </children-a>    
    </div> 
</template>

// 作用域插槽 && 带数据的插槽

<!-- 子组件 -->
<template>
    <div>
        <children-a>
            <!-- 匿名插槽传参 -->
            <slot :anonymous="anonymous"></slot>

            <!-- 具名插槽传参 -->
            <slot name="main" :data="data"></slot>
        </children-a>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            anonymous: [
                {name: '没有梦想'},
                {name: '何必留下'}
            ],
            data: { a:1, b:2, c:3 }
        }
    }
}
</script>

<!-- 父组件 -->

<template>
    <div>
        <children-a>
            <template slot-scope="scope">
                匿名插槽传递参数: {{ scope }} 
                <!-- {
                    anonymous: [
                        {name: '没有梦想'},
                        {name: '何必留下'}
                    ]
                } -->
            </template>
            <template slot="main" slot-scope="scope">
                具名插槽传递参数: {{ scope }}
                <!-- {
                    data: { a:1, b:2, c:3 }
                } -->
            </template>
        </children-a>
    </div>
</template>

*2019/1/9 新增 获取子组件内部 <slot></slot> 所有 Dom 元素 this.$slots (获取非具名插槽)*

*2019/3/6 vue 2.6x 具名插槽更新*

// 具名插槽

<!-- 子组件 -->
<template>
    <div>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </div>    
</template>

<!-- 父组件 -->
<template>
    <div>
        <children-a>
            <template v-slot:header>
                新增语法 v-slot:slot[Name]
            </template>
            <template v-slot:body>
                main 主体内容
            </template>
            <template v-slot:footer>
                其他内容
            </template>
        </children-a>
    </div>
</template>

// 具名插槽 end

// 作用域插槽

<!-- 子组件 -->
<template>
    <div>
        <!-- 
            1: v-bind:userInfo[name]="userInfo";
            2: :userInfo[name]="userInfo";
         -->
        <slot v-bind:userInfo='userInfo'></slot>

        <slot name="header" :other="other"></slot>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userInfo: {
                name: "杨宝",
                age: 18
            },
            other: {
                main: "其他主题内容"
            }
        }
    }
}
</script>

<!-- 父组件 -->
<template>
    <children-a>
        <!-- 
            v-slot:default='scope[name]' default默认 => 匿名插槽
            v-slot:header="header" => 具名插槽
            v-slot:header="{ header }" => 解构插槽
            v-slot:[dynamicSlotName] => 动态插槽名
         -->
        <template v-slot:default="userInfo">
            {{ userInfo }}
        </template>

        <template v-slot:other="other"> 
            {{ other }}
        </template>

        <template v-slot:other="{ other }"> 
            {{ other }}
        </template>

        <!-- 
            缩写：
            v-slot:default="scope[name]" => #default="scope[name]"
            v-slot:header="header" => #header="{ header }"
         -->
    </children-a>
</template>
