<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path" :to="{ path: item.path }">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: "YiBreadcrumb",
    data () {
        return {
            breadcrumb: []
        }
    },
    mounted() {
        if (this.$route && this.$route.matched) this.breadcrumb = this.$route.matched;
    }
}
</script>
