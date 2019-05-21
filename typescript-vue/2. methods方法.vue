<script lang="ts">
import { Vue } from './vue-property-decorator'
export default class Demo extends Vue {
    // 参数类型
    // Number (大写 Number传入参数类型为Number 并不能做数据的改变)
    N1(x: Number){
        console.log(x);
    }
    N2(x: number) {
        x++;
        console.log(x);
    }
    // String / Boolean / null / undefined
    S1(x: String){
        x = 'hello World';
        console.log(x);
    }
    // Array
    A1(x: Array<Object>){
        console.log(x);
    }
    // Object
    O1(x: Object){
        console.log(x);
    }
    // 可选参数
    // ? 实现可选参数的功能
    O2(x: Object, y?: String){
        console.log(x);
        console.log(y);
    }
    // 默认参数
    O3(x: Object, y: String = "Hello World"){
        console.log(x);
        console.log(y);
    }
    // 剩余参数
    A2(x: number, ...y: Array<Number>){
        console.log(x);
        console.log(y);
    }
    // 返回值类型
    // String / Number / Boolean
    D1(): String{
        return "Hello World"
    }
    // Object
    D2(): Object {
        return {}
    }
    // Array => <Number/String/Object/Function/Boolean/any>
    D3 (): Array<Number> {
        return [1];
    }
    // null / undefined
    D4(): null{
        return null;
    }
    // any 任何类型 
    D5(): any {
        return "" // 返回类型
    }
    // 无返回值
    D6(): void {
        console.log('无任何返回值')
    }
}
</script>
