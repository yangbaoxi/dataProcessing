/**
 * 获取当前时间
 * @param {Date} date 时间对象
 * @param {String} fmt 返回时间的格式 'yyyy-MM-dd hh:mm:ss'
 * @returns {String} 返回 当前日期
 */
const FormatDate = (date, fmt) => {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + ''
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    function padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
    return fmt;
}
