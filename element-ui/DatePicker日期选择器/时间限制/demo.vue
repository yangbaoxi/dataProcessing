<template>
    <el-date-picker v-model="date"
        type="date"
        placeholder="请选择时间"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions"
        @change="dateHandle"></el-date-picker>
</template>

<script>
export default {
    data () {
        return {
            date: "",
            pickerOptions: { // 时间限制对象
                disabledDate(time){
                    // 根据时间戳来判断时间限制
                    let date = new Date('2018-01-01').getTime();
                    // time.getTime() // time 就是当前时间（new Date()） 
                    // 8.64e7 => 一天的时间戳
                    // 不可选今天以后的  => time.getTime() > Date.now()
                    // 不可选以前的时间 => time.getTime() < date - 8.64e7;  date 为不可选最小时间
                    return time.getTime() > Date.now() || time.getTime() < date - 8.64e7;
                }
            }
        }
    }
}
</script>
