<template>
    <div class="main">
    <main>
        <h1>Урок 0. Приветствие</h1>
        <p>Рады видеть Вас на нашем курсе!</p>
        <h2>Как проходит данный курс?</h2>
        <p>
          Буква Аа <img id="zb-1" class="sound-btn" src="/images/sound-off1.svg" alt="Звук" title="Буква Aa" />.
        </p>
        <div id="start-cards-1" class="task-done start-quiz task_title">
          <p>Карточки
            <img style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" /> 
            <span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-cards-1" class="task-done close-quiz task_title">
          <p>Карточки
            <img style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" /> 
            <span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <CardsComponent id="cards-1" class="quiz" :cards-data="cards1" />
        <div id="start-quiz-1" class="task-done start-quiz task_title">
          <p>Тест
            <img style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" /> 
            <span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-quiz-1" class="task-done close-quiz task_title">
          <p>Тест
            <img style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" /> 
            <span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <QuizComponent id="quiz-1" class="quiz" :quiz-data="questions1" />
        <div id="start-writing-1" class="task-done start-quiz task_title">
          <p>Письмо
            <img style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" /> 
            <span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-writing-1" class="task-done close-quiz task_title">
          <p>Письмо
            <img style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" /> 
            <span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <WritingComponent id="writing-1" class="quiz" :writing-data="writing1" />
      </main>
    </div>
  </template>
  
  <script>
import CardsComponent from './CardsComponent.vue'
import QuizComponent from './QuizComponent.vue'
import WritingComponent from './WritingComponent.vue'
import cardsBtn  from '../mixins/cardsBtn'
import quizBtn  from '../mixins/quizBtn'
import writingBtn  from '../mixins/writingBtn'
  
export default {
  name: 'IntroductoryLesson',
  mixins: [
		quizBtn,
		cardsBtn,
    writingBtn
	],
  components: {
    CardsComponent,
    QuizComponent,
    WritingComponent
  },
  data() {
    return {
        cards1: [
          {
            question: "Как называется буква?",
            card: "<span class='bold_blue'>A a</span>",
            answer: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>",
          },
          {
            question: "Как называется буква?",
            card: "<span class='bold_blue'>B b</span>",
            answer: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>",
          },
          {
            question: "Как называется буква?",
            card: "<span class='bold_blue'>C c</span>",
            answer: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>",
          },
        ],
        questions1: [
          {
            question:
              "Как называется буква <span class='bold_blue'>A a</span>?",
            answers: {
              a: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              b: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              c: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              d: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />"
            },
            correctAnswer: "a",
          },
          {
            question:
              "Как называется буква <span class='bold_blue'>B b</span>?",
            answers: {
              a: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              b: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              c: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              d: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />"
            },
            correctAnswer: "c",
          },
          {
            question:
              "Как называется буква <span class='bold_blue'>C c</span>?",
            answers: {
              a: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              b: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              c: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
              d: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />"
            },
            correctAnswer: "b",
          },
        ],
        writing1: [
          {
            question: "Как пишется буква <img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>?",
            answers: [
              "A",
              "a",
              "Aa",
              "A a"
            ],
            correctAnswer: "<span class='bold_blue'>A a</span>",
          },
          {
            question: "Как пишется буква <img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>?",
              answers: [
                "B",
                "b",
                "Bb",
                "B b"
              ],
            correctAnswer: "<span class='bold_blue'>B b</span>",
          },
          {
            question: "Как пишется буква <img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>?",
            answers: [
              "C",
              "c",
              "Cc",
              "C c"
              ],
              correctAnswer: "<span class='bold_blue'>C c</span>",
            },
        ]
    }
  },
  mounted() {  
    document.title = "FullEng – Урок 0. Приветствие";

  //   document.addEventListener('DOMContentLoaded', function() {
      document.querySelector(".main").oncopy = function logCopy(event) {
        event.preventDefault();
      }
  
      document.querySelector(".main").oncontextmenu = function noselect(event) {
        event.preventDefault();
      };
  //   });
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
  background-image: url(../assets/background.png);
  text-align: justify;
  user-select: none;
}
</style>