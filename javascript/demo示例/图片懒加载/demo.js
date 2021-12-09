/**
 * 图片懒加载原理
 * 将未在可视区内的图片存放在src的自定义属性中，如data-src
 * 当进入可视区域内，将data-src 内路径赋值给src 
 */

/*
    <img data-src="http://www.people.com.cn/mediafile/pic/20180413/89/12775292924448008393.jpg">
*/

class ImgLazy {
    constructor() {
        this.options = {
            loadImg: "./图片懒加载/load.gif",
            errorImg: "./图片懒加载/error.jpg",
            success: null,
            error: null
        }
        if (arguments.length === 1 && typeof arguments[0] === "object") {
            let options = arguments[0] || {};
            for (let key in options) {
                if (options[key] && this.options[key] && options[key] === this.options[key]) {
                    continue;
                } else {
                    this.options[key] = options[key];
                }
            }
        }
        this.getView();
        this.getImgDataSrc();
    }
    /** 
    * 获取可视窗口
    */
    getView() {
        this.viewHeight = document.documentElement.clientHeight;
        this.viewTop = document.documentElement.scrollTop || document.body.scrollTop;
    }
    /**
    * 获取带 data-src 属性的 图片dom
    */
    getImgDataSrc() {
        this.imgs = document.querySelectorAll("img[data-src]");
        this.imgs.forEach((item, index) => {
            item.src = this.options.loadImg;
            this.handleImgLoad(item);
            this.handleImgError(item);
        })
    }
    /**
    * 图片加载成功处理
    */
    handleImgLoad(item) {
        item.addEventListener('load', (e) => {
            this.handleImg(item);
            window.addEventListener('scroll', () => {
                this.handleImg(item);
            })
            if (this.options.success) this.options.success(item);
        })
    }
    /**
    * 图片统一处理函数
    */
    handleImg(item) {
        if (!item.getAttribute('data-src')) return;
        let rect = item.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top < this.viewHeight) {
            let img = new Image();
            img.src = item.getAttribute("data-src");
            item.src = img.src;
            item.removeAttribute('data-src');
        }
    }
    /**
    * 图片加载失败处理
    */
    handleImgError(item) {
        item.addEventListener('error', (e) => {
            item.src = this.options.errorImg;
            if (this.options.error) this.options.error(item);
            console.error("加载图片失败...", e)
        })
    }
}

new ImgLazy({
    success: function(data) {
        console.dir('成功！');
        console.dir(data);
    },
    error: function(data) {
        console.dir('失败！');
        console.dir(data);
    }
})