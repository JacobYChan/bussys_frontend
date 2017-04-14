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


<<<<<<< HEAD

router.beforeEach(function (to, from, next) {
    if (!getStore('token')) {
        window.location.href=`http://fhg.jsheyun.net/weixin/index/pushuserbyfhinfo?jumpurl=localhost:8080/`
    }
=======
FastClick.attach(document.body);
router.beforeEach(function(to, from, next) {
>>>>>>> a28c60d09cc6509cecba1c842e17fd174ad4476c
    store.dispatch('updateLoadingStatus', { isLoading: true })
    console.log("==========")
    next()
})
Vue.config.productionTip = false
router.afterEach(function(to) {
    store.dispatch('updateLoadingStatus', { isLoading: false })
})


FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
    router,
<<<<<<< HEAD
    store,
    render: h => h(App)
}).$mount('#app-box')
=======
    template: '<App/>',
    components: { App }
})
>>>>>>> a28c60d09cc6509cecba1c842e17fd174ad4476c
