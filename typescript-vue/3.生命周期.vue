<script lang="ts">
import { Vue } from './vue-property-decorator'
export default class Demo extends Vue {
    // TS - 生命周期
    beforeCreate () {
        alert('vue实例初始化后');
    };
    created () {
        alert('在实例创建完成后触发');
    };
    beforeMount () {   
        alert('在挂载开始之前被触发');
    };
    mounted () {   
        alert('在挂载开始之后被触发');    
    };
    beforeUpdate () {
        alert('数据更新时触发');
    };
    updated () {
        alert('数据更新后触发');
    };
    beforeDestroy () { 
        alert('实例销毁之前触发');
    };
    destroyed () {    
        alert('vue 实例销毁后触发');
    };
}
</script>
