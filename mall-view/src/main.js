import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import BootstrapVue from 'bootstrap-vue'
//
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
//
// Vue.use(BootstrapVue)
import Element from 'element-ui'
import VueSession from 'vue-session'
import 'element-ui/lib/theme-chalk/index.css';

var options = {
    persist: true
}


Vue.use(Element)
Vue.config.productionTip = false
Vue.use(VueSession, options)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
