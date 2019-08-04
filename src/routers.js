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


router.beforeEach(async(to, from, next) => {
    // const data = await axios.post('https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/login', {
    //     params: {
    //         // 存在cookie里面
    //         // 用token代替你的用户名和密码
    //         token: 'ahsdioasydhkaujhdaskj'
    //     }
    // })
    // let isLogin = data.data.data.status
    //     // 如果你没登陆你就进sign
    //     // 如果你登陆 next

    // 如果你登陆了你就next
    // 或者你就要去登陆页，你也可以next

    // 如果你是首页，详情页，登录页或者你登陆了，都可以进去，否则不给你进去
    if (to.path === '/sign' || to.path === '/tabbar/home' || to.name === 'detail') {
        next()
    } else {
        // 编程式导航
        router.push({
            name: 'sign'
        })
    }

})


export default router