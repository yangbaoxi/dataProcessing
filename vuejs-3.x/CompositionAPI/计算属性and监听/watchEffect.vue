watchEffect: 监听（侦听）副作用
副作用解释：
    一个函数运行后产生了可以影响其外部或可以看到的效果，就叫副作用
    比如console.log，document. Body. Append，alert再或者是showModel（在页面中展示一个弹层），或者window.open打开一个新窗口。
    哪些函数没有副作用呢，只用来计算结果的函数，比如Math.max，JSON.parse，它们的运行除了返回结果外不会有其它效果，这就叫不产生副作用。
    基本上可以简化的理解为副作用就是执行某种操作，无副作用就是执行某种计算。
    这里watchEffect的意思就是在观察（watch）到变化后执行一些操作（effect）。
<script>
import { ref, watchEffect, onBeforeUpdate, onUpdated } from 'vue';
export default {
    setup() {
        // 1. watchEffect 使用
        // 注意：页面加载后，会首次执行 watchEffect() 每当侦听内的值改变后，watchEffect() 会再次执行
        const ref_number = ref(0);

        watchEffect(() => {
            console.log(ref_number.value);
        })

        setTimeout(() => {
            ref_number.value++;
        }, 1000);

        // 控制台打印结果： 组件加载后执行 => 0  1秒后执行 => 1
        // ========================================================
        // 2. 停止侦听 watchEffect 
        // 注意：停止侦听后， ref_number 在改变 将不会再触发watchEffect()
        const watchStop = watchEffect(() => {
            console.log(ref_number.value);
        })

        setTimeout(() => { // 执行改变 ref_number
            ref_number.value++;
        }, 1000);

        setTimeout(() => { // 执行 停止watchEffect
            console.log('停止侦听')
            watchStop();
        }, 2000);

        setTimeout(() => { // 执行改变 ref_number
            ref_number.value++;
        }, 3000);

        // 控制台打印结果： 组件加载后执行 => 0，1秒后执行 => 1， 2秒后执行 => 停止侦听;
        // ========================================================
        // 3. 清除副作用
        // 注意 清除副作用 官方主要是用于 借口调用，及借口被停止（axios）后续补充使用其他使用场景

        function getData () { // 模仿Api接口函数请求
            return new Promise((resolve, reject) => {
                console.log('执行请求');
                let time = Math.random() * 10000;
                setTimeout(() => {
                    resolve(Math.random() * 10000);
                }, time)
            })
        }

        watchEffect(async (onInvalidate) => {
            console.log(ref_number); // 这里写 ref_number 是为了将 ref_number 做为监听对象
            let data = await getData();
            console.log('副作用处理执行');
            onInvalidate(() => {
                console.log('清除副作用执行');
            })
        })

        // （1.首次加载 watchEffect 清除副作用 onInvalidate 函数不会执行
        // （2.监听数据变化后每次执行 watchEffect 函数 onInvalidate 都会比副作用先执行
        // （3.侦听器销毁或者组件销毁时，onInvalidate 会在销毁前执行一次
        // 控制台打印结果： 首次 watchEffect 执行 '副作用处理执行'; 数据改变后执行： 清除副作用执行 => 副作用处理执行
        // ========================================================        
        // 4. 清除副作用 与 update 的执行顺序
        // 注意：这里使用 俩个生命周期 onBeforeUpdate、onUpdated

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate');
        })
        onUpdated(() => {
            console.log('onUpdated');
        })

        watchEffect(() => {
            console.log(ref_number);
        }, {
            flush: "pre"  // 默认 pre 选项 post、sync（同步）
        })

        // （1. pre => 控制台执行 console.log(ref_number); => onBeforeUpdate => onUpdated
        // （2. post => 控制台执行 onBeforeUpdate => console.log(ref_number); => onUpdated
        // （3. sync 暂无找到使用场景
        // ========================================================      
        // 5. 侦听器调试
        
    }
}
</script>
