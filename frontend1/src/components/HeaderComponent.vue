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
                        <a class="header_left_text" href="index.html">Выход</a>
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
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
    z-index: 900;
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

header a {
    color: #f0f0f0;
}

header a:visited {
    color: #f0f0f0;
}

header a:hover {
    text-decoration: none;
    color: #b2b2b2;
}
</style>
