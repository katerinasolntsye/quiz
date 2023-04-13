<template>
  <div class="header">
  <header>
        <div id="header_menu_background">
            <div id="header_menu">
                <div id="header_menu_content">
                    <div id="header_right">
                        <!-- <a id="header_right_img" href="index.html" title="Главная"></a> -->
                        <router-link id="header_right_img" to="/" title="Главная"></router-link>
                        <!-- <a id="header_right_text" href="lessons-ph.html">Курсы</a> -->
                        <router-link id="header_right_text" to="/partner" target="_blank">Личный кабинет</router-link>
                    </div>
                    <div id="header_left">
                        <!-- <a class="header_left_text" href="profile.html">Профиль</a> -->
                        <router-link class="header_left_text" to="/partner/profile">Профиль</router-link>
                        <span @click="showPopupPartnerLogin=true; $store.commit('partnerLogout')" class="header_left_text header_top_text">
                        <router-link to="/">Выход</router-link></span>
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
    <!-- <nav>
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
    </nav> -->
    </div>
</template>

<script>
// import axios from 'axios'

export default {
  props: {
    msg: String
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    document.querySelector(".header").oncopy = function logCopy(event) {
        event.preventDefault();
      }

    //   document.querySelector(".header").ondragstart = function noselect(event) {
    //     event.preventDefault();
    //   };

    //   document.querySelector(".header").onselectstart = function noselect(event) {
    //     event.preventDefault();
    //   };

      document.querySelector(".header").oncontextmenu = function noselect(event) {
        event.preventDefault();
      };
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
    padding: 3px 0 11px 35px;
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
