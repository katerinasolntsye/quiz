<template>
  <div id="app">
    <HeaderComponent />
    <!-- <HeaderComponent msg="Welcome to Your Vue.js App"/> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <MainComponent />
    <!-- <QuizComponent /> -->
    <FooterComponent />
    <!-- <FooterComponent msg="The End"/> -->
    <OnlineSupport />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import MainComponent from './components/MainComponent.vue'
// import QuizComponent from './components/QuizComponent.vue'
import OnlineSupport from './components/OnlineSupport.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    // QuizComponent,
    MainComponent,
    OnlineSupport
  },
  data() {},
  mounted() {
        /*  Quiz task - опросное задание */

        document.addEventListener('DOMContentLoaded', function() {
            /* Quiz task 1 */

            let fromQuizOpened51 = document.getElementById('start-quiz-1');
            let fromQuizClosed51 = document.getElementById('close-quiz-1');
            console.log(fromQuizOpened51);

            fromQuizOpened51.onclick = (function() {
                fromQuizOpened51.style.display = "none";
                fromQuizClosed51.style.display = "block";
                document.getElementById('quiz-1').style.display = "block";
            });

            fromQuizClosed51.onclick = (function() {
                fromQuizOpened51.style.display = "block";
                fromQuizClosed51.style.display = "none";
                document.getElementById('quiz-1').style.display = "none";
            });

            /* Quiz task 2 */
            
            let fromQuizOpened52 = document.getElementById('start-quiz-2');
            let fromQuizClosed52 = document.getElementById('close-quiz-2');
            console.log(fromQuizOpened52);

            fromQuizOpened52.onclick = (function() {
                fromQuizOpened52.style.display = "none";
                fromQuizClosed52.style.display = "block";
                document.getElementById('quiz-2').style.display = "block";
            });

            fromQuizClosed52.onclick = (function() {
                fromQuizOpened52.style.display = "block";
                fromQuizClosed52.style.display = "none";
                document.getElementById('quiz-2').style.display = "none";
            });
        });
    }
}
</script>

<style>
#app, body {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
}

body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 150%;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    color: #262626;
    background-color: #ffffff;
    margin: 0;
    padding: 0;   
}
/* #app {
  font-family: 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

main {
    background-color: #f7f7f7;
    width: 782px;
    margin: 0 auto;
    padding: 27px 53px 8px;
    border-radius: 7px;
    flex: 1 0 auto;
}

h1 {
    font-size: 150%;
    font-weight: 100;
    margin: 0 auto;
    padding-bottom: 27px;
}

h2 {
    font-size: 117%;
    font-weight: 100;
    margin: 0 auto;
    padding-bottom: 27px;
}

h3 {
    margin: 0 auto;
    padding-bottom: 27px;
}

main p {
    line-height: 1.3;
    margin: 0 auto;
    padding-bottom: 27px;
}

main span {
    height: 27px;
}

.red {
    color: #c8102e;
}

.blue {
    color: #012169;
}

.bold_red {
    font-weight: bold;
    color: #c8102e;
}

.bold_blue {
    font-weight: bold;
    color: #012169;
}

.background_light_red {
    background-color: #fad4db;
}

.background_light_blue {
    background-color: #d4e0fa;
}

.underline {
    text-decoration: underline;
}

.padding_none {
    padding: 0;
}

.frame {
    background-color: #ffffff;
    margin: 0 -20px 15px;
    padding: 11px 20px 12px;
    border-radius: 7px;
}

.frame_zero {
    background-color: #ffffff;
    margin: 0 -20px 0;
    padding: 11px 20px 12px;
    border-radius: 7px;
}

.tip {
    display: none;
    position: absolute;
    transform: translate(10%, 50%);
    background-color: #ffffff;
    height: min-content;
    width: max-content;
    padding: 0.5vh 1vh;
    border: 0.1vh solid #262626;
    border-radius: 0.7vh;
    font-family: 'Times New Roman', Times, serif;
    font-size: 2vh;
    /*font-size: 60%;*/
    color: #505050;
}

/*
.tip {
    display: none;
    position: absolute;
    transform: translate(10%, 50%);
    background-color: #ffffff;
	height: 23px;
    padding: 3px 7px 0 7px;
    border: 1px solid #262626;
    border-radius: 7px;
    font-family: 'Times New Roman', Times, serif;
	font-size: 60%;
    color: #505050;
}
*/

::-webkit-scrollbar {
    width: 10px;
    background-color: #ffffff;
}

::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #e5e5e5;
}

textarea::-webkit-scrollbar {
    width: 8px;
    background-color: #ffffff;
}

textarea::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #cccccc;
}

a {
    text-decoration: none;
}

a:link {
    color: #808080;
}

a:visited {
    color: #808080;
}

a:hover {
    text-decoration: underline;
    color: #262626;
}

a.none_decoration:hover {
    text-decoration: none;
}

/* Task Styles */

.quiz {
    display: none;
}

.task_title {
    background-color: #d4e0fa;
    width: 782px;
    padding: 11px 20px 12px;
    margin: 0 -20px 27px;
    border-radius: 7px;
    font-weight: bold;
}

.task_title:hover {
    cursor: pointer;
}

.start-quiz {
    margin: 0 -20px 27px;
    border-radius: 7px;
}

.close-quiz {
    display: none;
    margin: 0 -20px;
    border-radius: 7px 7px 0 0;
}

.task_title p {
    padding: 0;
}
</style>
