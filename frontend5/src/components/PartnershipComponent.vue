<template>
  <div class="main">
  <!-- <HeaderComponent1 /> -->
  <main>
    <div class="bottomground">
    <div class="topground">
      <h1>Партнёрская программа</h1>
      <h2>Рекомендуйте друзьям наши курсы и получайте за это деньги!</h2>
      <div class="page-shadow" @click="showPopupPartnerLogin=false, showPopupPartnerSignup=false" v-if="(showPopupPartnerLogin||showPopupPartnerSignup)"
      style="position:fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.88); z-index: 920;"></div>
      <p>
        <span class="open-pop-up" @click="showPopupPartnerLogin=true">Вход</span>
      </p>
      <!-- <form class="pop-up" v-if="showPopupPartnerLogin" autocomplete="on"> -->
      <form class="pop-up" v-if="showPopupPartnerLogin">
        <span @click="showPopupPartnerLogin=false">&times;</span>
        <p class="pop-up-title">Вход<br />для партнёров</p>
        <!-- <label for=""> -->
        <label>
          <!-- <p>E-mail:</p> -->
          <!-- <input type="text" name="" id="" v-model="partnerEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }"> -->
          <input type="text" v-model="partnerEmail" placeholder="Ваш e-mail" autocomplete="email" :class="{ errored: emailError }">
        </label>
        <!-- <label for=""> -->
        <label>
          <!-- <p>Пароль:</p> -->
          <!-- <input type="password" name="" id="" v-model="partnerPassword1" placeholder="•••••••••" :class="{ errored: password1Error }"> -->
          <input type="password" v-model="partnerPassword1" placeholder="•••••••••" autocomplete="current-password" :class="{ errored: password1Error }">
        </label>
        <p v-if="$store.getters.getPartnerLoginErrored">Неверный логин и/или пароль.</p>
        <p v-if="emailError">{{emailError}}</p>
        <p v-if="password1Error" style="white-space: pre;">{{password1Error}}</p>
        <button @click.prevent="loginPartner()" style="margin: 0 0 1.5em 0;">
          <!-- $store.dispatch('login') -->
          <!-- <router-link to="/partner">Войти</router-link> -->
          Войти
        </button>
        <p>Нет партнёрского аккаунта?</p>
        <button @click.prevent="showPopupPartnerSignup=true, showPopupPartnerLogin=false">Зарегистрироваться</button>
      </form>
      <!-- <form class="pop-up" v-if="showPopupPartnerSignup" autocomplete="on"> -->
      <form class="pop-up" v-if="showPopupPartnerSignup">
        <span @click="showPopupPartnerSignup=false, showPopupPartnerLogin=false">&times;</span>
        <p class="pop-up-title">Регистрация<br />для партнёров</p>
        <div>
        <!-- <label for=""> -->
        <label>
          <!-- <p>Имя:</p> -->
          <!-- <input type="text" name="" id="" v-model="partnerName" placeholder="Ваше имя" :class="{ errored: nameError }"> -->
          <input type="text" v-model="partnerName" placeholder="Ваше имя" autocomplete="given-name" :class="{ errored: nameError }">
        </label>
        <!-- <label for=""> -->
        <label>
          <!-- <p>E-mail:</p> -->
          <!-- <input type="text" name="" id="" v-model="partnerEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }"> -->
          <input type="text" v-model="partnerEmail" placeholder="Ваш e-mail" autocomplete="email" :class="{ errored: emailError }">
        </label>
        <!-- <label for=""> -->
        <label>
          <!-- <p>Пароль:</p> -->
          <!-- <input type="password" name="" id="" v-model="partnerPassword1" placeholder="•••••••••" :class="{ errored: password1Error }">
          <input type="password" name="" id="" v-model="partnerPassword2" placeholder="Подтвердите Ваш пароль" :class="{ errored: password2Error }"> -->
          <input type="password" v-model="partnerPassword1" placeholder="•••••••••" autocomplete="new-password" :class="{ errored: password1Error }">
          <input type="password" v-model="partnerPassword2" placeholder="Подтвердите Ваш пароль" autocomplete="new-password" :class="{ errored: password2Error }">
        </label>
        </div>
        <p v-if="$store.getters.getPartnerLoginErrored">Неверный логин и/или пароль.</p>
        <p v-if="nameError">{{nameError}}</p>
        <p v-if="emailError">{{emailError}}</p>
        <p v-if="password1Error" style="white-space: pre;">{{password1Error}}</p>
        <p v-if="password2Error">{{password2Error}}</p>
        <button @click="regPartner()">
          <router-link to="/partner">Отправить</router-link>
        </button>
        <p class="profile_privacy">Нажимая, вы принимаете условия
          <br />
          <router-link class="profile_privacy" to="/privacy-policy">Политики конфиденциальности</router-link>.
        </p>
        <p>У Вас уже есть партнёрский<br />аккаунт?</p>
        <button @click.prevent="showPopupPartnerLogin=true, showPopupPartnerSignup=false">Войти</button>
      </form>
      <h2>Как это работает?</h2>
      <p><i class="bold_blue">Шаг 1.</i> Зарегистрируйтесь в нашей партнёрской программе.
        <br /><i class="bold_blue">Шаг 2.</i> Поделитесь своим индивидуальным промокодом со знакомыми или подписчиками в любых соц. сетях (промокод генерируется автоматически при регистрации в программе).
        <br /><i class="bold_blue">Шаг 3.</i> Порекомендуйте друзьям наши курсы и расскажите, что, указывая при оплате ВАШ промокод, их ждёт приятный бонус (скидка 10%).
        <br /><i class="bold_blue">Шаг 4.</i> Получите своё вознаграждение (10% с каждой оплаты)!
      </p>
      <p>Как можно потратить данное вознаграждение?
        <br />Как хотите! Вознаграждение — это реальные деньги, которые вернутся на Ваш счёт!</p>
      <p>Станьте участником улучшения английского Ваших друзей!</p>
      <p>
        <span class="open-pop-up">Вход</span>
      </p>
      <p>Есть вопросы?
        <br />Напишите нам в <router-link class="footer-link" to="/contacts">техподдержку</router-link>.
      </p>
      <p>Также Вы можете ознакомиться с <span @click="$store.commit('openTermsOfPartnership')">
          <router-link class="footer-link" to="/terms-of-partnership">Условиями партнёрской программы</router-link>
      </span>.
      </p>
    </div>
    </div>
      <div class="partnership-footer">
        <p>
          <span @click="$store.commit('openPartnershipAgreement')">
            <router-link class="footer-link" to="/partnership-agreement">Партнёрское соглашение</router-link>
          </span>
        </p>
        <p>
          <span @click="$store.commit('openTermsOfPartnership')">
            <router-link class="footer-link" to="/terms-of-partnership">Условия партнёрской программы</router-link>
          </span>
        </p>
      </div>
  </main>
  </div>
