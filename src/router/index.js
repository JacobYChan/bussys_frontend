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
            meta: {
                requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
            },
            name: 'Home',
            component: resolve => require(["../pages/home/home.vue"], resolve),
            beforeEnter: (to, from, next) => {
                setTimeout(function () {
                    next()
                }, 200)
            }
        },
        {
            path: '/bus',
            name: 'bus',
            component: resolve => require(["../pages/bus/bus.vue"], resolve),
        },
        {
            path: '/mall',
            name: 'Mall',
            component: resolve => require(["../pages/mall/mall.vue"], resolve),
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
            beforeEnter: (to, from, next) => {
                setTimeout(function () {
                    next()
                }, 200)
            }
        }
    ]
})

