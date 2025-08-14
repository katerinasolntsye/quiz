import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as studentsData from '../mock/students.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        students: null,
    },
    getters: {
        getStudents: function(state) {
            // return state.students
            // return JSON.parse(localStorage.getItem("students"));
            if (state.students != null) {
                return state.students
            } else {
                return JSON.parse(localStorage.getItem("students"));
            }
        },
    },
    mutations: {
        setStudent(state, payload) {
            state.students = payload;
            state.students = studentsData;
            // state.user = {
            //   username: 'Анна',
            //   surname: 'Солнце',
            //   birthdate: '01.01.2000',
            //   country: 'Россия',
            //   city: 'Москва',
            //   email: 'anna@yandex.ru',
            //   tel: '+71231234567',
            //   password: '12345',
            //   google: 'Анна Солнце',
            //   vkontakte: '',
            //   telegram: '',
            // };
            localStorage.setItem("students", JSON.stringify(state.students));
        },
    },
    actions: {
        async login({ commit }, email, password) {
            // commit('setLoginInput', email)
            // commit('setPasswordInput', password)
            console.log(axios, email, password);

            await fetch('https://httpbin.org/get')
                .then((response) => {
                    let result = response.json()
                    commit('login')
                    commit('setStudents', result)
                    document.cookie = "name=loggedin; SameSite=None; Secure";

                    console.log(response)
                })
                .catch(() => {
                    commit('loginErrored')
                })

            // var myHeaders = new Headers();
            // myHeaders.append("Content-Type", "application/json");

            // var raw = JSON.stringify({
            //     "email": email,
            //     "password": password
            // });

            // var requestOptions = {
            //     method: 'POST',
            //     headers: myHeaders,
            //     body: raw,
            //     redirect: 'follow'
            // };

            // await fetch("http://localhost:8000/signin", requestOptions)
            //     .then(response => response.json())
            //     .then(result => {
            //         // console.log(result)

            //         commit('login')
            //         commit('setUser', result)
            //         document.cookie = "name=loggedin; SameSite=None; Secure";
            //     })
            //     // .catch(error => console.log('error', error));
            //     .catch(() => {
            //         commit('loginErrored')
            //     })
        },
    },
    modules: {}
})