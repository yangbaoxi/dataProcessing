import YiSnowflak from "./snowflake/index.js";// 雪花组件
import YiParticle from "./particle/index.js";// 粒子背景组件
import YiCopy from "./copy/index.js";// 复制组件
import YiPrint from './print/index.js';// 打印组件
import YiDownload from "./download/index.js";// 下载组件
import YiPhotoPreview from "./photoPreview/index.js";// 图片预览

const components = [
    YiSnowflak,
    YiParticle,
    YiCopy,
    YiPrint,
    YiDownload,
    YiPhotoPreview
]

const install = (Vue) => {
    components.forEach(component => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    YiSnowflak,
    YiParticle,
    YiCopy,
    YiPrint,
    YiDownload,
    YiPhotoPreview
}