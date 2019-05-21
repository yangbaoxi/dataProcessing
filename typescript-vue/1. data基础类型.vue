<script lang="ts">
import { Vue } from "./vue-property-decorator";
export default class Demo extends Vue {
    // 布尔值
    boolean: Boolean = true;
    // 数字
    number: Number = 10;
    // 字符串
    message: String = "Hello World";
    // 数组
    // 第一种展示形式：
    array1: Array<Object> = [{}];
    array2: Array<Number> = [1];
    array3: Array<String> = ["11"];
    array4: Array<Boolean> = [true];
    array5: Array<Function> = [function(){}];
    array6: Array<any> = [{}, 1, true,function(){}];
    // 第二种展示形式：
    arrayTwo1: Object[] = [{}];
    arrayTwo2: Number[] = [1];
    arrayTwo3: String[] = ['11'];
    arrayTwo4: Boolean[] = [true];
    arrayTwo5: Function[] = [function(){}];
    arrayTwo6: any[] = [{}, 1, true, function(){}];
    // 对象
    object: Object = {};
    // 元组 Tuple (元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。)
    a: [String, Object] = ['String', {}];  // ['String', {}]
    // Null / Undefined
    n: null = null; // null 类型 n 小写
    u: undefined = undefined // undefined 类型 u 小写
}
</script>
