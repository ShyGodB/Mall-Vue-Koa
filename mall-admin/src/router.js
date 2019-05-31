import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
        },
        // {
        //     path: '/index',
        //     name: 'index',
        //     component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
        // },
        {
            path: '/dash',
            name: 'dash',
            component: () => import(/* webpackChunkName: "about" */ './components/Dash.vue')
        },
        {
            path: '/boss',
            name: 'boss',
            component: () => import(/* webpackChunkName: "about" */ './components/Boss.vue')
        },
        {
            path: '/god',
            name: 'god',
            component: () => import(/* webpackChunkName: "about" */ './components/God.vue')
        },
        {
            path: '/store',
            name: 'store',
            component: () => import(/* webpackChunkName: "about" */ './components/Store.vue')
        },
        {
            path: '/black',
            name: 'black',
            component: () => import(/* webpackChunkName: "about" */ './components/Black.vue')
        },
    ]
})
