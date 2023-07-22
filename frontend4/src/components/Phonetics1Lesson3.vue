<template>
  <div class="main">
  <!-- <HeaderComponent2 /> -->
  <main>
      <!-- <img id='zb-1' class='sound-btn' src='../assets/sound-off1.svg' /> -->
      <h1>Урок 3. Согласные звуки</h1>
		<div id="start-cards-1" :class="openedtaskclass(1)">
          <p>Карточки 1
            <img :class="showtasklock(1)" style="width: 18px;" src="/images/lock.svg" alt="Задание не выполнено" title="Задание не выполнено" />
            <img :class="showtaskunlock(1)" style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" />
            <span class="task-done-counter" :class="showtaskcounter(1)">Выполнено <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[0].completations }}</b> из <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[0].goal }}</b> раз</span>
            <span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-cards-1" :class="closedtaskclass(1)">
          <p>Карточки 1
            <img :class="showtasklock(1)" style="width: 18px;" src="/images/lock.svg" alt="Задание не выполнено" title="Задание не выполнено" />
            <img :class="showtaskunlock(1)" style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" />
            <span class="task-done-counter" :class="showtaskcounter(1)">Выполнено <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[0].completations }}</b> из <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[0].goal }}</b> раз</span>
            <span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <CardsComponent id="cards-1" class="quiz" :cards-data="cards1" :task-name="taskName1" :lesson-name="lessonName" :course-name="courseName" />
        <div id="start-quiz-1" :class="openedtaskclass(2)">
          <p>Тест 1
            <img :class="showtasklock(2)" style="width: 18px;" src="/images/lock.svg" alt="Задание не выполнено" title="Задание не выполнено" />
            <img :class="showtaskunlock(2)" style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" />
            <span class="task-done-counter" :class="showtaskcounter(2)">Выполнено <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[1].completations }}</b> из <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[1].goal }}</b> раз</span>
            <span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <!-- <div id="close-quiz-1" class="close-quiz task_title"> -->
        <div id="close-quiz-1" :class="closedtaskclass(2)">
          <!-- JSON.parse($store.getters.getUser.payedcourses).filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0].lessons.filter(c => c.title == '1. Введение')[0].completedQuizes.indexOf('questions1')!=-1 -->
          <p>Тест 1
            <img :class="showtasklock(2)" style="width: 18px;" src="/images/lock.svg" alt="Задание не выполнено" title="Задание не выполнено" />
            <img :class="showtaskunlock(2)" style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" />
            <span class="task-done-counter" :class="showtaskcounter(2)">Выполнено <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[1].completations }}</b> из <b>{{ JSON.parse($store.getters.getUser.payedcourses)[0].lessons[2].tasks[1].goal }}</b> раз</span>
            <span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <QuizComponent id="quiz-1" class="quiz" :quiz-data="questions1" :task-name="taskName2" :lesson-name="lessonName" :course-name="courseName" />
  </main>
  </div>
</template>

<script>
import CardsComponent from './CardsComponent.vue'
import QuizComponent from './QuizComponent.vue'
import cardsBtn  from '../mixins/cardsBtn'
import quizBtn  from '../mixins/quizBtn'

export default {
	name: 'Phonetics1Lesson3',
	mixins: [
		quizBtn,
		cardsBtn
	],
  components: {
	CardsComponent,
    QuizComponent
  },
  data() {
    return {
		courseName: "Фонетика и правила чтения. Часть 1",
        lessonName: "3. Согласные звуки",
        taskName1: "task1",
        taskName2: "task2",
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
            correctAnswer: "a",
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
            correctAnswer: "a",
          },
        ],
    }
  },
  mounted() {  
    document.title = "FullEng – Урок 3. Согласные звуки";

	document.querySelector(".main").oncopy = function logCopy(event) {
        event.preventDefault();
    }
      
    document.querySelector(".main").oncontextmenu = function noselect(event) {
        event.preventDefault();
    };
  },
  methods: {
	showtaskcounter(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'display_none'}
    },
    showtasklock(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'display_none'}
    },
    showtaskunlock(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      > 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'display_none'}
    },
    openedtaskclass(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'task-done start-quiz task_title'} else {return 'start-quiz task_title'}
    },
    closedtaskclass(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '3. Согласные звуки')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'task-done close-quiz task_title'} else {return 'close-quiz task_title'}
    }
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