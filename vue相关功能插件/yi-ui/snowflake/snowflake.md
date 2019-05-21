## Yi-Snowflake 雪花组件 使用 api

*2019-1-5*

### Attributes 属性

* 参数          说明                    类型         可选值                 默认值
- canvasId      用于标识 canvas元素id   String      -----                  snowflak
- amount        雪花数量(不能超过500)   Number        -----                  200
- color         雪花的颜色 16进制       String        16进制颜色             #ffffff
- position      画布定位               String        'parent'||'body'       parent
- imgSrc        可用于粒子替换图片      String          -----                -----
- mode          标识雪花组件自触发还是   Boolean       true || false         false   
                手动触发

### Methods 方法

* 事件名                说明                    回调参数说明                其他说明
- modeClick         只有参数 mode 为true时      ----------                 --------
                    才会触发本事件
- refreshDrawing    重新绘画(刷新画布)          -----------                 --------