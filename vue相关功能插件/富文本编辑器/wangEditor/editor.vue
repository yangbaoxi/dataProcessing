<template>
    <div>    
        <!-- wangEditor 编辑器 -->
        <div ref="editor"></div>
        {{ content }}
    </div>
</template>

<script>
import E from "wangeditor";
export default {
    data(){
        return {
            editor: null, // 获取 编辑器对象
            content: ""
        }
    },
    methods: {
        editorInit(){ // 初始化富文本编辑器
            this.editor = new E(this.$refs.editor);
            this.editor.config.change = (html) => { // 监听变化，同步更新
                this.content = html;
            }
            this.editor.create();
        },
        editorDisabled(disabled){ // 禁用编辑器
            this.editor.$textElem.attr('contenteditable', disabled);// false => 禁用 / true => 非禁用
        },
        editorTxtHTML(content){ // 设置内容
            this.editor.txt.html(content);
        },
        editorAppend(content){ // 追加内容
            this.editor.txt.append(content);
        },
        editorClear(){ // 清空内容
            this.editor.txt.clear();
        },
        editorReadHTML(){ // 读取 html 内容
            let html = this.editor.txt.html();
            return html;
        },
        editorReadText(){ // 读取 文本 内容
            let text = this.editor.txt.text();
            return text;
        },
        editorMenus(menus){ // 菜单配置
            this.editor.config.menus = menus;
            // [
            //     'head',  // 标题
            //     'bold',  // 粗体
            //     'fontSize',  // 字号
            //     'fontName',  // 字体
            //     'italic',  // 斜体
            //     'underline',  // 下划线
            //     'strikeThrough',  // 删除线
            //     'foreColor',  // 文字颜色
            //     'backColor',  // 背景颜色
            //     'link',  // 插入链接
            //     'list',  // 列表
            //     'justify',  // 对齐方式
            //     'quote',  // 引用
            //     'emoticon',  // 表情
            //     'image',  // 插入图片
            //     'table',  // 表格
            //     'video',  // 插入视频
            //     'code',  // 插入代码
            //     'undo',  // 撤销
            //     'redo'  // 重复
            // ]
        },
        editorZIndex(number){ // 配置编辑区域的 z-index 默认 10000
            this.editor.config.zIndex = number;
        },
        editorLang(lang){ // 语种配置
            this.editor.config.lang = lang;
            // {
            //     '设置标题': 'title',
            //     '正文': 'p',
            //     '链接文字': 'link text',
            //     '链接': 'link',
            //     '上传图片': 'upload image',
            //     '上传': 'upload',
            //     '创建': 'init'
            // }
        },
        editorPaste(){ // 编辑器粘贴 
            // 注意，以下配置暂时对 IE 无效。IE 暂时使用系统自带的粘贴功能，没有样式过滤！
            this.editor.config.pasteFilterStyle = false; // 关闭粘贴样式的过滤
            this.editor.config.pasteIgnoreImg = true; // 忽略粘贴内容中的图片
            this.editor.config.pasteTextHandle = (content) => { // 自定义处理粘贴的文本内容
                return content;
            }
        },
        editorImgs(){ // 插入网络图片的回调
            this.editor.config.linkImgCallback = (url) => {
                console.log(url);
            }
        },
        editorLink(){ // 插入链接的校验
            this.editor.config.linkCheck = (text, link) => {
                console.log(text) // 插入的文字
                console.log(link) // 插入的链接
                return true // 返回 true 表示校验成功
                // return '验证失败' // 返回字符串，即校验失败的提示信息
            }
        },
        editorImgsCheck(){ // 插入网络图片的校验
            this.editor.config.linkImgCheck = (src) => {
                console.log(src);
                return true // 返回 true 表示校验成功
                // return '验证失败' // 返回字符串，即校验失败的提示信息
            }
        },
        editorOnfocus(){ // onfocus 函数
            this.editor.config.onfocus = function () {
                console.log("onfocus")
            }
        },
        editorOnblur(){ // onblur 函数
            this.editor.config.onblur = function (html) {
                // html 即编辑器中的内容
                console.log('onblur', html)
            }
        },
        editorColors(colors){ // 配置字体颜色、背景色
            this.editor.config.colors = colors;
            // [
            //     '#000000',
            //     '#eeece0',
            //     '#1c487f',
            //     '#4d80bf',
            //     '#c24f4a',
            //     '#8baa4a',
            //     '#7b5ba1',
            //     '#46acc8',
            //     '#f9963b',
            //     '#ffffff'
            // ]
        },
        editorFontNames(fontNames){ // 配置字体
            this.editor.config.fontNames = fontNames;
            // [
            //     '宋体',
            //     '微软雅黑',
            //     'Arial',
            //     'Tahoma',
            //     'Verdana'
            // ]
        }
    },
    mounted() {
        this.editorInit();
    }
}
</script>
