<template>
    <button class="yi-download-button" v-if="hidden" @click.stop="pathDownload()">
        <i :class="icon"></i>
        <slot name="ButtonName">
            <span>下载</span>
        </slot>
    </button>
</template>

<script>
export default {
    name: 'YiDownload',
    props: {
        src: {
            type: String,
            default: ""
        },
        hidden: {// 隐藏内部打印按钮
            type: Boolean,
            default: true
        },
        icon: {// icon 展示
            type: String,
            default: ''
        }
    },
    methods: {
        // a 标签路径下载
        pathDownload(){
            if (this.src.length == 0){
                console.error('src is null 路径不能为空');
            } else {
                let a = document.createElement('a');
                a.style.display = 'none';
                a.href  = this.src;
                a.click();
                this.$emit('downloadSuccess');
            }
        },
        // 流媒体下载
        streamDownload(stream, fileName){
            if (stream && stream.byteLength != 0){
                if (window.navigator.msSaveOrOpenBlob){
                    navigator.msSaveOrOpenBlob(new Blob([stream]), `${fileName}`);
                } else {
                    let blob = new Blob([stream]);
                    let a = document.createElement('a');
                    a.href = window.URL.createObjectURL(blob);
                    a.download = `${fileName}`;
                    a.click();
                }
                this.$emit('downloadSuccess');
            } else {
                this.$emit('downloadError');
            }
        }
    }
}
</script>

<style>
    .yi-download-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        border-color: #dcdfe6;
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
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .yi-download-button:focus, .yi-download-button:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    .yi-download-button [class*=el-icon-]+span{
        margin-left: 5px;
    }
</style>
