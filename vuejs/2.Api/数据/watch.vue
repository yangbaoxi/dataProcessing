## watch

详情：
    一个对象，键是需要观察的表达式，值是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。

示例：
// 普通监听
<script>
    export default {
        data(){
            return {
                number: 0
            }
        },
        watch: {
            number(newVal, oldVal){
                console.log('new =>', newVal,'old =>', oldVal);
            },
            // 方法名
            number: 'watchNumber'
        },
        methods: {
            watchNumber(newVal, oldVal){
                console.log('watchNumber =>', newVal,'old =>', oldVal);
            }
        }
    }
</script>

深度监听

<script>
    export default {
        data () {
            return {
                object: {
                    number: 0
                }    
            }
        },
        watch: {
            object: {
                handler(val){
                    console.log('深度监听',val)
                },deep: true
            }
        }
    }
</script>

! 注意： 深度监听无法监听 oldVal值 ！！！

监听对象中的属性值 （方案二）

<script>
    export default {
        data () {
            return {
                object: {
                    number
                }
            }
        },
        watch: {
            'object.number': (newVal, oldVal) => {
                console.log('new =>', newVal,'old =>', oldVal);
            }
        }
    }
</script>

! 注意 watch 函数的 this 指向  指向不是 vm实例本身！！
