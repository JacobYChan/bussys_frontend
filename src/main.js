// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store/'
import { getStore, setStore, removeStore } from './config/mUtils'
import filters from './config/filterDate' //将全部过滤器放在 filters/index.js 中便于管理

// 注册全局过滤器
filters(Vue);
Vue.use(MintUI);


router.beforeEach(function (to, from, next) {
    // if (getStore('token') === undefined || getStore('token') === null) {
    //     if (to.query.token) {
    //         setStore('token', to.query.token)
    //     }
    //     let url = encodeURIComponent("fhg.jsheyun.net/weixin/index/pushuserbyfhinfo?jumpurl2=localhost:8080/home")
    //     window.location.replace(`http://yao.jsheyun.net/app/api/grantgetyaotoken?jumpurl=${url}`)
    //     setStore('time', new Date().getTime() + 900000)
    //     console.log(to.query.token + "有没有token")

    // }
    if (to.query.token) {
        setStore('token', to.query.token)
        setStore('time', new Date().getTime() + 900000)
    }

    console.log(getStore('token') + "---------------")



    if (new Date().getTime() > getStore('time')) {
        removeStore('token')
        removeStore('time')
    }

    // else {
    //     if (new Date().getTime() > getStore('time')) {
    //         removeStore('token')
    //            removeStore('time')
    //     }
    // }
    // console.log(getStore('token') + "缓存token")
    store.dispatch('updateLoadingStatus', { isLoading: true })
    store.dispatch('get_activity_info', { token: getStore('token'), wid: 174 })
    store.dispatch('get_member_list', { wid: 174 })
    
    if (getStore('token') === null || getStore('token') === undefined) {
        let url = encodeURIComponent("fhg.jsheyun.net/weixin/index/pushuserbyfhinfo?jumpurl2=localhost:8080")
        window.location.replace(`http://yao.jsheyun.net/app/api/grantgetyaotoken?jumpurl=${url}`)
    } else {
        next()
    }

})
Vue.config.productionTip = false
router.afterEach(function (to) {

    store.dispatch('updateLoadingStatus', { isLoading: false })
})


FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')

