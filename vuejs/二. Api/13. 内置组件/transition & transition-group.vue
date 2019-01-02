## transition & transition-group
import componentVue from './component.vue';

Props: 
    # name {String} 用于自动生成 CSS 过渡类名。例如：name: 'fade' 将自动拓展为.fade-enter，.fade-enter-active
    # appear {Boolean} 是否在初始渲染时使用过渡。默认为 false
    # css {Boolean} 是否使用 CSS 过渡类。默认为 true。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子。
    # type {String} 指定过渡事件类型，侦听过渡何时结束。有效值为 "transition" 和 "animation"。
    # mode {String} 控制离开/进入的过渡时间序列。有效的模式有 "out-in" 和 "in-out"
    # enter-class {String}
    # leave-class {String}
    # appear-class {String}
    # enter-to-class {String}
    # leave-to-class {String}
    # appear-to-class {String}
    # enter-active-class {String}
    # leave-active-class {String}
    # appear-active-class {String}

Methods: 
    # before-enter
    # before-leave
    # before-appear
    # enter
    # leave
    # appear
    # after-enter
    # after-leave
    # after-appear
    # enter-cancelled
    # leave-cancelled (v-show only)
    # appear-cancelled

// 单个元素过度动画

<template>
    <div>
        <transition name='fade'>
            <!-- v-if 也可以实现-->
            <p v-show='show'>如果不努力，永远不知道自己有多废物</p>
        </transition>
        <button @click="OneBtn()">点击开始动画</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show:true
        }
    },
    methods: {
        OneBtn(){
            this.show = !this.show 
        } 
    }
}
</script>

<style>
    .fade-enter-active {    /* 进入动画 整个过程 */ 
       transition: all .5s; 
    }
    .fade-enter {    /*进入时 触发的动画*/
        opacity: 0;
        transform: translateX(10px); 
    }
    .fade-leave-active{   /*整个离开动画 整个过程*/
        transition: all .5s;
    }
    .fade-leave-to{    /*离开时 触发的动画*/
        opacity: 0;
        transform: translateX(10px);
    }
</style>

// 元素 + css3中的animation使用

<template>
    <div>
        <transition name='fade'>
        <!-- v-if 也可以实现 -->
            <p v-show='show'>In fact, you don't understand</p>
        </transition>
        <button @click="TwoBtn()">点击开始动画</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            show: true 
        }   
    },
    methods:{
        TwoBtn(){
            this.show = !this.show 
        } 
    }
}
</script>

<style>
    .fadeTwo-enter-active {
        animation:rotateIn 2s;
    }
    .fadeTwo-leave-active{
        animation: lightSpeedOut 1s;
    }
    @keyframes lightSpeedOut{
        from {
            opacity: 1; 
        }
        to {
            transform: translate3d(100%, 0, 0) skewX(30deg);
            opacity: 0; 
        } 
    }
    @keyframes rotateIn {
        from {
            transform-origin: center;
            transform: rotate3d(0, 0, 1, -200deg);
            opacity: 0; 
        }
        to {
            transform-origin: center;
            transform: none;
            opacity: 1; 
        }
    }
</style>

// 元素 + animate.css 动画库

<template>
    <div>
        <!-- v-if 也可以实现 -->
        <transition 
            enter-active-class='animated tada' 
            leave-active-class='animated bounceOutRight'>
            <p v-show='show'>Come on</p>
        </transition>
        <button @click="ThreeBtn()">点击开始动画</button>
    </div>
</template>

<script>
/**
 * cnpm install animate.css --save
 */
import animate from 'animate.css'
export default {
    data () {
        return {
            show: true
        }
    },
    methods: {
        ThreeBtn(){
            this.show = !this.show
        }
    }
}
</script>

// javascript 钩子函数实现 动画 （需要使用Velocity.js）

<template>
    <div>
        <!-- 不支持 v-show -->
        <transition 
            v-on:before-enter='beforeEnter' 
            v-on:enter='enter'
            v-on:leave='leave'
            v-bind:css='false'>
            <p v-if='show'>javascript钩子函数执行动画</p>
        </transition>
        <button @click="FourBtn()">点击开始动画</button>
    </div>
</template>

<script>
/**
 * cnpm install velocity-animate --save-dev
 */
import  Velocity from 'velocity-animate'
export default {
    data(){
        return {
            show: true 
        }
    },
    methods: {
        FourBtn(){
            this.show = !this.show 
        },
        beforeEnter(el){
            el.style.opacity = 0;
            el.style.transformOrigin = 'left';
        },
        enter(el,done){
            Velocity(el, {
                opacity: 1,
                fontSize: '1.4em'
            },{duration: 300});

            Velocity(el, {fontSize: '1em'},{complete: done})
        },
        leave(el,done){
            Velocity(el, {
                translateX: '15px',rotateZ: '50deg'
            },{duration: 600});

            Velocity(el, {rotateZ: '100deg'}, {loop: 2});

            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            },{complete: done})
        }
    }
}
</script>

// 多个元素的过渡

<template>
    <div>
        <transition-group name='list-complete' tag='div'>
            <p v-for='(item, index) in items' :key='index'>{{item}}</p>
        </transition-group>
        <button @click='shuffle()'>排序</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            items:[1,2,3,4,6,7,8,9,10],
            itemslength:11
        }
    },
    methods: {
        shuffle(){
            this.items = _.shuffle(this.items)
        }
    }
}
</script>

<style>
    .list-complete-enter, .list-complete-leave-to{
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }
</style>

// 多个组件的过渡（动态组件）

<template>
    <div>
        <transition name='fade' mode='out-in'>
            <component :is='complete'></component>
        </transition>
        <button @click='Acom()'>A组件</button>
        <button @click='Bcom()'>B组件</button>
    </div>
</template>

<script>
import One from '@/components/One'
import Two from '@/components/Two'
export default {
    components: {
        One,
        Two
    },
    data () {
        return {
           complete: One      
        }
    },
    methods: {
        Acom(){
            this.complete = One;
        },
        Bcom(){
            this.complete = Two;
        }
    }
}
</script>

<style>
    .fade-enter-active {    /* 进入动画 整个过程 */ 
       transition: all .5s; 
    }
    .fade-enter {    /*进入时 触发的动画*/
        opacity: 0;
        transform: translateX(10px); 
    }
    .fade-leave-active{   /*整个离开动画 整个过程*/
        transition: all .5s;
    }
    .fade-leave-to{    /*离开时 触发的动画*/
        opacity: 0;
        transform: translateX(10px);
    }
</style>
