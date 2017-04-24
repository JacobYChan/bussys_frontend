import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: resolve => require(["../pages/home/home.vue"], resolve),
            beforeEnter: (to, from, next) => {
                setTimeout(function () {
                    next()
                }, 700)
            }
        },
        {
            path: '/bus',
            name: 'bus',
            component: resolve => require(["../pages/bus/bus.vue"], resolve),
        },
        {
            path: '/mall/index',
            name: 'Mall',
            components: {
                subPage: resolve => require(["../pages/mall/mall.vue"], resolve),
            }
        },
        {
            path: '/member',
            name: 'Member',
            component: resolve => require(["../pages/member/member.vue"], resolve),
            // children: [
            //     {
            //         path: 'info',
            //         name: 'MemberInfo',
            //         component: memberInfo,
            //     }
            // ]
        },
        {
            path: '/member/info',
            name: 'MemberInfo',
            components: {
                subPage: resolve => require(["../pages/member/member-info/member-info.vue"], resolve)
            }
        },
        {
            path: '/message',
            name: 'Message',
            component: resolve => require(["../pages/message/message.vue"], resolve),
            // beforeEnter: (to, from, next) => {
            //     setTimeout(function () {
            //         next()
            //     }, 200)
            // }
        },
        {
            path: '/messageDetail/:messageId',
            name: 'messageDetail',
            components: {
                subPage: resolve => require(["../pages/message/messageDetail.vue"], resolve)
            }
        },
    ]
})

