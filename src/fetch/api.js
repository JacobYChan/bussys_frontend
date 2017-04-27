import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.baseURL = 'http://sport.jsheyun.net';

// post传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    // console.log(config)
    return config;
}, (error) => {
    //      _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use((res) => {
    //     if(!res.data.success){
    //         // _.toast(res.data.msg);
    // return Promise.reject(res);
    //     }
    return res;
}, (error) => {
    //     _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params, method) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            params: params
        }).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        }).catch((error) => {
            reject(error)
        })
    })
}

export default {
    //获取消息列表
    getMessageList(params) {
        return fetch('http://yao.jsheyun.net/app/wheelgj/messagelist', params, 'post')
    },
    //获取消息详情
    getMessageDetail(id) {
        return fetch('http://yao.jsheyun.net/app/wheelgj/message', { id: id }, 'post')
    },
    //访问信息初始化
    visitInfoInitial(params) {
        return fetch('http://yao.jsheyun.net/app/wheelgj/visit', params, 'post')
    },
    //获取活动信息
    getActivityInfo(params) {
        return fetch('http://yao.jsheyun.net/app/wheelgj/index', params, 'post')
    },
    //获取中奖人员列表
    getMemberList(params) {
        return fetch('http://yao.jsheyun.net/app/wheelgj/drawlist', params, 'get')
    },
    //抽奖
    getPrize(params) {
        return fetch('http://yao.jsheyun.net/app/wheelgj/lottery', params, 'post')
    },
    //获取用户信息
    getMemberInfo(params) {
        return fetch('http://yao.jsheyun.net/app/api/getuserinfobytoken', params, 'post')
    },
    //获取用户金币数量
    getMemberGoldCoin(params) {
        return fetch('http://fhg.jsheyun.net/api/user/yaofhb', params, 'get')
    },
    //获取用户红包数量
    getMemberRedPacket(params) {
        return fetch('http://fhg.jsheyun.net/api/user/yaohb', params, 'get')
    },
    //获取用户卡券数量
    getMemberTickets(params) {
        return fetch('http://yao.jsheyun.net/app/wheelgj/getwheelcardnums', params, 'post')
    },
}