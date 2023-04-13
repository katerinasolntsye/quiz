<template>
  <div class="main">
  <main>
      <h1>КУРС 2!!! Урок 3</h1>
        <div>
            <h2>Зачем нужна транскрипция?</h2>
            <p>Текст</p>
        </div>
        <div id="start-quiz-1" class="start-quiz task_title">
            <p>Задание 1</p>
        </div>
        <div id="close-quiz-1" class="close-quiz task_title">
            <p>Задание 1</p>
        </div>
        <QuizComponent id="quiz-1" class="quiz" :quiz-data="questions1" />
  </main>
  </div>
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
            "ААА",
          answers: { a: "ААА", b: "ААА" },
          correctAnswer: "ААА",
        },
      ],
    }
  },
  mounted() {  
    document.title = "FullEng – Урок 1. Введение";
  },
}
</script>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
}

main {
  flex: 1 0 auto;
}
</style>