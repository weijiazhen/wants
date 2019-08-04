import Vue from 'vue'
// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

// 定义路由组件
import Tabbar from './components/Tabbar'
import Home from './components/Tabbar/Home'
import Car from './components/Tabbar/Car'
import Mine from './components/Tabbar/Mine'

import Detail from './components/Detail'
import Sign from './components/Sign'


const routes = [{
        name: 'tabbar',
        path: '/tabbar',
        component: Tabbar,
        // 嵌套路由，先进底部选项卡，再去找首页
        children: [{
                name: 'home',
                path: 'home',
                component: Home,
            }, {
                name: 'car',
                path: 'car',
                component: Car,
            },
            {
                name: 'mine',
                path: 'mine',
                component: Mine,
            }
        ],
    },
    { //详情页
        name: 'detail',
        path: '/detail/:id/:name',
        component: Detail,
        // 我往detail组建里面传入了props
        props: {
            default: true,
            sidebar: false
        }
    },
    { //登录页
        name: 'sign',
        path: '/sign',
        component: Sign,
    },
    // 重定向
    {
        path: '/',
        // 别名
        alias: '/index.html',
        redirect: () => {
            return '/tabbar/home'
        }
    }
]

const router = new VueRouter({
    // mode: 'history',
    routes
})

export default router