<template>
    <div>
        <el-button v-permission="$store.state.user.constBtns.setID">测试1 id:{{ $store.state.user.constBtns.setID }}</el-button>
        <el-button v-permission="$store.state.user.constBtns.editID">测试2 id:{{ $store.state.user.constBtns.editID }}</el-button>
        <el-button v-permission="$store.state.user.constBtns.ceshiID">测试3 id:{{ $store.state.user.constBtns.ceshiID }}</el-button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
