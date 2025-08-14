<template>
    <div class="menu">
      <h1>UniCourse
        <span>admin</span>
      </h1>
      <p>
        <router-link class="menu-link" to="/main">Главная</router-link>
      </p>
      <p>
        <router-link class="menu-link" to="/students">Студенты</router-link>  
      </p>
      <p>
        <router-link class="menu-link" to="/partners">Партнёры</router-link>
      </p>
      <p>
        <router-link class="menu-link" to="/promocodes">Промокоды</router-link>
      </p>
      <p>
        <router-link class="menu-link" to="/courses">Курсы</router-link>
      </p>
      <p>
        <router-link class="menu-link" to="/orders">Заказы</router-link>
      </p>
      <div class="bottom">
        <p>
            <router-link class="menu-link" style="font-family: Calibri, sans-serif; font-weight: normal;" to="/">LoginPage</router-link>
        </p>
        <button @click.prevent="loginUser()">
        <!-- $store.dispatch('login') -->
        <!-- <router-link to="/student">Войти</router-link> -->
            Выйти
        </button>
        <p><span>©</span> UniCourse</p>
      </div>
    </div>
</template>
  
<script>
export default {
    name: 'MenuComponent',
    // props: {
    //   msg: String
    // },
    data: () => ({
  
    }),
    // mounted() {
    //   document.title = "Меню";
    // },
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
    position: fixed;
    margin: 0;
    padding: 0;
    width: 241px;
    height: 100%;
    background-color: #312b33;
}

.menu h1 {
    color: #ffbf00;
}

h1 {
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    font-size: 140%;
}

h1 span {
    font-weight: normal;
    font-size: 60%;
}

.menu-link {
    text-decoration: none;
    font-size: 110%;
}

.menu-link:link {
    color: #ffffff;
}

.menu-link:visited {
    color: #ffffff;
}

.menu-link:hover {
    color: #ffbf00;
}

.bottom {
    position: fixed;
    bottom: 0;
    width: 241px;
}

.bottom button {
    margin-left: 25px;
    width: 191px;
}

.bottom p {
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    font-weight: bold;
    /* font-size: 100%; */
    color: #ffffff;
}

.bottom span {
    font-family: Cambria;
}
</style>
  