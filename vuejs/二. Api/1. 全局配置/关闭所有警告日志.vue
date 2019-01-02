## silent

类型: Boolean

默认: false

用法: main.js 

Vue.config.silent = true; // 取消 Vue 所有的日志与警告

生产环境取消所有日志与警告

Vue.config.silent = process.env.NODE_ENV !== 'production' ? false : true;