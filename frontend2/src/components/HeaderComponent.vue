<template>
  <div class="header">
    <!-- <h1>{{ msg }}</h1> -->
  <header>
        <div id="header_menu_background">
            <div id="header_menu">
                <div id="header_menu_content">
                    <div id="header_right">
                        <a id="header_right_img" href="index.html" title="Главная"></a>
                        <a id="header_right_text" href="lessons-ph.html">Уроки</a>
                    </div>
                    <div id="header_left">
                        <a class="header_left_text" href="profile.html">Профиль</a>
                        <!-- <a class="header_left_text" href="index.html">Выход</a> -->
                        <div class="page-shadow" @click="showPopupLogin=false, showPopupSignup=false" v-if="(showPopupLogin||showPopupSignup)"
      style="position:fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.88); z-index: 920;"></div>
                        <span @click="showPopupLogin=true" class="header_left_text header_top_text">Вход</span>
                        <div class="pop-up" v-if="showPopupLogin">
                            <span @click="showPopupLogin=false">&times;</span>
                            <p class="pop-up-title">Вход</p>
                            <label for="">
                            <!-- <p>E-mail:</p> -->
                            <input type="text" name="" id="" v-model="userEmail" placeholder="Ваш e-mail">
                            </label>
                            <label for="">
                            <!-- <p>Пароль:</p> -->
                            <input type="password" name="" id="" v-model="userPassword1" placeholder="•••••••••">
                            </label>
                            <button @click="loginUser()" style="margin: 0 0 1.5em 0;">Войти</button>
                            <p>Нет аккаунта?</p>
                            <button @click="showPopupSignup=true, showPopupLogin=false">Зарегистрироваться</button>
                        </div>
                        <div class="pop-up" v-if="showPopupSignup">
                            <span @click="showPopupSignup=false, showPopupLogin=false">&times;</span>
                            <p class="pop-up-title">Регистрация</p>
                            <label for="">
                            <!-- <p>Имя:</p> -->
                            <input type="text" name="" id="" v-model="userName" placeholder="Ваше имя">
                            {{userName}}
                            </label>
                            <label for="">
                            <!-- <p>E-mail:</p> -->
                            <input type="text" name="" id="" v-model="userEmail" placeholder="Ваш e-mail">
                            </label>
                            <label for="">
                            <!-- <p>Пароль:</p> -->
                            <input type="password" name="" id="" v-model="userPassword1" placeholder="•••••••••">
                            <input type="password" name="" id="" v-model="userPassword2" placeholder="Повторите Ваш пароль">
                            </label>
                            <button @click="regUser()">Отправить</button>
                            <p class="profile_privacy">Нажимая, вы принимаете условия
                                <br />
                                <a class="profile_privacy" href="pripolicy.html">Политики конфиденциальности</a>.
                            </p>
                            <p>У Вас уже есть аккаунт?</p>
                            <button @click="showPopupLogin=true, showPopupSignup=false">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header_logo">
            <a href="index.html">
                <img src="../assets/logo.png" alt="FullEng - Главная" width="159" title="Главная" />
            </a>
        </div>
    </header>
    <nav>
        <ul>
            <li>
                <a href="#">Фонетика</a>
                <ul>
                    <li><a href="lessons-ph1.html">Часть 1</a></li>
                    <li><a href="lessons-ph2.html">Часть 2</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Грамматика</a>
                <ul>
                    <li><a href="#">Часть 1</a></li>
                    <li><a href="#">Часть 2</a></li>
                    <li><a href="#">Часть 3</a></li>
                </ul>
            </li>
            <li><a href="#" title="В разработке">Лексика</a></li>
        </ul>
    </nav>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
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
    }
  },
  methods: {
    regUser() {
      let user = {};
      user.username = this.userName;
    //   user.email = this.userEmail;
      user.password = this.userPassword;
    //   user.password2 = this.userPassword2;
      JSON.stringify(user);
      console.log(user);

      axios.post('http://localhost:8000/signup',
    // '{\n  "username": "johndoe",\n  "password": "mysecurepassword"\n}',
    {
        'username': 'johndoe',
        'password': 'mysecurepassword'
    },
    {
        headers: {
            'Content-Type': 'application/json'
        }
    }
).then(response => {
        console.log(response + '123');
    }).catch(error => {
        console.log(error)
        this.errored = true
      });
    },
    loginUser() {
      let user = {};
      user.email = this.userEmail;
      user.password1 = this.userPassword1;
      JSON.stringify(user);
      console.log(user);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
