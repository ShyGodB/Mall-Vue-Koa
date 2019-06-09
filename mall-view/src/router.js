import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import(/* webpackChunkName: "about" */ './views/Index.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
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
        },
        {
           path: '/result/:keyword/:item',
           name: 'result',
           component: () => import(/* webpackChunkName: "about" */ './views/Result.vue')
       },
       {
          path: '/bosshome',
          name: 'bosshome',
          component: () => import(/* webpackChunkName: "about" */ './views/Bosshome.vue')
       },
       {
          path: '/shopcar',
          name: 'shopcar',
          component: () => import(/* webpackChunkName: "about" */ './views/Shopcar.vue')
      },
      {
         path: '/good/:id',
         name: 'good',
         component: () => import(/* webpackChunkName: "about" */ './views/Good.vue')
     },
     {
        path: '/404',
        name: '404',
        component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
     }
    ]
})
