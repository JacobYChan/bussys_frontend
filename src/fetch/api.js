import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://sport.jsheyun.net';

// post传参序列化
axios.interceptors.request.use((config) => {
    if (config.method  === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
//      _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use((res) =>{
//     if(!res.data.success){
//         // _.toast(res.data.msg);
        // return Promise.reject(res);
//     }
    return res;
}, (error) => {
//     _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            resolve(response.data);
        }, err => {
            reject(err);
        })
        .catch((error) => {
           reject(error)
        })
    })
}

export default {
	// // 关注好友
    // userinfo_focus(params) {
    //     return fetch('/api/userinfo/focus', params)
    // },
}