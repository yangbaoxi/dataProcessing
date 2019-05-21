class Snowflak {
    constructor(ctx, amount ,color, width, height, imgSrc){
        this.ctx = ctx;// 画布
        this.amount = amount;// 数量
        this.color = color;// 粒子颜色
        this.width = width;// 画布宽
        this.height = height;// 画布稿
        this.imgSrc = imgSrc;// 粒子替换src
        this.alpha = this.random(0.8, 1);// 圆透明度
    }
    // 制作雪花
    draw(x, y, r, moveX, moveY){
        let snowflake = {
            x, y, r, moveX, moveY
        }
        if (this.imgSrc){ // 图片
            let imgSrc = new Image();
            imgSrc.src = this.imgSrc;
            this.ctx.drawImage(imgSrc, snowflake.x, snowflake.y, 20, 20);
        } else { // 圆
            let color = this.colorRgb(this.color);
            // 雪花上色
            this.ctx.fillStyle = `rgba${color}`;
            this.ctx.beginPath();
            // 圆
            this.ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            this.ctx.closePath();
            this.ctx.fill();
        }
        return snowflake;
    }
    // 雪花移动
    moving(particleArr){
        for (let i = 0; i < this.amount; i++){
            particleArr[i].x += particleArr[i].moveX;
            particleArr[i].y += particleArr[i].moveY;
            if (particleArr[i].y > this.height){
                particleArr[i].y = 0;
                particleArr[i].x = Math.random() * this.width;
            }
            this.draw(particleArr[i].x, particleArr[i].y, particleArr[i].r);
        }
    }
    // 随机数
    random(min, max) {
        return Math.random() * (max - min) + min;
    }
    // 16进制颜色转换 rgba
    colorRgb(color){
        let sColor = color.toLowerCase();
        let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (sColor && reg.test(sColor)) {
            if (sColor.length === 4) {
                let sColorNew = "#";
                for (let i = 1; i < 4; i += 1) {
                    sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
                }
                sColor = sColorNew;
            }
            //处理六位的颜色值
            let sColorChange = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
            }
            return `(${sColorChange.join(",")},${this.alpha})`;
        }
        return sColor;
    }
}

export default Snowflak