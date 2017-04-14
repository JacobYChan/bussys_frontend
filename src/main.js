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


Vue.use(MintUI);


router.beforeEach(function (to, from, next) {
    if (!getStore('token')) {
        window.location.href = `http://fhg.jsheyun.net/weixin/index/pushuserbyfhinfo?jumpurl=localhost:8080/`
    }
    store.dispatch('updateLoadingStatus', { isLoading: true })
    next()
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

