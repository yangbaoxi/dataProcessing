<template>
    <canvas class="canvas" :id="canvasId"></canvas>
</template>

<script>
import Snowflak from "./Snowflak.js"
export default {
    name: 'YiSnowflak',
    props: {
        canvasId: {// 用于标识 canvas元素 id
            type: String,
            default: 'snowflak'
        },
        amount: {// 雪花的数量不能超过500
            type: Number,
            default: 200,
            validator: (value) => {
                return value <= 500;
            }
        },
        color: {// 雪花的颜色 16进制
            type: String,
            default: '#ffffff',
            validator: (value) => {
                let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
                return reg.test(value);
            }
        },
        position: {// 画布定位
            type: String,
            default: 'parent',
            validator: (value) => {
                return ['parent', 'body'].indexOf(value) !== -1;
            }
        },
        mode: {// 手动、非手动执行初始化函数
            type: Boolean,
            default: false
        },
        imgSrc: {// 可以插入图片
            type: String,
            default: ""
        }
    },
    data () {
        return {
            ctx: null,// 画布
            snowflakObject: null,// 画布封装对象
            particleArr: [],// 雪花类存储对象
            canvasWidth: null,// 画布宽
            canvasHeight: null,// 画布高
            timer: null// 定时器
        }
    },
    methods: {
        snowflakInit(){
            let snowflak = document.getElementById(this.canvasId);
            // 画布定位
            if (this.position == 'parent'){
                this.canvasWidth = snowflak.parentNode.offsetWidth;
                this.canvasHeight = snowflak.parentNode.offsetHeight;
            } else if (this.position == 'body') {
                this.canvasWidth = document.body.offsetWidth;
                this.canvasHeight = document.body.offsetHeight;
            }
            // end
            this.ctx = snowflak.getContext('2d');
            snowflak.width = this.canvasWidth;
            snowflak.height = this.canvasHeight;

            this.snowflakObject = new Snowflak(this.ctx, this.amount, this.color, this.canvasWidth, this.canvasHeight, this.imgSrc);

            for (let i = 0; i < this.amount; i++){
                this.particleArr.push(this.snowflakObject.draw(
                    Math.random() * this.canvasWidth,
                    Math.random() * this.canvasHeight,
                    this.snowflakObject.random(1, 5),
                    this.snowflakObject.random(-0.35, 0.35),
                    this.snowflakObject.random(0.75, 1.5)
                ));
            }
            this.animate();
        },
        // 定时器
        animate(){
            this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);// 刷新画布
            this.snowflakObject.moving(this.particleArr);
            this.timer = requestAnimationFrame(this.animate);// es6动画定时器
        },
        // 手动触发雪花组件
        modeClick(){
            if (this.mode){
                this.snowflakInit();
            } else {
                console.error("this.mode is 'false'");
            }
        },
        // 重新绘画
        refreshDrawing(){
            this.ctx.clearRect(0,0, this.canvasWidth, this.canvasHeight);
            cancelAnimationFrame(this.timer);
            setTimeout(() => {
                this.snowflakInit();
            }, 0);
        }
    },
    mounted(){
        if (!this.mode){
            this.snowflakInit();
        }
    }
}
</script>

<style scoped>
    .canvas {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }
</style>