</template>

<script>
// import HeaderComponent1 from './HeaderComponent1.vue'
import axios from 'axios'
// import * as userData from '../mock/user.json'

export default {
  name: 'PartnershipComponent',
  components: {
    // HeaderComponent1
  },
  props: {
    msg: String
  },
  mounted() {  
    document.title = "FullEng – Партнёрская программа";
  }, 
  data() {
    return {
      showPopupPartnerSignup: false,
      showPopupPartnerLogin: false,
      partnerName: null,
      partnerEmail: null,
      partnerPassword1: null,
      partnerPassword2: null,
      nameError: null,
      emailError: null,
      password1Error: null,
      password2Error: null,
    }
  },
  methods: {
    regPartner() {
        if(!this.partnerName) {
            this.nameError = "Введите имя.";
        } else if(!this.validName(this.partnerName)) {
            this.nameError = "Введите корректное имя.";
        } else {
            this.nameError = null;
        }

        if(!this.partnerEmail) {
            this.emailError = "Введите e-mail.";
        } else if(!this.validEmail(this.partnerEmail)) {
            this.emailError = "Введите корректный e-mail.";
        } else {
            this.emailError = null;
        }

        if(!this.partnerPassword1) {
            this.password1Error = "Введите пароль.";
        } else if(!this.validPassword(this.partnerPassword1)) {
            this.password1Error = "Введите корректный пароль:\nминимум 4 символа и без пробелов.";
        } else {
            this.password1Error = null;
        }

        if(!this.partnerPassword2) {
            this.password2Error = "Введите 2-ой проверочный пароль.";
        } else if(this.partnerPassword1 !== this.partnerPassword2) {
            this.password2Error = "1-ый и 2-ой пароли должны совпадать.";
        } else {
            this.password2Error = null;
        }
        
        if(!this.nameError && !this.emailError && !this.password1Error) {
            // this.$store.dispatch('login', this.userEmail, this.userPassword1);

            let partner = {};
            partner.name = this.partnerName;
            partner.email = this.partnerEmail;
            partner.password = this.partnerPassword1;
            //   user.password2 = this.userPassword2;
            JSON.stringify(partner);
            console.log(partner);

            axios.post('https://httpbin.org/post',
            // axios.post('http://localhost:8000/signup',
            // '{\n  "username": "johndoe",\n  "password": "mysecurepassword"\n}',
            {
                'name': partner.name,
                'email': partner.email,
                'password': partner.password,
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
    loginPartner() {
        // let x = userData;
        // console.log(x.payedcourses);

    //   let user = {};
    //   user.email = this.userEmail;
    //   user.password1 = this.userPassword1;
    //   JSON.stringify(user);
    //   console.log(user);
    
        if(!this.partnerEmail) {
            this.emailError = "Введите e-mail.";
        } else if(!this.validEmail(this.partnerEmail)) {
            this.emailError = "Введите корректный e-mail.";
        } else {
            this.emailError = null;
        }

        if(!this.partnerPassword1) {
            this.password1Error = "Введите пароль.";
        } else if(!this.validPassword(this.partnerPassword1)) {
            this.password1Error = "Введите корректный пароль:\nминимум 4 символа и без пробелов.";
        } else {
            this.password1Error = null;
        }
        
        if(!this.emailError && !this.password1Error) {
            this.$store.dispatch('setPartnerEmail', this.partnerEmail);
            this.$store.dispatch('setPartnerPassword', this.partnerPassword1);

            this.$store.dispatch('partnerLogin', this.partnerEmail, this.partnerPassword1);
            this.$router.push('/partner');
        }

        // fetch("https://httpbin.org/post", {
        // // fetch("http://localhost:8000/signin", {
        //   method: "post",
        //   headers: {
        //       'Accept': 'application/json',
        //       'Content-Type': 'application/json'
        //   },
        //   //make sure to serialize your JSON body
        //   body: JSON.stringify({
        //   email: this.partnerEmail,
        //   password: this.partnerPassword1
        //   })
        // })
        // .then( () => {
        // //do something awesome that makes the world a better place
        // });
    },
    validEmail: function (partnerEmail) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(partnerEmail);
    },
    validName: function (partnerName) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(partnerName);
    },
    validPassword: function (partnerPassword) {
      var re = /^([^\s]){4,}$/;
      return re.test(partnerPassword);
    },
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 0 auto;
  text-align: justify;
}

.bottomground {
  width: 782px;
  padding: 27px 53px 0;
  background-color: #ffffff;
  margin: -27px -53px 0;
}

.topground {
  width: 782px;
  background-color: #f7f7f7;
  border-radius: 7px;
  padding: 27px 53px 0;
  margin: -27px -53px 0;
}

a:link {
    color: #808080;
}

a:visited {
    color: #808080;
}

a:hover {
    color: #b2b2b2;
}

.open-pop-up {
  font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 7px;
    background-color: #012269;
    color: #ffffff;
    transition: all .3s;
    margin: 6px 8px 0 0;
    /* padding: 4px 8px; */
    padding: 8px 16px;
}

.open-pop-up:hover {
  cursor: pointer;
  color: #b2b2b2;
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
  font-size: 89%;
}

.pop-up span {
    float: right;
    font-weight: bold;
    font-size: 125%;
    cursor: pointer;
}

.pop-up p {
    margin: 0 0 0.7em 0;
    padding: 0;
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
}

.pop-up button:hover {
    color: #b2b2b2;
    cursor: pointer;
}

.pop-up button:last-child {
    margin: 0;
}

.pop-up a {
  text-decoration: none;
  color: #ffffff;
}

.pop-up a:hover {
  color: #b2b2b2;
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
.partnership-footer {
  background-color: #ffffff;
  width: 888px;
  padding-top: 13px;
  margin: 0px -53px -38px;
}

.partnership-footer p {
  font-size: 78%;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
}
</style>