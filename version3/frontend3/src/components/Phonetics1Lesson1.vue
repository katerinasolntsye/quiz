<template>
  <div class="main">
  <main>
      <h1>Урок 1. Введение</h1>
        <div id="start-cards-1" class="start-quiz task_title">
          <p>Карточки 1<span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-cards-1" class="close-quiz task_title">
          <p>Карточки 1<span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <CardsComponent id="cards-1" class="quiz" :cards-data="cards1" :task-name="taskName1" :lesson-name="lessonName" :course-name="courseName" />
        <div id="start-quiz-1" :class="openedquizeclass(1)">
            <p>Тест 1<span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-quiz-1" :class="closedquizeclass(1)">
            <p>Тест 1<span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <QuizComponent id="quiz-1" class="quiz" :quiz-data="questions1" />
        <div id="start-quiz-2" :class="openedquizeclass(2)">
            <p>Тест 2<span class="start-quiz-down-tip">&#129171;</span></p>
        </div>
        <div id="close-quiz-2" class="close-quiz task_title">
            <p>Тест 2<span class="start-quiz-up-tip">&#129169;</span></p>
        </div>
        <QuizComponent id="quiz-2" class="quiz" :quiz-data="questions2" />
  </main>
  </div>
</template>

<script>
import CardsComponent from './CardsComponent.vue'
import QuizComponent from './QuizComponent.vue'
import cardsBtn  from '../mixins/cardsBtn'
import quizBtn  from '../mixins/quizBtn'

export default {
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
      lessonName: "1. Введение",
      taskName1: "task1",
      taskName2: "task2",
      cards1: [
        {
          question: "ААА",
          card: "ААА",
          answer: "ААА",
        },
      ],
      questions1: [
      {
          question: "ААА",
          answers: { a: "ААА", b: "ААА" },
          correctAnswer: "a",
        },
      ],
      questions2: [
        {
          question: "ААА",
          answers: { a: "ААА", b: "ААА" },
          correctAnswer: "a",
        },
      ],
    }
  },
  mounted() {  
    document.title = "FullEng – Урок 1. Введение";

    // document.addEventListener('DOMContentLoaded', function() {
      document.querySelector(".main").oncopy = function logCopy(event) {
        event.preventDefault();
      }

      document.querySelector(".main").oncontextmenu = function noselect(event) {
        event.preventDefault();
      };

      // document.querySelector(".main").ondragstart = function noselect(event) {
      //   event.preventDefault();
      // };

      // document.querySelector(".main").onselectstart = function noselect(event) {
      //   event.preventDefault();
      // };


      // mainTag.onmousedown=new Function("return false");
      // mainTag.onselectstart=new Function("return false");

      // mainTag.addEventListener('mousedown', function() {
      //   return false;
      // });

      // mainTag.addEventListener('selectstart', function() {
      //   return false;
      // });

      // mainTag.addEventListener('copy', function() {
      //   return false;
      // });
    // });

        //     document.addEventListener('DOMContentLoaded', function() {
        //     /* Quiz task 1 */

        //     let fromQuizOpened1 = document.getElementById('start-quiz-1');
        //     let fromQuizClosed1 = document.getElementById('close-quiz-1');
        //     console.log(fromQuizOpened1);

        //     fromQuizOpened1.onclick = (function() {
        //         console.log("It is OK");

        //         fromQuizOpened1.style.display = "none";
        //         fromQuizClosed1.style.display = "block";
        //         document.getElementById('quiz-1').style.display = "block";
        //     });

        //     fromQuizClosed1.onclick = (function() {
        //         fromQuizOpened1.style.display = "block";
        //         fromQuizClosed1.style.display = "none";
        //         document.getElementById('quiz-1').style.display = "none";
        //     });

        //     /* Quiz task 2 */
            
        //     let fromQuizOpened2 = document.getElementById('start-quiz-2');
        //     let fromQuizClosed2 = document.getElementById('close-quiz-2');
        //     // console.log(fromQuizOpened52);

        //     fromQuizOpened2.onclick = (function() {
        //         fromQuizOpened2.style.display = "none";
        //         fromQuizClosed2.style.display = "block";
        //         document.getElementById('quiz-2').style.display = "block";
        //     });

        //     fromQuizClosed2.onclick = (function() {
        //         fromQuizOpened2.style.display = "block";
        //         fromQuizClosed2.style.display = "none";
        //         document.getElementById('quiz-2').style.display = "none";
        //     });
        // });

  },
  methods: {
    openedquizeclass(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '1. Введение')[0]
      .quizes.filter(c => c.title == `task${id}`)[0].goal 
      == 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '1. Введение')[0]
      .quizes.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'quiz-done start-quiz task_title'} else {return 'start-quiz task_title'}
    },
    closedquizeclass(id) {
      if(
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '1. Введение')[0]
      .quizes.filter(c => c.title == `task${id}`)[0].goal 
      == 
      JSON.parse(this.$store.getters.getUser.payedcourses)
      .filter(c => c.title == 'Фонетика и правила чтения. Часть 1')[0]
      .lessons.filter(c => c.title == '1. Введение')[0]
      .quizes.filter(c => c.title == `task${id}`)[0].completations
      ) {return 'quiz-done close-quiz task_title'} else {return 'close-quiz task_title'}
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

.quiz-done {
    background-color: orange;
  }
</style>