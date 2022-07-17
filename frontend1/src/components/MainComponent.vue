<template>
  <main>
      <p>Текст</p>
      <img id='zb-1' class='sound-btn' src='../assets/sound-off1.png' />
      <QuizComponent :quiz-data="questions1" />
      <QuizComponent :quiz-data="questions2" />
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
      questions1: [
        {
          question:
            "Rolex is a company that specializes in what type of product? <img :src='getImgUrl()' width='20' alt='Звук' /> <img id='zb-1' class='sound-btn' src='./images/sound-off1.png'>",
          soundQuestionUrl: "./assets/sound.mp3",
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
            "AAAAA <img :src='getImgUrl()' width='20' alt='Звук' /> <img id='zb-1' class='sound-btn' src='./images/sound-off1.png'>",
          soundQuestionUrl: "./assets/sound.mp3",
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
  }
}
</script>

<style scoped>
/* img.sound-btn {
    width: 20px;
}

img.sound-btn:hover {
    cursor: pointer;
} */
</style>