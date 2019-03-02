<template>
    <div>
        <!-- element-ui 组件 -->
        <el-checkbox-group v-model="checkboxValue" @change="change">
            <el-checkbox v-for="(item,index) in checkboxData" :key="index" :label="item.id">{{ item.realName }}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checkboxData: [ // 循环的数据
                {
                    id: 1,
                    realName: "复选框 A"
                },
                {
                    id: 2,
                    realName: "复选框 B"
                },
                {
                    id: 3,
                    realName: "复选框 C"
                }
            ],
            checkboxValue: [1] // 已选 checkbox
        }
    },
    methods: {
        change(value){ // checkbox 选择值触发事件
            // 单选：
            this.checkboxValue = [];
            if (value[value.length - 1] != null) {
                this.checkboxValue.push(value[value.length - 1]);
            }
        }
    }
}
</script>
