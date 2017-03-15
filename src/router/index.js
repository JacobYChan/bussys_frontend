import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Mall from '@/pages/mall/mall'
import Member from '@/pages/member/member'
import Message from '@/pages/message/message'
import memberInfo from '@/pages/member/member-info/member-info'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/home',
            name: 'Home1',
            component: Home
        },
        {
            path: '/mall',
            name: 'Mall',
            component: Mall
        },
        {
            path: '/member',
            name: 'Member',
            component: Member,
            children: [
                {
                    path: 'info',
                    name: 'MemberInfo',
                    component: memberInfo,
                }
            ]
        },
        {
            path: '/message',
            name: 'Message',
            component: Message
        }
    ]
})

