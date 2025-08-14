import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store.js'
import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
    Vuex,
    store,
    router,
    render: h => h(App)
}).$mount('#app')