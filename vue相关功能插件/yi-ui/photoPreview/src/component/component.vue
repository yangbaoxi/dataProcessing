<template>
    <transition name="yi-dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
        <div class="yi-dialog__wrapper" v-show="visible">
            <div class="yi-dialog" ref="main" :style="style" :class="{'is-fullscreen': fullscreen}">
                <!-- 标题 -->
                <div class="yi-dialog__header" ref="title">
                    <span class="yi-dialog__title">{{ titleName }}</span>
                    <button type="button" class="yi-dialog__headerbtn" @click="afterLeave()">
                        <i class="yi-dialog__close yi-icon-guanbi"></i>
                    </button>
                </div>
                <!-- 内容 -->
                <div class="yi-dialog__body"><slot></slot></div>
                <!-- 功能区 -->
                <div class="yi-dialog__footer" v-if="$slots.footer" ref="footer"><slot name="footer"></slot></div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        titleName: {
            type: String,
            default: ''
        },
        top: {
            type: String,
            default: '10vh'
        },
        fullscreen: Boolean, // 全屏幕
        width: String,// 宽
        height: String,// 高
        appendToBody: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        afterEnter() { // 打开
            this.$emit('open');
        },
        afterLeave() { // 关闭
            this.$emit('close');
        }
    },
    mounted(){
        if (this.visible) {
            if (this.appendToBody){
                document.body.appendChild(this.$el);
            }
        }
    },
    computed: {
        style(){ // 赋值宽、与浏览器的top值
            let style = Object.create({});
            if (!this.fullscreen){
                style.marginTop = this.top;
                if (this.width){
                    style.width = this.width;
                }
                if (this.height){
                    style.height = this.height;
                }
            }
            return style;
        }
    },
    destroyed() {
        if (this.appendToBody && this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
    }
}
</script>

<style scoped>
    .yi-dialog-fade-enter-active{
        -webkit-animation: dialog-fade-in .3s;
        animation: dialog-fade-in .3s;
    }
    .yi-dialog-fade-leave-active{
        -webkit-animation: dialog-fade-out .3s;
        animation: dialog-fade-out .3s;
    }
    @-webkit-keyframes dialog-fade-in {
        0% {
            -webkit-transform: translate3d(0,-20px,0);
            transform: translate3d(0,-20px,0);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }
    @keyframes dialog-fade-in {
        0% {
            -webkit-transform: translate3d(0,-20px,0);
            transform: translate3d(0,-20px,0);
            opacity: 0;
        }
        100% {
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
    }
    @-webkit-keyframes dialog-fade-out {
        0% {
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translate3d(0,-20px,0);
            transform: translate3d(0,-20px,0);
            opacity: 0;
        }
    }
    @keyframes dialog-fade-out {
        0% {
            -webkit-transform: translate3d(0,0,0);
            transform: translate3d(0,0,0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translate3d(0,-20px,0);
            transform: translate3d(0,-20px,0);
            opacity: 0;
        }
    }

    .yi-dialog__wrapper{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
    }
    .yi-dialog {
        position: relative;
        margin: 0 auto;
        border-radius: 2px;
        -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 50%;
        height: 80vh;
        background: #fff;
        overflow: hidden;
    }
    .yi-dialog__header {
        padding: 10px 15px;
    }
    .yi-dialog__title {
        font-size: 16px;
        color: #303133;
        line-height: 20px;
    }
    .yi-dialog__headerbtn {
        position: absolute;
        top: 15px;
        right: 20px;
        padding: 0;
        background: 0 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
        width: auto;
        overflow: visible;
    }
    .yi-dialog__close{
        color: #909399;
    }

    .yi-dialog__body {
        padding: 0px;
        color: #606266;
        font-size: 14px;
        overflow: hidden;
        height: calc(100% - 93px);
        background: #f2f2f2;
    }
    .yi-dialog__footer {
        padding: 15px 15px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
    }

    .is-fullscreen {
        width:100%;
        margin-top:0;
        margin-bottom:0;
        height:100%;
        overflow:auto
    }
</style>
