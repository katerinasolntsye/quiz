import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as userData from '../mock/user.json'
import * as partnerData from '../mock/partner.json'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        termsOfService: false,
        termsOfUse: false,
        partnershipAgreement: false,
        termsOfPartnership: false,
        privacyPolicy: false,
        userLoggedin: null,
        partnerLoggedin: null,
        loginErrored: false,
        partnerLoginErrored: false,
        loginInput: 123,
        partnerLoginInput: 12345,
        passwordInput: 123,
        partnerPasswordInput: 12345,
        user: null,
        partner: null,
        // currentLesson: {
        //     lesson: null,
        //     course: null
        // },
    },
    actions: {
        increment({ commit }) {
            commit('increment')
        },
        async setUserEmail({ commit }, email) {
            commit('setUserEmail', email)
        },
        async setPartnerEmail({ commit }, email) {
            commit('setPartnerEmail', email)
        },
        async setUserPassword({ commit }, password) {
            commit('setUserPassword', password)
        },
        async setPartnerPassword({ commit }, password) {
            commit('setPartnerPassword', password)
        },
        async login({ commit }, email, password) {
            // commit('setLoginInput', email)
            // commit('setPasswordInput', password)
            console.log(axios, email, password);
            await fetch('https://httpbin.org/get')
                .then((response) => {
                    let result = response.json()
                    commit('login')
                    commit('setUser', result)
                    document.cookie = "name=loggedin; SameSite=None; Secure";

                    console.log(response)
                })
                .catch(() => {
                    commit('loginErrored')
                })
        },
        async partnerLogin({ commit }, email, password) {
            // commit('setPartnerLoginInput', email)
            // commit('setPartnerPasswordInput', password)
            console.log(axios, email, password);
            await fetch('https://httpbin.org/get')
                .then((response) => {
                    let result = response.json()
                    commit('partnerLogin')
                    commit('setPartner', result)
                    document.cookie = "name=loggedin; SameSite=None; Secure";

                    console.log(response)
                })
                .catch(() => {
                    commit('partnerLoginErrored')
                })
        },
        async completeTask({ commit }, user) {
            console.log(user);
            await fetch('https://httpbin.org/get')
                .then((response) => {
                    let result = response.json()
                    commit('setUser', result)
                    document.cookie = "name=loggedin; SameSite=None; Secure";

                    console.log(response)
                })
                .catch(() => {
                    // commit('loginErrored')
                })
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        openTermsOfService(state) {
            state.termsOfService = true
        },
        openTermsOfUse(state) {
            state.termsOfUse = true
        },
        openPartnershipAgreement(state) {
            state.partnershipAgreement = true
        },
        openTermsOfPartnership(state) {
            state.termsOfPartnership = true
        },
        openPrivacyPolicy(state) {
            state.privacyPolicy = true
        },
        closeTermsOfService(state) {
            state.termsOfService = false
        },
        closeTermsOfUse(state) {
            state.termsOfUse = false
        },
        closePartnershipAgreement(state) {
            state.partnershipAgreement = false
        },
        closeTermsOfPartnership(state) {
            state.termsOfPartnership = false
        },
        closePrivacyPolicy(state) {
            state.privacyPolicy = false
        },
        setLoginInput(state, payload) {
            state.loginInput = payload;
        },
        setPartnerLoginInput(state, payload) {
            state.partnerLoginInput = payload;
        },
        setPasswordInput(state, payload) {
            state.passwordInput = payload;
        },
        setPartnerPasswordInput(state, payload) {
            state.partnerPasswordInput = payload;
        },
        login(state) {
            state.userLoggedin = true
            localStorage.setItem("login", true);
        },
        partnerLogin(state) {
            state.partnerLoggedin = true;
            localStorage.setItem("partnerLogin", true);
        },
        loginErrored(state) {
            state.loginErrored = true;
        },
        partnerLoginErrored(state) {
            state.partnerLoginErrored = true;
        },
        logout(state) {
            state.userLoggedin = false;
            state.user = null;
            localStorage.removeItem("user");
            localStorage.removeItem("login");
            window.$cookies.remove("name")
        },
        partnerLogout(state) {
            state.partnerLoggedin = false;
            state.partner = null;
            localStorage.removeItem("partner");
            localStorage.removeItem("partnerLogin");
            window.$cookies.remove("name")
        },
        setUser(state, payload) {
            state.user = payload;
            state.user = userData;
            // state.user = {
            //     username: 'Анна',
            //     surname: 'Солнце',
            //     birthdate: '01.01.2000',
            //     country: 'Россия',
            //     city: 'Москва',
            //     email: 'anna@yandex.ru',
            //     tel: '+71231234567',
            //     password: '12345',
            //     google: 'Анна Солнце',
            //     vkontakte: '',
            //     telegram: '',
            //     // {"payedcourse1": {"title":"CourseTitle1","link":"/somelink1","period":"55","lessons": {"lesson1":{"title":"LessonTitle1","link":"/somelessonlink1","unlocked":"true","completedQuizes":["questions1","questions2"]}}},"payedcourse2":{"title":"CourseTitle2","period":"10"}}
            //     // [{"title":"Фонетика и правила чтения. Часть 1","link":"/student-phonetics1-lessons","period":"265","lessons":[{"title":"1. Введение","link":"/student-phonetics1-lesson1","unlocked":true,"completedQuizes":["questions1","questions2"]},{"title":"2. Гласные звуки","link":"/student-phonetics1-lesson2","unlocked":true},{"title":"3. Согласные звуки","link":"/student-phonetics1-lesson3","unlocked":false},{"title":"4. Практика","link":"/student-phonetics1-lesson4","unlocked":false},{"title":"5. Алфавит","link":"/student-phonetics1-lesson5","unlocked":false},{"title":"6. Слог и ударение","link":"/student-phonetics1-lesson6","unlocked":false},{"title":"7. Гласные буквы","link":"/student-phonetics1-lesson7","unlocked":false},{"title":"8. Согласные буквы","link":"/student-phonetics1-lesson8","unlocked":false},{"title":"9. Дополнения","link":"/student-phonetics1-lesson9","unlocked":false},{"title":"10. Практика","link":"/student-phonetics1-lesson10","unlocked":false}]},{"title":"Фонетика и правила чтения. Часть 2","period":"55"}]
            //     payedcourses: [{
            //             title: 'Фонетика и правила чтения. Часть 1',
            //             link: '/student-phonetics1-lessons',
            //             period: '265',
            //             lessons: [{
            //                     title: '1. Введение',
            //                     link: '/student-phonetics1-lesson1',
            //                     unlocked: true,
            //                     // completedQuizes: [
            //                     //     'questions1',
            //                     //     'questions2',
            //                     // ],
            //                     quizes: [{
            //                             title: 'task1',
            //                             goal: 1,
            //                             completations: 0,
            //                         },
            //                         {
            //                             title: 'task2',
            //                             goal: 5,
            //                             completations: 0,
            //                         }
            //                     ],
            //                 },
            //                 {
            //                     title: '2. Гласные звуки',
            //                     link: '/student-phonetics1-lesson2',
            //                     unlocked: true,
            //                 },
            //                 {
            //                     title: '3. Согласные звуки',
            //                     link: '/student-phonetics1-lesson3',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '4. Практика',
            //                     link: '/student-phonetics1-lesson4',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '5. Алфавит',
            //                     link: '/student-phonetics1-lesson5',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '6. Слог и ударение',
            //                     link: '/student-phonetics1-lesson6',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '7. Гласные буквы',
            //                     link: '/student-phonetics1-lesson7',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '8. Согласные буквы',
            //                     link: '/student-phonetics1-lesson8',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '9. Дополнения',
            //                     link: '/student-phonetics1-lesson9',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '10. Практика',
            //                     link: '/student-phonetics1-lesson10',
            //                     unlocked: false,
            //                 },
            //             ],
            //         },
            //         {
            //             title: 'Фонетика и правила чтения. Часть 2',
            //             link: '/student-phonetics2-lessons',
            //             period: '55',
            //             lessons: [{
            //                     title: '1. Буква Aa',
            //                     link: '/student-phonetics2-lesson1',
            //                     unlocked: true,
            //                 },
            //                 {
            //                     title: '2. Буквы Bb, Cc, Dd',
            //                     link: '/student-phonetics2-lesson2',
            //                     unlocked: true,
            //                 },
            //                 {
            //                     title: '3. Буква Ee',
            //                     link: '/student-phonetics2-lesson3',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '4. Буквы Gg, Hh',
            //                     link: '/student-phonetics2-lesson4',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '5. Буква Ii',
            //                     link: '/student-phonetics2-lesson5',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '6. Буквы Kk, Ll, Nn',
            //                     link: '/student-phonetics2-lesson6',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '7. Буква Oo',
            //                     link: '/student-phonetics2-lesson7',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '8. Буквы Pp, Qq, Rr, Ss, Tt',
            //                     link: '/student-phonetics2-lesson8',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '9. Буквы Uu, Ww, Yy',
            //                     link: '/student-phonetics2-lesson9',
            //                     unlocked: false,
            //                 },
            //                 {
            //                     title: '10. Практика',
            //                     link: '/student-phonetics2-lesson10',
            //                     unlocked: false,
            //                 },
            //             ],
            //         }
            //     ],
            // };
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        setUserName(state, newValue) {
            state.user.username = newValue;
        },
        setUserSurname(state, newValue) {
            state.user.surname = newValue;
        },
        setUserBirthDate(state, newValue) {
            state.user.birthDate = newValue;
        },
        setUserCountry(state, newValue) {
            state.user.country = newValue;
        },
        setUserCity(state, newValue) {
            state.user.city = newValue;
        },
        setUserEmail(state, newValue) {
            state.user.email = newValue;
        },
        setUserTel(state, newValue) {
            state.user.tel = newValue;
        },
        setUserPassword(state, newValue) {
            state.user.password = newValue;
        },
        setPartner(state, payload) {
            state.partner = payload;
            state.upartnerser = partnerData;
            // state.partner = {
            //     name: 'Анна Партнёр',
            //     surname: 'Солнце',
            //     birthdate: '01.01.2000',
            //     country: 'Россия',
            //     city: 'Москва',
            //     email: 'anna@yandex.ru',
            //     tel: '+71231234567',
            //     password: '12345',
            //     google: 'Анна Солнце',
            //     vkontakte: '',
            //     telegram: '',
            // };
            localStorage.setItem("partner", JSON.stringify(state.partner));
        },
        setPartnerName(state, newValue) {
            state.partner.name = newValue;
        },
        setPartnerSurname(state, newValue) {
            state.partner.surname = newValue;
        },
        setPartnerBirthDate(state, newValue) {
            state.partner.birthDate = newValue;
        },
        setPartnerCountry(state, newValue) {
            state.partner.country = newValue;
        },
        setPartnerCity(state, newValue) {
            state.partner.city = newValue;
        },
        setPartnerEmail(state, newValue) {
            state.partner.email = newValue;
        },
        setPartnerTel(state, newValue) {
            state.partner.tel = newValue;
        },
        setPartnerPassword(state, newValue) {
            state.partner.password = newValue;
        },
    },
    getters: {
        getCount: function(state) {
            return state.count
        },
        getTermsOfService: function(state) {
            return state.termsOfService
        },
        getTermsOfUse: function(state) {
            return state.termsOfUse
        },
        getPartnershipAgreement: function(state) {
            return state.partnershipAgreement
        },
        getTermsOfPartnership: function(state) {
            return state.termsOfPartnership
        },
        getPrivacyPolicy: function(state) {
            return state.privacyPolicy
        },
        getLoginInput: function(state) {
            return state.loginInput
        },
        getPartnerLoginInput: function(state) {
            return state.partnerLoginInput
        },
        getPasswordInput: function(state) {
            return state.passwordInput
        },
        getPartnerPasswordInput: function(state) {
            return state.partnerPasswordInput
        },
        getUserLoggedin: function(state) {
            if (state.userLoggedin != null) {
                return state.userLoggedin
            } else {
                return localStorage.getItem("login");
            }
        },
        getPartnerLoggedin: function(state) {
            if (state.partnerLoggedin != null) {
                return state.partnerLoggedin
            } else {
                return localStorage.getItem("partnerLogin");
            }
        },
        getLoginErrored: function(state) {
            return state.loginErrored
        },
        getPartnerLoginErrored: function(state) {
            return state.partnerLoginErrored
        },
        getUser: function(state) {
            // return state.user
            // return JSON.parse(localStorage.getItem("user"));
            if (state.user != null) {
                return state.user
            } else {
                return JSON.parse(localStorage.getItem("user"));
            }
        },
        getPartner: function(state) {
            // return state.user
            // return JSON.parse(localStorage.getItem("user"));
            if (state.partner != null) {
                return state.partner
            } else {
                return JSON.parse(localStorage.getItem("partner"));
            }
        }
    }
})

export default store