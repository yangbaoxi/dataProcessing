/**
 * 公共函数
 */

/**
 * localstorage 封装
 * @returns {Object} 返回 三个函数
 */
class Localstorage {
    constructor(){
        this.storage = window.localStorage;
        if (!window.localStorage) {
            console.error('浏览器不支持localstorage');
            return false;
        }
    }
    // 存储
    set(key, value){
        this.storage.setItem(key, JSON.stringify(value));
    }
    // 读取
    get(key){
        let getData = this.storage.getItem(key);
        getData = JSON.parse(getData);
        return getData;
    }
    // 删除
    clear(key){
        this.storage.removeItem(key);
    }
}

/**
 * Sessionstorage 封装
 * @returns {Object} 返回 三个函数
 */
class Sessionstorage {
    constructor(){
        this.storage = window.sessionStorage;
        if (!window.sessionStorage) {
            console.error('浏览器不支持sessionStorage');
            return false;
        }
    }
    // 存储
    set(key, value){
        this.storage.setItem(key, JSON.stringify(value));
    }
    // 读取
    get(key){
        let getData = this.storage.getItem(key);
        getData = JSON.parse(getData);
        return getData;
    }
    // 删除
    clear(key){
        this.storage.removeItem(key);
    }
}

/**
 * Cookie 封装
 * @returns {Object} 返回 三个函数
 */
class Cookie {
    // 存储
    set(key, value){
        let Days = 1;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = key + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
    }
    // 获取
    get(key){
        let arr = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
        if (arr != null) return unescape(arr[2]); return null;
    }
    // 删除
    clear(key){
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.get(key);
        if (cval != null) {
            document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
        }
    }
}

/**
 * Observer 封装
 * @returns {Object} 返回 三个函数
 */
class Observer {
    constructor(){
        this.msgs = Object.create(null);
    }
    // 订阅
    subscribeInfo(type, fn){
        if (typeof this.msgs[type] === "undefined") {
            this.msgs[type] = [fn];
        } else {
            this.msgs[type].push(fn);
        }
    }
    // 发布
    releaseInfo(type, data){
        if (!this.msgs[type]) return;
        let events = {
            type: type,
            data: data || {}
        }
        for (let i = 0; i < this.msgs[type].length; i++) {
            this.msgs[type][i].call(this, events);
        }
    }
    // 删除
    removeInfo(type, fn){
        if (this.msgs[type] instanceof Array) {
            for (let i = 0; i < this.msgs[type].length; i++){
                this.msgs[type][i] === fn && this.msgs[type].splice(i, 1);
            }
        }
    }
}
