<template>
    <div class="yi-copy">
        <slot></slot>
        <button class="yi-copy-button" v-if="hidden" @click.stop="copy()">
            <i :class="icon"></i>
            <slot name="ButtonName">
                <span>复制</span>
            </slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'YiCopy',
    model: {
        prop: 'copyText'
    },
    props: {
        icon: {// icon 展示
            type: String,
            default: ''
        },
        copyText: {// v-model 绑定的值
            type: String,
            default: ''
        },
        hidden: {// 隐藏内部复制按钮
            type: Boolean,
            default: true
        }
    },
    methods: {
        copy(){
            let copyText = "";
            if (this.copyText.length == 0){
                this.$slots.default.forEach(element => {
                    copyText += element.elm.innerText;
                });
            } else {
                copyText = this.copyText;
            }
            this.coreCode(copyText);
        },
        coreCode(content) {
            let oInput = document.createElement('input');
            oInput.value = content;
            document.body.appendChild(oInput);
            oInput.select();
            document.execCommand('Copy');
            oInput.style.display = 'none';
            document.body.removeChild(oInput);
            let data = {
                state: 'success',
                content: content
            }
            this.$emit('copySuccess', data);
        }
    }
}
</script>

<style scoped>
    .yi-copy {
        position: relative;
        padding: 20px 0;
    }
    .yi-copy-button {
        position: absolute;
        right: 0;
        top: 0;
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
    .yi-copy-button:focus, .yi-copy-button:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    .yi-copy-button [class*=el-icon-]+span{
        margin-left: 5px;
    }
</style>
