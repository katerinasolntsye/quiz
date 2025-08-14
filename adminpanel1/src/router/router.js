import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store/store.js'
import LoginPage from '../components/LoginPage.vue'
import MainPage from '../components/MainPage.vue'
import StudentsPage from '../components/StudentsPage.vue'
import PartnersComponent from '../components/PartnersComponent.vue'
import PromocodesPage from '../components/PromocodesPage.vue'
import CoursesPage from '../components/CoursesPage.vue'
import OrdersPage from '../components/OrdersPage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: LoginPage
    },
    {
        path: '/main',
        component: MainPage
    },
    {
        path: '/students',
        component: StudentsPage
    },
    {
        path: '/partners',
        component: PartnersComponent
    },
    {
        path: '/promocodes',
        component: PromocodesPage
    },
    {
        path: '/courses',
        component: CoursesPage
    },
    {
        path: '/orders',
        component: OrdersPage
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router