<template>
  <div class="login-container">
    <form class="login">
      <!-- <h1>Вход</h1> -->
      <p>
        <router-link to="/main">Главная</router-link>
      </p>
      <!-- <form class="pop-up"> -->
      <!-- <label for=""> -->
      <label>
      <!-- <p>E-mail:</p> -->
        <!-- <input type="text" name="" id="" v-model="userEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }"> -->
        <input type="text" v-model="userEmail" placeholder="Логин" autocomplete="email" :class="{ errored: emailError }">
      </label>
      <!-- <label for=""> -->
      <label>
      <!-- <p>Пароль:</p> -->
        <!-- <input type="password" name="" id="" v-model="userPassword1" placeholder="•••••••••" :class="{ errored: password1Error }"> -->
        <input type="password" v-model="userPassword1" placeholder="•••••••••" autocomplete="current-password" :class="{ errored: password1Error }">
      </label>
      <p v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p>
      <p v-if="emailError">{{emailError}}</p>
      <p v-if="password1Error" style="white-space: pre;">{{password1Error}}</p>
      <button @click.prevent="loginUser()">
        <!-- $store.dispatch('login') -->
        <!-- <router-link to="/student">Войти</router-link> -->
        Войти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  // props: {
  //   msg: String
  // },
  data: () => ({

  }),
  mounted() {
    document.title = "Вход";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.88); */
  background-color: #ffffff;
}

.login {
  position: fixed;
  top: 35%;
  left: 40%;
  color: #262626;
  /* background: #f7f7f7; */
}

h1 {
    margin: 25px 0;
    padding: 0 10px;
    font-size: 140%;
}

p {
  margin: 0;
  padding: 0 0 25px 10px;
}

input {
  margin-bottom: 25px;
}
</style>
