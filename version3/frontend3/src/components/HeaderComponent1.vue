<template>
  <div class="header">
  <header>
        <div id="header_menu_background">
            <div id="header_menu">
                <div id="header_menu_content">
                    <div id="header_right">
                        <router-link id="header_right_img" to="/" title="Главная"></router-link>
                    </div>
                    <div id="header_left">
                        <div class="page-shadow" @click="showPopupLogin=false, showPopupSignup=false" v-if="(showPopupLogin||showPopupSignup)"
      style="position:fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.88); z-index: 920;"></div>
                        <span @click="showPopupLogin=true" class="header_left_text header_top_text">
                        Вход</span>
                        <form class="pop-up" v-if="showPopupLogin">
                            <span @click="showPopupLogin=false">&times;</span>
                            <p class="pop-up-title">Вход</p>
                            <label for="">
                            <!-- <p>E-mail:</p> -->
                            <input type="text" name="" id="" v-model="userEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }">
                            </label>
                            <label for="">
                            <!-- <p>Пароль:</p> -->
                            <input type="password" name="" id="" v-model="userPassword1" placeholder="•••••••••" :class="{ errored: password1Error }">
                            </label>
                            <p v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p>
                            <p v-if="emailError">{{emailError}}</p>
                            <p v-if="password1Error" style="white-space: pre;">{{password1Error}}</p>
                            <button @click.prevent="loginUser()" style="margin: 0 0 1.5em 0;">
                                <!-- $store.dispatch('login') -->
                                <!-- <router-link to="/student">Войти</router-link> -->
                                Войти
                            </button>
                            <p>Нет аккаунта?</p>
                            <button @click.prevent="showPopupSignup=true, showPopupLogin=false">Зарегистрироваться</button>
                        </form>
                        <form class="pop-up" v-if="showPopupSignup">
                            <span @click="showPopupSignup=false, showPopupLogin=false">&times;</span>
                            <p class="pop-up-title">Регистрация</p>
                            <label for="">
                            <!-- <p>Имя:</p> -->
                            <input type="text" name="" id="" v-model="userName" placeholder="Ваше имя" :class="{ errored: nameError }">
                            </label>
                            <label for="">
                            <!-- <p>E-mail:</p> -->
                            <input type="text" name="" id="" v-model="userEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }">
                            </label>
                            <label for="">
                            <!-- <p>Пароль:</p> -->
                            <input type="password" name="" id="" v-model="userPassword1" placeholder="•••••••••" :class="{ errored: password1Error }">
                            <input type="password" name="" id="" v-model="userPassword2" placeholder="Подтвердите Ваш пароль" :class="{ errored: password2Error }">
                            </label>
                            <p v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p>
                            <p v-if="nameError">{{nameError}}</p>
                            <p v-if="emailError">{{emailError}}</p>
                            <p v-if="password1Error" style="white-space: pre;">{{password1Error}}</p>
                            <p v-if="password2Error">{{password2Error}}</p>
                            <button @click="regUser()">
                                <router-link to="/student">Отправить</router-link>
                            </button>
                            <p class="profile_privacy">Нажимая, вы принимаете условия
                                <br />
                                <router-link class="profile_privacy" to="/privacy-policy">Политики конфиденциальности</router-link>.
                            </p>
                            <p>У Вас уже есть аккаунт?</p>
                            <button @click.prevent="showPopupLogin=true, showPopupSignup=false">Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="header_logo">
            <router-link to="/" title="Главная">
                <img src="../assets/logo.png" alt="FullEng - Главная" width="159" title="Главная" />
            </router-link>
        </div>
    </header>
    </div>
</template>

<script>
import axios from 'axios'
import * as userData from '../mock/user.json'

export default {
  props: {
    msg: String
  },
  data() {
    return {
        showPopupSignup: false,
        showPopupLogin: false,
      userName: null,
      userEmail: null,
      userPassword1: null,
      userPassword2: null,
      nameError: null,
      emailError: null,
      password1Error: null,
      password2Error: null,
    }
  },
  methods: {
    regUser() {
        if(!this.userName) {
            this.nameError = "Введите имя.";
        } else if(!this.validName(this.userName)) {
            this.nameError = "Введите корректное имя.";
        } else {
            this.nameError = null;
        }

        if(!this.userEmail) {
            this.emailError = "Введите e-mail.";
        } else if(!this.validEmail(this.userEmail)) {
            this.emailError = "Введите корректный e-mail.";
        } else {
            this.emailError = null;
        }

        if(!this.userPassword1) {
            this.password1Error = "Введите пароль.";
        } else if(!this.validPassword(this.userPassword1)) {
            this.password1Error = "Введите корректный пароль:\nминимум 4 символа и без пробелов.";
        } else {
            this.password1Error = null;
        }

        if(!this.userPassword2) {
            this.password2Error = "Введите 2-ой проверочный пароль.";
        } else if(this.userPassword1 !== this.userPassword2) {
            this.password2Error = "1-ый и 2-ой пароли должны совпадать.";
        } else {
            this.password2Error = null;
        }
        
        if(!this.nameError && !this.emailError && !this.password1Error) {
            // this.$store.dispatch('login', this.userEmail, this.userPassword1);

            let user = {};
            user.username = this.userName;
            user.email = this.userEmail;
            user.password = this.userPassword1;
            //   user.password2 = this.userPassword2;
            JSON.stringify(user);
            console.log(user);

            axios.post('http://localhost:8000/signup',
            // '{\n  "username": "johndoe",\n  "password": "mysecurepassword"\n}',
            {
                'username': user.username,
                'useremail': user.email,
                'userpassword': user.password,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                console.log(response + '123');
            }).catch(error => {
                console.log(error);
                this.errored = true;
            });
        }
    },
    loginUser() {
        let x = userData;
        console.log(x.payedcourses);

    //   let user = {};
    //   user.email = this.userEmail;
    //   user.password1 = this.userPassword1;
    //   JSON.stringify(user);
    //   console.log(user);
    
        if(!this.userEmail) {
            this.emailError = "Введите e-mail.";
        } else if(!this.validEmail(this.userEmail)) {
            this.emailError = "Введите корректный e-mail.";
        } else {
            this.emailError = null;
        }

        if(!this.userPassword1) {
            this.password1Error = "Введите пароль.";
        } else if(!this.validPassword(this.userPassword1)) {
            this.password1Error = "Введите корректный пароль:\nминимум 4 символа и без пробелов.";
        } else {
            this.password1Error = null;
        }
        
        if(!this.emailError && !this.password1Error) {
            this.$store.dispatch('setUserEmail', this.userEmail);
            this.$store.dispatch('setUserPassword', this.userPassword1);

            this.$store.dispatch('login', this.userEmail, this.userPassword1);
            this.$router.push('/student');
        }

        fetch("http://localhost:8000/signin", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
        username: this.userEmail,
        password: this.userPassword1
        })
        })
        .then( () => {
        //do something awesome that makes the world a better place
        });
    },
    validEmail: function (userEmail) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(userEmail);
    },
    validName: function (userName) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(userName);
    },
    validPassword: function (userPassword) {
      var re = /^([^\s]){4,}$/;
      return re.test(userPassword);
    },
    // checkFormLogin(e) {
    //     e.preventDefault();
    //     console.log("OK");
    // }
  }
}
</script>

