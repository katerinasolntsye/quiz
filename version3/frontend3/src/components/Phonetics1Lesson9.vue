<template>
  <div class="main">
  <main>
      <h1>Урок 9. Дополнения</h1>
		<div id="start-cards-1" class="start-quiz task_title">
			<p>Карточки 1<span class="start-quiz-down-tip">&#129171;</span></p>
		</div>
		<div id="close-cards-1" class="close-quiz task_title">
			<p>Карточки 1<span class="start-quiz-up-tip">&#129169;</span></p>
		</div>
		<CardsComponent id="cards-1" class="quiz" :cards-data="cards1" />
		<div id="start-writing-1" class="start-quiz task_title">
			<p>Письмо 1<span class="start-quiz-down-tip">&#129171;</span></p>
		</div>
		<div id="close-writing-1" class="close-quiz task_title">
			<p>Письмо 1<span class="start-quiz-up-tip">&#129169;</span></p>
		</div>
		<WritingComponent id="writing-1" class="quiz" :writing-data="writing1" />
  </main>
  </div>
</template>

<script>
import CardsComponent from './CardsComponent.vue'
import WritingComponent from './WritingComponent.vue'
import cardsBtn  from '../mixins/cardsBtn'
import writingBtn  from '../mixins/writingBtn'

export default {
	mixins: [
		cardsBtn,
        writingBtn
	],
	components: {
		CardsComponent,
		WritingComponent
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
		writing1: [
            {
				question: "ААА",
                answers: [
                    "А",
                    "АА",
                    "ААА",
                    "АААА"
                ],
                correctAnswer: "ААА",
			},
		],
    }
  },
  mounted() {  
    document.title = "FullEng – Урок 9. Дополнения";

	// document.querySelector(".main").oncopy = function logCopy(event) {
    //     event.preventDefault();
    // }
      
    // document.querySelector(".main").oncontextmenu = function noselect(event) {
    //     event.preventDefault();
    // };
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