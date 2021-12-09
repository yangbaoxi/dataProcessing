<template>
    <div class="yi-print">
        <slot></slot>
        <button class="yi-print-button" v-if="hidden" @click.stop="print()">
            <i :class="icon"></i>
            <slot name="ButtonName">
                <span>打印</span>
            </slot>
        </button>
    </div>
</template>

<script>
import Print from './print.js';
export default {
    name: 'YiPrint',
    props: {
        title: {// 打印的标题
            type: String,
            default: ''
        },
        printHTML: {// 打印的HTML
            type: String,
            default: ''
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
    data () {
        return {
            printing: null
        }
    },
    methods: {
        print(){
            if (this.printHTML.length == 0){
                this.printing = new Print(this.$slots);
            } else {
                this.printing = new Print(this.printHTML);
            }
            this.printing.print(this.title);
        }
    }
}
</script>

<style scoped>
    .yi-print {
        position: relative;
    }
    .yi-print-button {
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
    .yi-print-button:focus, .yi-print-button:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    .yi-print-button [class*=el-icon-]+span{
        margin-left: 5px;
    }
</style>