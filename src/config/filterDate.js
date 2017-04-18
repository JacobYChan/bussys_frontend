const filters = {
    fmtDate: (date) => {
        // var date = new Date(date)
        // var o = {
        //     "M+": date.getMonth() + 1, //月份
        //     "d+": date.getDate(), //日
        //     "h+": date.getHours(), //小时
        //     "m+": date.getMinutes(), //分
        //     "s+": date.getSeconds(), //秒
        //     "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        //     "S": date.getMilliseconds() //毫秒
        // };
        // if (/(y+)/.test(fmtExp))
        //     fmtExp = fmtExp.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        // for (var k in o)
        //     if (new RegExp("(" + k + ")").test(fmtExp))
        //         fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        let now = Date.parse(new Date()) / 1000;
        let time = now - date;
        if (time < 0) {
            return '';
        } else if (time < 30) {
            return "刚刚"
        } else if (time < 60) {
            return parseInt(time) + "秒前"
        } else if ((time / 60) < 60) {
            return parseInt((time / 60)) + '分钟前'
        } else if ((time / 3600) < 24) {
            return parseInt(time / 3600) + '小时前'
        } else if ((time / 86400) < 31) {
            return parseInt(time / 86400) + '天前'
        } else if ((time / 2592000) < 12) {
            return parseInt(time / 2592000) + '月前'
        } else {
            return parseInt(time / 31536000) + '年前'
        }
        // return fmtExp;
    },
    filterDate: (date, fmtExp) => {
        var newdate = date * 1000;
        var date = new Date(newdate)
        var o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmtExp))
            fmtExp = fmtExp.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmtExp))
                fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmtExp;
    }
}
export default (Vue) => {
    Object.keys(filters).forEach(key => {
        Vue.filter(key, filters[key])
    })
}