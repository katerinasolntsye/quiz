<template>
  <main>
      <!-- <div class="page-shadow" @click="showPopup=false" v-if="showPopup"
      style="position:fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.88); z-index: 990;"></div> -->
      <p>Текст</p>
      <img id='zb-1' class='sound-btn' src='../assets/sound-off1.png' />
      <!-- <p @click="showPopup=true">Регистрация</p>
      <div class="pop-up" v-if="showPopup">
        <span @click="showPopup=false">x</span>
        <label for="">
          <p>Имя:</p>
          <input type="text" name="" id="" v-model="userName">
          {{userName}}
        </label>
        <label for="">
          <p>E-mail:</p>
          <input type="text" name="" id="" v-model="userEmail">
        </label>
        <label for="">
          <p>Пароль:</p>
          <input type="password" name="" id="" v-model="userPassword">
        </label>
        <button @click="regUser()">Отправить</button>
      </div> -->
      <div id="start-quiz-1" class="start-quiz task_title">
        <p>Задание 1</p>
      </div>
      <div id="close-quiz-1" class="close-quiz task_title">
        <p>Задание 1</p>
      </div>
      <QuizComponent id="quiz-1" class="quiz" :quiz-data="questions1" />
      <div id="start-quiz-2" class="start-quiz task_title">
        <p>Задание 2</p>
      </div>
      <div id="close-quiz-2" class="close-quiz task_title">
        <p>Задание 2</p>
      </div>
      <QuizComponent id="quiz-2" class="quiz" :quiz-data="questions2" />
  </main>
</template>

<script>
import QuizComponent from './QuizComponent.vue'

export default {
  components: {
    QuizComponent
  },
  data() {
    return {
      // showPopup: false,
      // userName: null,
      // userEmail: null,
      // userPassword: null,
      questions1: [
        {
          question:
            "Rolex is a company that specializes in what type of product? <img id='zb-1' class='sound-btn' src='./images/sound-off1.png'>",
          answers: { a: "<img id='zb-1' class='sound-btn' src='./images/sound-off1.png'> <span>Bags</span>", b: "Watches", c: "Shoes", d: "Laptops" },
          correctAnswer: "b",
        },
        {
          question: "When did Facebook launch? <span style='color: red'>123</span>",
          answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
          correctAnswer: "d",
        },
        {
          question:
            "Albert Einstein had trouble with mathematics when he was in school?",
          answers: { a: "True", b: "False" },
          correctAnswer: "b",
        },
      ],
      questions2: [
        {
          question:
            "AAAAA <img id='zb-1' class='sound-btn' src='./images/sound-off1.png'>",
          answers: { a: "AAA", b: "SSS", c: "DDD", d: "FFF" },
          correctAnswer: "b",
        },
        {
          question: "When did Facebook launch? <span style='color: red'>123</span>",
          answers: { a: "2005", b: "2008", c: "2003", d: "2004" },
          correctAnswer: "d",
        },
        {
          question:
            "Albert Einstein had trouble with mathematics when he was in school?",
          answers: { a: "True", b: "False" },
          correctAnswer: "b",
        },
      ],
    }
  },
  // methods: {
  //   regUser() {
  //     let user = {};
  //     user.name = this.userName;
  //     user.email = this.userEmail;
  //     user.password = this.userPassword;
  //     JSON.stringify(user);
  //     console.log(user);
  //   },
  // }
}
</script>

<style scoped>
/* img.sound-btn {
    width: 20px;
}

img.sound-btn:hover {
    cursor: pointer;
} */

/* .pop-up {
  position: fixed;
  top: 35%;
  left: 40%;
  background: white;
  padding: 20px;
  z-index: 990;
} */
</style>