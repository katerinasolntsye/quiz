import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'
import MainComponent1 from '../components/MainComponent1.vue'
import MainComponent2 from '../components/MainComponent2.vue'
import PartnerComponent from '../components/PartnerComponent.vue'
import ContactsComponent from '../components/ContactsComponent.vue'
import PartnershipComponent from '../components/PartnershipComponent.vue'
import TermsOfService from '../components/TermsOfService.vue'
import TermsOfUse from '../components/TermsOfUse.vue'
import PartnershipAgreement from '../components/PartnershipAgreement.vue'
import TermsOfPartnership from '../components/TermsOfPartnership.vue'
import PrivacyPolicy from '../components/PrivacyPolicy.vue'
import ProfileComponent from '../components/ProfileComponent.vue'
import PartnerProfile from '../components/PartnerProfile.vue'
import IntroductoryLesson from '../components/IntroductoryLesson.vue'
import Phonetics1Lessons from '../components/Phonetics1Lessons.vue'
import Phonetics1Lesson1 from '../components/Phonetics1Lesson1.vue'
import Phonetics1Lesson2 from '../components/Phonetics1Lesson2.vue'
import Phonetics1Lesson3 from '../components/Phonetics1Lesson3.vue'
import Phonetics1Lesson4 from '../components/Phonetics1Lesson4.vue'
import Phonetics1Lesson5 from '../components/Phonetics1Lesson5.vue'
import Phonetics1Lesson6 from '../components/Phonetics1Lesson6.vue'
import Phonetics1Lesson7 from '../components/Phonetics1Lesson7.vue'
import Phonetics1Lesson8 from '../components/Phonetics1Lesson8.vue'
import Phonetics1Lesson9 from '../components/Phonetics1Lesson9.vue'
import Phonetics1Lesson10 from '../components/Phonetics1Lesson10.vue'
import Phonetics2Lessons from '../components/Phonetics2Lessons.vue'
import Phonetics2Lesson1 from '../components/Phonetics2Lesson1.vue'
import Phonetics2Lesson2 from '../components/Phonetics2Lesson2.vue'
import Phonetics2Lesson3 from '../components/Phonetics2Lesson3.vue'
import Phonetics2Lesson4 from '../components/Phonetics2Lesson4.vue'
import Phonetics2Lesson5 from '../components/Phonetics2Lesson5.vue'
import Phonetics2Lesson6 from '../components/Phonetics2Lesson6.vue'
import Phonetics2Lesson7 from '../components/Phonetics2Lesson7.vue'
import Phonetics2Lesson8 from '../components/Phonetics2Lesson8.vue'
import Phonetics2Lesson9 from '../components/Phonetics2Lesson9.vue'
import Phonetics2Lesson10 from '../components/Phonetics2Lesson10.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: MainComponent1,
        children: [{
                path: '/offer-agreement',
                beforeEnter: (to, from, next) => {
                    if (store.getters.termsOfService) {
                        return next();
                    } else {
                        store.commit('openTermsOfService');
                        return next();
                    }
                },
                component: TermsOfService,
            },
            {
                path: '/terms-of-use',
                beforeEnter: (to, from, next) => {
                    if (store.getters.termsOfUse) {
                        return next();
                    } else {
                        store.commit('openTermsOfUse');
                        return next();
                    }
                },
                component: TermsOfUse,
            },
            {
                path: '/partnership-agreement',
                beforeEnter: (to, from, next) => {
                    if (store.getters.partnershipAgreement) {
                        return next();
                    } else {
                        store.commit('openPartnershipAgreement');
                        return next();
                    }
                },
                component: PartnershipAgreement,
            },
            {
                path: '/terms-of-partnership',
                beforeEnter: (to, from, next) => {
                    if (store.getters.termsOfPartnership) {
                        return next();
                    } else {
                        store.commit('openTermsOfPartnership');
                        return next();
                    }
                },
                component: TermsOfPartnership,
            },
            {
                path: '/privacy-policy',
                beforeEnter: (to, from, next) => {
                    if (store.getters.privacyPolicy) {
                        return next();
                    } else {
                        store.commit('openPrivacyPolicy');
                        return next();
                    }
                },
                component: PrivacyPolicy,
            }
        ],
    },
    { path: '/contacts', component: ContactsComponent },
    { path: '/partnership', component: PartnershipComponent },
    {
        path: '/partner',
        beforeEnter: (to, from, next) => {
            // console.log(store.state);
            let partnerLoggedin = fetch('https://httpbin.org/get')
                .then(response => {
                    partnerLoggedin = true;
                    return response
                })
                .catch(err => console.log(err))

            if (partnerLoggedin) { return next(); } else { return false }
            // if (that.store.getters.getUserLoggedin) { return next(); } else { return false }
        },
        component: PartnerComponent
    },
    {
        path: '/student',
        beforeEnter: (to, from, next) => {
            console.log(store.state);
            console.log(store.state.loginInput);
            console.log(store.state.passwordInput);
            let loggedin = fetch('https://httpbin.org/get')
                .then(response => {
                    loggedin = true;
                    return response
                })
                .catch(err => console.log(err))

            if (loggedin) { return next(); } else { return false }
            // if (that.store.getters.getUserLoggedin) { return next(); } else { return false }
        },
        component: MainComponent2
    },
    {
        path: '/student/profile',
        beforeEnter: (to, from, next) => {
            if (store.getters.getUserLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
        },
        component: ProfileComponent
    },
    {
        path: '/partner/profile',
        beforeEnter: (to, from, next) => {
            if (store.getters.getPartnerLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
        },
        component: PartnerProfile
    },
    {
        path: '/student/introductory-lesson',
        beforeEnter: (to, from, next) => {
            if (store.getters.getUserLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
        },
        component: IntroductoryLesson
    },
    {
        path: '/student-phonetics1-lessons',
        beforeEnter: (to, from, next) => {
            // if (store.getters.getUserLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
            if ((store.getters.getUserLoggedin || window.$cookies.get("name")) && JSON.parse(store.getters.getUser.payedcourses).some(course => course.link == '/student-phonetics1-lessons')) { return next(); } else { console.log(window.$cookies.get("name")); return next('/'); }
        },
        component: Phonetics1Lessons
    },
    {
        path: '/student-phonetics1-lesson1',
        beforeEnter: (to, from, next) => {
            // if (store.getters.getUserLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
            if ((store.getters.getUserLoggedin || window.$cookies.get("name")) && JSON.parse(store.getters.getUser.payedcourses).some(course => course.link == '/student-phonetics1-lessons') && JSON.parse(store.getters.getUser.payedcourses)[0].lessons[0].unlocked == true) { return next(); } else { console.log(window.$cookies.get("name")); return false }
        },
        component: Phonetics1Lesson1
    },
    {
        path: '/student-phonetics1-lesson2',
        beforeEnter: (to, from, next) => {
            // if (store.getters.getUserLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
            if ((store.getters.getUserLoggedin || window.$cookies.get("name")) && JSON.parse(store.getters.getUser.payedcourses).some(course => course.link == '/student-phonetics1-lessons') && JSON.parse(store.getters.getUser.payedcourses)[0].lessons[1].unlocked == true) { return next(); } else { console.log(window.$cookies.get("name")); return false }
        },
        component: Phonetics1Lesson2
    },
    { path: '/student-phonetics1-lesson3', component: Phonetics1Lesson3 },
    { path: '/student-phonetics1-lesson4', component: Phonetics1Lesson4 },
    { path: '/student-phonetics1-lesson5', component: Phonetics1Lesson5 },
    { path: '/student-phonetics1-lesson6', component: Phonetics1Lesson6 },
    { path: '/student-phonetics1-lesson7', component: Phonetics1Lesson7 },
    { path: '/student-phonetics1-lesson8', component: Phonetics1Lesson8 },
    { path: '/student-phonetics1-lesson9', component: Phonetics1Lesson9 },
    { path: '/student-phonetics1-lesson10', component: Phonetics1Lesson10 },
    {
        path: '/student-phonetics2-lessons',
        beforeEnter: (to, from, next) => {
            // if (store.getters.getUserLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
            if ((store.getters.getUserLoggedin || window.$cookies.get("name")) && JSON.parse(store.getters.getUser.payedcourses).some(course => course.link == '/student-phonetics2-lessons')) { return next(); } else { console.log(window.$cookies.get("name")); return next('/'); }
        },
        component: Phonetics2Lessons
    },
    {
        path: '/student-phonetics2-lesson1',
        beforeEnter: (to, from, next) => {
            // if (store.getters.getUserLoggedin || window.$cookies.get("name")) { return next(); } else { console.log(window.$cookies.get("name")); return false }
            if ((store.getters.getUserLoggedin || window.$cookies.get("name")) && JSON.parse(store.getters.getUser.payedcourses).some(course => course.link == '/student-phonetics2-lessons') && JSON.parse(store.getters.getUser.payedcourses)[0].lessons[0].unlocked == true) { return next(); } else { console.log(window.$cookies.get("name")); return false }
        },
        component: Phonetics2Lesson1
    },
    {
        path: '/student-phonetics2-lesson2',
        beforeEnter: (to, from, next) => {
            if ((store.getters.getUserLoggedin || window.$cookies.get("name")) && JSON.parse(store.getters.getUser.payedcourses).some(course => course.link == '/student-phonetics2-lessons') && JSON.parse(store.getters.getUser.payedcourses)[0].lessons[1].unlocked == true) { return next(); } else { console.log(window.$cookies.get("name")); return false }
        },
        component: Phonetics2Lesson2
    },
    { path: '/student-phonetics2-lesson3', component: Phonetics2Lesson3 },
    { path: '/student-phonetics2-lesson4', component: Phonetics2Lesson4 },
    { path: '/student-phonetics2-lesson5', component: Phonetics2Lesson5 },
    { path: '/student-phonetics2-lesson6', component: Phonetics2Lesson6 },
    { path: '/student-phonetics2-lesson7', component: Phonetics2Lesson7 },
    { path: '/student-phonetics2-lesson8', component: Phonetics2Lesson8 },
    { path: '/student-phonetics2-lesson9', component: Phonetics2Lesson9 },
    { path: '/student-phonetics2-lesson10', component: Phonetics2Lesson10 },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path !== ('/offer-agreement' || '/terms-of-use' || '/partnership-agreement' || '/terms-of-partnership' || '/privacy-policy')) {
        store.commit('closeTermsOfService');
        store.commit('closeTermsOfUse');
        store.commit('closePartnershipAgreement');
        store.commit('closeTermsOfPartnership');
        store.commit('closePrivacyPolicy');
        return next();
    } else {
        return next();
    }
})

export default router