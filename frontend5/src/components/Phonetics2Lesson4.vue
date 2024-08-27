<template>
  <div class="main">
    <main>
      <h1>Урок 4. Буквы Gg, Hh</h1>
        <h2>Зачем нужна транскрипция?</h2>
        <p>Текст</p>
        <div id="start-cards-1" :class="openedtaskclass(1)">
          <p>Карточки 1
            <img :class="showtasklock(1)" style="width: 18px;" src="/images/lock.svg" alt="Задание не выполнено" title="Задание не выполнено" />
            <img :class="showtaskunlock(1)" style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" />
            <span class="task-done-counter" :class="showtaskcounter(1)">Выполнено <b>{{ JSON.parse($store.getters.getUser.payedcourses)[1].lessons[3].tasks[0].completations }}</b> из <b>{{ JSON.parse($store.getters.getUser.payedcourses)[1].lessons[3].tasks[0].goal }}</b> раз</span>
            <span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-cards-1" :class="closedtaskclass(1)">
          <p>Карточки 1
            <img :class="showtasklock(1)" style="width: 18px;" src="/images/lock.svg" alt="Задание не выполнено" title="Задание не выполнено" />
            <img :class="showtaskunlock(1)" style="width: 21px;" src="/images/unlock.svg" alt="Задание выполнено" title="Задание выполнено" />
            <span class="task-done-counter" :class="showtaskcounter(1)">Выполнено <b>{{ JSON.parse($store.getters.getUser.payedcourses)[1].lessons[3].tasks[0].completations }}</b> из <b>{{ JSON.parse($store.getters.getUser.payedcourses)[1].lessons[3].tasks[0].goal }}</b> раз</span>
            <span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <CardsComponent id="cards-1" class="quiz" :cards-data="cards1" :task-name="taskName1" :lesson-name="lessonName" :course-name="courseName" />
  </main>
  </div>
</template>

<script>
import CardsComponent from './CardsComponent.vue'
// import QuizComponent from './QuizComponent.vue'
// import WritingComponent from './WritingComponent.vue'
import cardsBtn  from '../mixins/cardsBtn'
// import quizBtn  from '../mixins/quizBtn'
// import writingBtn  from '../mixins/writingBtn'

  export default {
  name: 'Phonetics2Lesson4',
	mixins: [
		cardsBtn,
		// quizBtn,
    // writingBtn
	],
  components: {
    CardsComponent,
    // QuizComponent,
    // WritingComponent
  },
  data() {
    return {
      courseName: "\nФонетика и правила чтения. Часть 2",
      lessonName: "\n4. Буквы Gg, Hh",
      taskName1: "task1",
      cards1: [
        {
          question: "Как называется буква?",
          card: "<span class='bold_blue'>A a</span>",
          answer: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>",
        },
        {
          question: "Как называется буква?",
          card: "<span class='bold_blue'>B b</span>",
          answer: "<img id='zb-2' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>",
        },
        {
          question: "Как называется буква?",
          card: "<span class='bold_blue'>C c</span>",
          answer: "<img id='zb-3' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>",
        },
      ],
      questions1: [
        {
          question:
            "Как называется буква <span class='bold_blue'>A a</span>?",
          answers: {
            a: "<img id='zb-1' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            b: "<img id='zb-18' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            c: "<img id='zb-5' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            d: "<img id='zb-9' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />"
          },
          correctAnswer: "a",
        },
        {
          question:
            "Как называется буква <span class='bold_blue'>B b</span>?",
          answers: {
            a: "<img id='zb-16' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            b: "<img id='zk-6' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            c: "<img id='zb-2' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            d: "<img id='zb-23' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />"
          },
          correctAnswer: "c",
        },
        {
          question:
            "Как называется буква <span class='bold_blue'>C c</span>?",
          answers: {
            a: "<img id='zk-29' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            b: "<img id='zb-3' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            c: "<img id='zb-20' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />",
            d: "<img id='zk-36' class='sound-btn' src='/images/sound-off1.svg' alt='Звук' />"
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
          question: "Как пишется буква <img id='zb-2' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>?",
          answers: [
            "B",
            "b",
            "Bb",
              "B b"
          ],
          correctAnswer: "<span class='bold_blue'>B b</span>",
        },
        {
          question: "Как пишется буква <img id='zb-3' class='sound-btn' src='/images/sound-off1.svg' alt='Звук'>?",
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
    document.title = "FullEng – Урок 4. Буквы Gg, Hh";

    // document.querySelector(".main").oncopy = function logCopy(event) {
    //     event.preventDefault();
    // }
      
    // document.querySelector(".main").oncontextmenu = function noselect(event) {
    //     event.preventDefault();
    // };
  },
  methods: {
    showtaskcounter(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'display_none'}
    },
    showtasklock(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'display_none'}
    },
    showtaskunlock(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      > 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'display_none'}
    },
    openedtaskclass(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'task-done start-quiz task_title'} else {return 'start-quiz task_title'}
    },
    closedtaskclass(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
      .tasks.filter(c => c.title == `task${id}`)[0].goal 
      <= 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == '\nФонетика и правила чтения. Часть 2')[0]
      .lessons.filter(c => c.title == '\n4. Буквы Gg, Hh')[0]
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
  /* user-select: none; */
}
</style>