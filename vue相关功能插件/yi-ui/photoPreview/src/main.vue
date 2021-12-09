<template>
    <Dialog v-on="$listeners" v-bind="$attrs" :fullscreen="fullscreen" :visible="dialogVisible" @close="close">
        <div class="photo-main" ref="photoMain" @mousewheel="mousewheel($event)">
            <div v-if="imgData">
                <img ref="imgPreview" :src="imgData[currentIndex]" :style="style" alt="">
            </div>
        </div>
        <div slot="footer" class="btn">
            <button type="button" class="yi-button yi-button-text" @click.stop="bestWH()">
                <i class="yi-icon-quanpingmu"></i>
            </button>
            <button type="button" class="yi-button yi-button-text" @click.stop="fullScreen()">
                <i class="yi-icon--zuidahua"></i>
            </button>
            <button type="button" class="yi-button yi-button-text" @click.stop="enlargeScale()">
                <i class="yi-icon-enlarge"></i>
            </button>
            <button type="button" class="yi-button yi-button-text" @click.stop="narrowScale()">
                <i class="yi-icon-iconset0159"></i>
            </button>
            <button type="button" class="yi-button yi-button-text" @click.stop="leftSwitch()">
                <i class="yi-icon-icon-test"></i>
            </button>
            <button type="button" class="yi-button yi-button-text" @click.stop="rightSwitch()">
                <i class="yi-icon-icon-test1"></i>
            </button>
            <button type="button" class="yi-button yi-button-text" @click.stop="leftRotate()">
                <i class="yi-icon-zuoxuanzhuan"></i>
            </button>
            <button type="button" class="yi-button yi-button-text" @click.stop="rightRotate()">
                <i class="yi-icon-youxuanzhuan"></i>
            </button>
        </div>
    </Dialog>
</template>

