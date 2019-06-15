import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Element from 'element-ui'
import VueSession from 'vue-session'
import 'element-ui/lib/theme-chalk/index.css';
import VuePhotoZoomPro from 'vue-photo-zoom-pro'
import VueCropper from 'vue-cropper'


var options = {
    persist: true
}


Vue.use(Element)
Vue.use(VueCropper)
Vue.use(VuePhotoZoomPro)
Vue.config.productionTip = false
Vue.use(VueSession, options)


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
