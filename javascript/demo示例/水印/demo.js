/**
 * 水印，可以给整个背景添加水印
 */

class Watermark {
    constructor() {
        this.options = {
            watermark_text_one: "",
            watermark_text_two: "",
            watermark_text_three: "",
            watermark_x: 20, // 水印起始位置x轴坐标
            watermark_y: 20, // 水印起始位置y轴坐标
            watermark_rows: 20, // 水印行数
            watermark_cols: 20, // 水印列数
            watermark_x_space: 100, // 水印x轴间隔
            watermark_y_space: 50, // 水印y轴间隔
            watermark_color: "#000", // 水印文字颜色
            watermark_alpha: 0.4, // 水印透明度
            watermark_fontsize: '15px', // 水印字体大小
            watermark_font: "微软雅黑", // 水印字体
            watermark_width: 210, // 水印宽度
            watermark_height: 80, //水印高度
            watermark_angle: 15 //水印倾斜度数
        }
        if (arguments.length === 1 && typeof arguments[0] === "object") {
            let options = arguments[0] || {};
            for (let key in options) {
                if (options[key] && this.options[key] && options[key] === this.options[key]) {
                    continue;
                } else if (options[key]) {
                    this.options[key] = options[key];
                }
            }
        }
    }
    init() {
        // 创建虚拟节点
        this.oTemp = document.createDocumentFragment();
        // 获取页面最大宽度
        let page_width = Math.max(document.body.scrollWidth, document.body.clientWidth);
        // let cutWidth = page_width * 0.015;
        // page_width = page_width - cutWidth;
        console.log('page_width', page_width);
        // 获取页面最大高度
        let page_height = document.body.scrollHeight + document.body.scrollTop;
        console.log('page_height', page_height);
        this.handler_col_or_row(page_width, page_height);
        this.handlerText();
        document.body.appendChild(this.oTemp);
    }
    // 处理 列数跟行数
    handler_col_or_row(page_width, page_height) {
        // 如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
        if (
            this.options.watermark_cols == 0 ||
            parseInt(this.options.watermark_x + this.options.watermark_width * this.options.watermark_cols + this.options.watermark_x_space * (this.options.watermark_cols - 1)) > page_width
        ) {
            this.options.watermark_cols = parseInt((page_width - this.options.watermark_x + this.options.watermark_x_space) / (this.options.watermark_width + this.options.watermark_x_space));
            this.options.watermark_x_space = parseInt((page_width - this.options.watermark_x - this.options.watermark_width * this.options.watermark_cols) / (this.options.watermark_cols - 1));
        }
        // 如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
        if (
            this.options.watermark_rows == 0 ||
            (parseInt(this.options.watermark_y + this.options.watermark_height * this.options.watermark_rows + this.options.watermark_y_space * (this.options.watermark_rows - 1)) > page_height)
        ) {
            this.options.watermark_rows = parseInt((this.options.watermark_y_space + page_height - this.options.watermark_y) / (this.options.watermark_height + this.options.watermark_y_space));
            this.options.watermark_y_space = parseInt(((page_height - this.options.watermark_y) - this.options.watermark_height * this.options.watermark_rows) / (this.options.watermark_rows - 1));
        }
    }
    // 处理文字
    handlerText() {
        let x,y;
        for (let i = 0; i < this.options.watermark_rows; i++) {
            y = this.options.watermark_y + (this.options.watermark_y_space + this.options.watermark_height) * i;
            for (let j = 0; j < this.options.watermark_cols; j++) {
                x = this.options.watermark_x + (this.options.watermark_width + this.options.watermark_x_space) * j;
                let mask_div = document.createElement('div');
                mask_div.id = 'mask_div' + i + j; // 给元素增加id
                mask_div.className = 'mask_div'; // 给元素增加 class
                // 三个文字节点
                let span_one = document.createElement('div');
                span_one.appendChild(document.createTextNode(this.options.watermark_text_one));
                let span_two = document.createElement('div');
                span_two.appendChild(document.createTextNode(this.options.watermark_text_two));
                let span_three = document.createElement('div');
                span_three.appendChild(document.createTextNode(this.options.watermark_text_three));
                mask_div.appendChild(span_one);
                mask_div.appendChild(span_two);
                mask_div.appendChild(span_three);
                // 设置水印div 倾斜
                mask_div.style.webkitTransform = "rotate(-" + this.options.watermark_angle + "deg)";
                mask_div.style.MozTransform = "rotate(-" + this.options.watermark_angle + "deg)";
                mask_div.style.msTransform = "rotate(-" + this.options.watermark_angle + "deg)";
                mask_div.style.OTransform = "rotate(-" + this.options.watermark_angle + "deg)";
                mask_div.style.transform = "rotate(-" + this.options.watermark_angle + "deg)";
                mask_div.style.visibility = "";
                mask_div.style.position = "absolute";
                mask_div.style.left = x + 'px';
                mask_div.style.top = y + 'px';
                mask_div.style.overflow = "hidden";
                mask_div.style.zIndex = "9999";
                mask_div.style.pointerEvents = 'none'; // pointer-events:none  让水印不遮挡页面的点击事件
                // 
                mask_div.style.opacity = this.options.watermark_alpha;
                mask_div.style.fontSize = this.options.watermark_fontsize;
                mask_div.style.fontFamily = this.options.watermark_font;
                mask_div.style.color = this.options.watermark_color;
                mask_div.style.textAlign = "center";
                mask_div.style.width = this.options.watermark_width + 'px';
                mask_div.style.height = this.options.watermark_height + 'px';
                mask_div.style.display = "block";
                this.oTemp.appendChild(mask_div)
            }
        }
    }
}

// new Watermark().init();