<script>
import Dialog from "./component/component";
export default {
    name: "YiPhotoPreview",
    components: {
        Dialog
    },
    data () {
        return {
            dialogVisible: false,
            imgData: [],
            currentIndex: 0,
            fullscreen: false,
            multiple: 1, // 放大/缩小的倍数
            deg: 0, // 旋转度数
            draging: false, // 是否可以拖拽
            style: { // 图片/拖拽盒子的宽高存储
                width: null,
                height: null,
                top: null,
                left: null,
                transform: 'rotate(0deg)',
                transition: 'all .25s'
            },
            primary: {
                width: 0, // 最佳比例的宽
                height: 0 // 最佳比例的高
            }
        }
    },
    methods: {
        fullScreen(){ // 全屏
            this.fullscreen = !this.fullscreen;
            this.imgPosition();
        },
        imgPosition(){ // 图片定位
            this.$nextTick(() => {
                this.style.left = (Number(this.$refs.photoMain.clientWidth) / 2) - (Number(this.style.width.slice(0, -2)) / 2) + 'px';
                this.style.top = (Number(this.$refs.photoMain.clientHeight) / 2) - (Number(this.style.height.slice(0, -2) / 2)) + 'px';
            })
        },
        bestProportion(){ // 最佳比例
            this.$nextTick(() => {
                let imgWidth = Number(this.$refs.imgPreview.naturalWidth);
                let imgHeight = Number(this.$refs.imgPreview.naturalHeight);
                let boxWdith = Number(this.$refs.photoMain.clientWidth);
                let boxHeight = Number(this.$refs.photoMain.clientHeight);
                // console.log('imgWidth', imgWidth);
                // console.log('imgHeight', imgHeight);
                // console.log('boxWdith', boxWdith);
                // console.log('boxHeight', boxHeight);
                if (imgWidth > boxWdith && imgHeight > boxHeight) { // 1.图宽 > 盒宽 && 图高 > 盒高
                    if ((imgWidth / boxWdith) >= (imgHeight / boxHeight)){ // 根据宽去做等比例缩放
                        this.style.width = boxWdith + 'px';
                        this.style.height = imgHeight / (imgWidth / boxWdith) + 'px';
                    } else { // 根据高去做等比例缩放
                        this.style.width = imgWidth / (imgHeight / boxHeight) + 'px';
                        this.style.height = boxHeight + 'px';
                    }
                } else if (imgWidth > boxWdith && imgHeight <= boxHeight) { // 2.图宽 > 盒宽 && 图高 < 盒高
                    this.style.width = boxWdith + 'px';
                    this.style.height = imgHeight / (imgWidth / boxWdith) + 'px';
                } else if (imgWidth <= boxWdith && imgHeight > boxHeight) { // 3.图宽 < 盒宽 && 图高 > 盒高
                    this.style.width = imgWidth / (imgHeight / boxHeight) + 'px';
                    this.style.height = boxHeight + 'px';
                } else if (imgWidth <= boxWdith && imgHeight <= boxHeight) { // 4.图宽 < 盒宽 && 图高 < 盒高
                    this.style.width = imgWidth + 'px';
                    this.style.height = imgHeight + 'px';
                }
                // 存储最佳比例数值
                this.primary.width = Number(this.style.width.slice(0, -2));
                this.primary.height = Number(this.style.height.slice(0, -2));
            })
        },
        enlargeScale(){ // 放大
            if (this.multiple >= 0.3 && this.multiple < 1) {
                this.multiple += 0.1;
            } else if (this.multiple >= 1  && this.multiple < 2) {
                this.multiple += 0.2
            } else if (this.multiple >= 2 && this.multiple < 5) {
                this.multiple += 0.4;
            } else if (this.multiple >= 5) {
                this.multiple += 0.6;
                if (this.multiple >= 10){
                    this.multiple = 10;
                }
            }
            this.multiple = Number(this.multiple.toPrecision(2));
            this.style.width = this.primary.width * this.multiple + 'px';
            this.style.height = this.primary.height * this.multiple + 'px';
            this.imgPosition();
        },
        narrowScale(){ // 缩小
            if (this.multiple > 5 && this.multiple <= 10) {
                this.multiple -= 0.6;
            } else if (this.multiple > 2 && this.multiple <= 5) {
                this.multiple -= 0.4;
            } else if (this.multiple > 1 && this.multiple <= 2) {
                this.multiple -= 0.2;
            } else if (this.multiple <= 1){
                this.multiple -= 0.1;
                if (this.multiple <= 0.3){
                    this.multiple = 0.3;
                }
            }
            this.multiple = Number(this.multiple.toPrecision(2));
            this.style.width = this.primary.width * this.multiple + 'px';
            this.style.height = this.primary.height * this.multiple + 'px';
            this.imgPosition();
        },
        bestWH(){ // 1:1
            this.style.width = this.primary.width + 'px';
            this.style.height = this.primary.height + 'px';
            this.imgPosition();
        },
        leftRotate(){ // 左旋转
            this.deg += -90;
            this.style.transform = `rotate(${this.deg}deg)`;
        },
        rightRotate(){ // 右旋转
            this.deg += 90;
            this.style.transform = `rotate(${this.deg}deg)`;
        },
        mousewheel($event){ // 滚轮
            if ($event.deltaY === -125){
                this.narrowScale();
            } else if ($event.deltaY === 125) {
                this.enlargeScale();
            }
        },
        leftSwitch(){
            this.$nextTick(() => {
                if (this.currentIndex != 0){
                    this.currentIndex--;
                    setTimeout(() => {
                        this.bestProportion();
                        this.imgPosition();
                        this.style.transform = 'rotate(0deg)';
                        this._bindMove(this.$refs.imgPreview);
                    },100)
                }
            })
        },
        rightSwitch(){
            this.$nextTick(() => {
                const Total = this.imgData.length;
                if (this.currentIndex < Total - 1){
                    this.currentIndex++;
                    setTimeout(() => {
                        this.bestProportion();
                        this.imgPosition();
                        this.style.transform = 'rotate(0deg)';
                        this._bindMove(this.$refs.imgPreview);
                    },100)
                }
            })
        },
        // 拖拽:
        bind(){
            return document.body.addEventListener
        },
        unbind(){
            return document.body.removeEventListener
        },
        _bindMove(el){
            this.draging = false;
            this.startPoint = {};
            this.nowPoint = {};
            const bind = this.bind();
            bind('mousemove', this.mousemove, false);
            bind('mouseup', this.mouseup, false);
            let _this = this;
            el.onmousedown = function(event){
                event = event || window.event;
                event.preventDefault();
                _this.startPoint = {
                    x: event.clientX,
                    y: event.clientY
                }
                _this.nowPoint = {
                    left: el.offsetLeft,
                    top: el.offsetTop
                }
                _this.draging = true;
                _this.style.transition = "initial";
            }
        },
        mousemove(e){
            e.preventDefault();
            if (!this.draging) return;
            let x = e.clientX;
            let y = e.clientY;
            let nl = x - (this.startPoint.x - this.nowPoint.left);
            let nt = y - (this.startPoint.y - this.nowPoint.top);
            this.style.left = nl + 'px';
            this.style.top = nt + 'px';
        },
        mouseup(e){
            e.preventDefault();
            this.draging = false;
            this.style.transition = "all .25s";
        },
        open(data){
            this.imgData = data;
            console.log(this.imgData);
            this.dialogVisible = true;
            this.$nextTick(() => {
                setTimeout(() => {
                    this.bestProportion();
                    this.imgPosition();
                    this._bindMove(this.$refs.imgPreview);
                },100)
            });
        },
        close(){
            this.dialogVisible = false;
            this.imgData = [];
        }
    },
    destroyed(){
        const unbind = this.unbind();
        unbind('mousemove', this.mousemove);
        unbind('mouseup', this.mouseup);
    }
}
</script>

<style scoped>
    @import url('./icon/iconfont.css');

    .yi-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        border-color: transparent;
        color: #409eff;
        background: transparent;
    }
    .yi-button-text {
        border-color: transparent;
        background: transparent;
        padding: 0;
    }
    .photo-main {
        position: relative;
        width: 100%;
        height: 100%;
        line-height: 1;
    }
    .photo-main img {
        position: relative;
        max-width: initial;
        transform-origin: center center;
    }
    /* .tran-enter-active,.tran-leave-active{
        transition: all .3s;
    }
    .tran-enter{
        opacity: 0;
        transform: translateX(10px);
    }
    .tran-leave-to{
        opacity: 0;
        transform: translateX(-10px);
    } */

    .btn i{
        font-size: 22px;
    }
</style>