<style scoped>
nav {
    background-color: #f7f7f7;
    /* width: 888px; */
    width: 782px;
    margin: 0 auto 15px;
    padding: 11px 53px 12px;
    border-radius: 7px;
    display: flex;
    justify-content: space-around;
}

nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    background-color: #f7f7f7;
}

nav ul ul {
    display: none;
    position: absolute;
}

nav ul li:hover ul {
    display: block;
    border-radius: 7px;
}

nav>ul>li {
    float: left;
}

nav ul li a {
    display: inline-block;
    width: 260px;
    text-align: center;
}

nav a:link {
    color: #262626;
}

nav a:visited {
    color: #262626;
}

nav a:hover {
    text-decoration: none;
    color: #808080;
    background-color: #f7f7f7;
}

/*Header*/

header {
    font-size: 89%;
    font-weight: 600;
    color: #f0f0f0;
    margin: 0;
    padding: 0;
}

#header_menu_background {
    background-color: #c80f2e;
    height: 50px;
}

#header_menu {
    background-color: rgba(200, 15, 46, 0.9);
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 910;
}

#header_menu_content {
    width: 930px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: stretch;
}

#header_right {
    padding: 10px 0;
    display: flex;
    align-content: stretch;
}

#header_right_img {
    background-size: 35px 30px;
    background-repeat: no-repeat;
    background-image: url(../assets/crown-header-94.png);
    background-position: center center;
    width: 35px;
}

#header_right_img:hover {
    background-size: 35px 30px;
    background-repeat: no-repeat;
    background-image: url(../assets/crown-header-70.png);
    background-position: center center;
    width: 35px;
}

#header_right_text_main {
    padding: 3px 0 3px 50px;
    display: flex;
    align-content: stretch;
}

#header_right_text {
    padding: 3px 0 11px 15px;
}

#header_left {
    padding: 10px 0;
    display: flex;
    align-content: stretch;
}

.header_left_text {
    padding: 3px 0 11px 35px;
}

#header_logo {
    background-color: #ffffff;
    width: 888px;
    margin: 0 auto;
    padding: 27px 0 27px 1px;
}

/* #tip {
    position: fixed;
} */

header a, span.header_top_text {
    color: #f0f0f0;
}

header a:visited, span.header_top_text:visited {
    color: #f0f0f0;
}

header a:hover, span.header_top_text:hover {
    text-decoration: none;
    color: #b2b2b2;
    cursor: pointer;
    transition: all .3s;
}

.pop-up {
  position: fixed;
  top: 35%;
  left: 40%;
  color: #262626;
  background: #f7f7f7;
  padding: 20px;
  z-index: 950;
  font-weight: normal;
  border-radius: 7px;
}

.pop-up span {
    float: right;
    font-weight: bold;
    font-size: 125%;
    cursor: pointer;
}

.pop-up p {
    margin: 0 0 0.7em 0;
}

.pop-up-title {
    font-size: 150%;
}

.pop-up input {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    color: #262626;
    border-width: 0;
    border-radius: 7px;
    outline: 0;
    margin: 0;
    padding: 4px 8px;
    margin: 0 0 0.7em 0;
}

.pop-up input.errored {
    border: 1px solid #c80f2e;
}

.pop-up input:last-child {
    display: block;
}

.pop-up button {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 7px;
    background-color: #012269;
    color: #ffffff;
    margin-bottom: 0.33em;
    cursor: pointer;
    transition: all .3s;
}

.pop-up button:hover {
    color: #b2b2b2;
}

.pop-up button:last-child {
    margin: 0;
}

p.profile_privacy {
    font-size: 78%;
    color: #808080;
    margin: 0 0 1.5em 0;
    /* padding: 0 0 15px; */
    line-height: 1;
}

a.profile_privacy:link {
    color: #b2b2b2;
}

a.profile_privacy:visited {
    color: #b2b2b2;
}

a.profile_privacy:hover {
    text-decoration: underline;
    color: #808080;
}
</style>
