## Yi-Copy 复制组件 使用 api

*2019-1-8*

### Attributes 属性

* 参数          说明                    类型         可选值                 默认值
- icon          内部按钮icon图标        String       ------                 -----
- copyText      用于 v-model 绑定的内容 any           -----                 -----
                如果使用v-model 内部slot
                复制失效
- hidden        用于隐藏组件内部button  Boolean       true/false            true
                按钮 

### Methods 方法

* 事件名                说明                    回调参数说明                其他说明
- copy              用于外部按钮打印触发函数     -----------                -------

### Event 事件

* 事件名                说明                    回调参数说明                其他说明
- copySuccess          复制成功后的回调函数      返回 data {Object} 包含打印    ----
                                               的内容以及复制状态(默认success) 