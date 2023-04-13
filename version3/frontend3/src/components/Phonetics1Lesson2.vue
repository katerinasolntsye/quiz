<template>
  <div class="main">
  <main>
      <h1>Урок 2. Гласные звуки</h1>
		<div id="start-cards-1" class="start-quiz task_title">
			<p>Карточки 1<span class="start-quiz-down-tip">&#129171;</span></p>
		</div>
		<div id="close-cards-1" class="close-quiz task_title">
			<p>Карточки 1<span class="start-quiz-up-tip">&#129169;</span></p>
		</div>
		<CardsComponent id="cards-1" class="quiz" :cards-data="cards1" />
		<div id="start-quiz-1" class="start-quiz task_title">
			<p>Тест 1<span class="start-quiz-down-tip">&#129171;</span></p>
		</div>
		<div id="close-quiz-1" class="close-quiz task_title">
			<p>Тест 1<span class="start-quiz-up-tip">&#129169;</span></p>
		</div>
		<QuizComponent id="quiz-1" class="quiz" :quiz-data="questions1" />
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
          answers: {
			a: "ААА",
			b: "ААА",
			c: "ААА",
			d: "ААА"
          },
          correctAnswer: "a",
        },
      ],
    }
  },
  mounted() {  
    document.title = "FullEng – Урок 2. Гласные звуки";

	document.querySelector(".main").oncopy = function logCopy(event) {
        event.preventDefault();
    }
      
    document.querySelector(".main").oncontextmenu = function noselect(event) {
        event.preventDefault();
    };
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