// css position:absolute;

// js

let div = document.getElementById('div');

let x = 0; // 当前鼠标点击的时 X 坐标

let y = 0; // 当前鼠标点击的时 Y 坐标

let left = 0; // 元素距离父元素的 Left 值

let top = 0; // 元素距离父元素的 Top 值

let isDown = false;

div.onmousedown = function(e){
    //获取x坐标和y坐标
    x = e.clientX;
    y = e.clientY;
    //获取左部和顶部的偏移量
    left = div.offsetLeft;
    top = div.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
    div.style.cursor = 'move';
}

window.onmousemove = function(e){
    if (isDown == false) {
        return;
    }
    //获取x和y
    let nx = e.clientX;
    let ny = e.clientY;
    //计算移动后的左偏移量和顶部的偏移量
    let nl = nx - (x - left);
    let nt = ny - (y - top);

    div.style.left = nl + 'px';
    div.style.top = nt + 'px';
}

div.onmouseup = function(){
    //开关关闭
    isDown = false;
    dv.style.cursor = 'default';
}
