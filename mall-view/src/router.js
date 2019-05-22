import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Userhome from './views/Userhome.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: () => import(/* webpackChunkName: "about" */ './views/Register.vue')
        },
        {
          path: '/userhome',
          name: 'userhome',
          component: () => import(/* webpackChunkName: "about" */ './views/Userhome.vue')
        },
        {
           path: '/userinfo',
           name: 'userinfo',
           component: () => import(/* webpackChunkName: "about" */ './views/Userinfo.vue')
        }
    ]
})
