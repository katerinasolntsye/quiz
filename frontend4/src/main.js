import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

new Vue({
    Vuex,
    router,
    store,
    VueCookies,
    render: h => h(App),
}).$mount('#app')