<template>
  <div id="app">
    <!-- <HeaderComponent1 /> -->
    <!-- <HeaderComponent msg="Welcome to Your Vue.js App" /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HeaderComponent2 v-if="$store.getters.getUserLoggedin"/>
    <PartnerHeader v-else-if="$store.getters.getPartnerLoggedin"/>
    <HeaderComponent1 v-else/>
    <router-view></router-view>
    <!-- <MainComponent1 v-if="!$store.getters.getUserLoggedin" />
    <MainComponent2 v-else /> -->
    <!-- <QuizComponent /> -->
    <FooterComponent />
    <!-- <FooterComponent msg="The End" /> -->
    <TermsOfService v-if="$store.getters.getTermsOfService" />
    <TermsOfUse v-if="$store.getters.getTermsOfUse" />
    <PartnershipAgreement v-if="$store.getters.getPartnershipAgreement" />
    <TermsOfPartnership v-if="$store.getters.getTermsOfPartnership" />
    <PrivacyPolicy v-if="$store.getters.getPrivacyPolicy" />
    <OnlineSupport />
  </div>
</template>

<script>
import HeaderComponent1 from './components/HeaderComponent1.vue'
import PartnerHeader from './components/PartnerHeader.vue'
import HeaderComponent2 from './components/HeaderComponent2.vue'
import FooterComponent from './components/FooterComponent.vue'
// import MainComponent1 from './components/MainComponent1.vue'
// import MainComponent2 from './components/MainComponent2.vue';
// import QuizComponent from './components/QuizComponent.vue'
import TermsOfService from './components/TermsOfService.vue'
import TermsOfUse from './components/TermsOfUse.vue'
import PartnershipAgreement from './components/PartnershipAgreement.vue'
import TermsOfPartnership from './components/TermsOfPartnership.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import OnlineSupport from './components/OnlineSupport.vue'
// import Phonetics1Lessons from './Phonetics1Lessons.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent1,
    PartnerHeader,
    HeaderComponent2,
    FooterComponent,
    // QuizComponent,
    // MainComponent1,
    // MainComponent2,
    TermsOfService,
    TermsOfUse,
    PartnershipAgreement,
    TermsOfPartnership,
    PrivacyPolicy,
    OnlineSupport,
    // Phonetics1Lessons
},
  data() {},
  mounted() {
        /*  Quiz task - опросное задание */

        // document.addEventListener('DOMContentLoaded', function() {
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

.main {
    flex: 1 0 auto;
}

main {
    background-color: #f7f7f7;
    width: 782px;
    margin: 0 auto;
    padding: 27px 53px 8px;
    border-radius: 7px;
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

.bold {
    font-weight: bold;
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
    background-color: #f0f0f0;
}

::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #cccccc;
}

::-webkit-scrollbar-thumb:hover {
    border-radius: 7px;
    background-color: #b3b3b3;
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

a.lessons_menu:link, .lessons_menu:link {
    color: #262626;
}

a.lessons_menu:visited, .lessons_menu:visited {
    color: #262626;
}

a.lessons_menu:hover, .lessons_menu:hover {
    text-decoration: none;
    color: #808080;
}

img.sound {
    width: 378px;
}

p img.sound:nth-of-type(1) {
    padding-right: 26px;
}

img.sound_triph {
    width: 255px;
}

p img.sound_triph:nth-of-type(1),
p img.sound_triph:nth-of-type(2) {
    padding-right: 6px;
}

p.sound {
    padding-bottom: 0;
    padding-left: 2px;
}

/* Table Styles */

table.sound,
table.sound_diph,
table.sound_triph,
table.sound_triph_con {
    padding-left: 0;
    padding-bottom: 5px;
}

table.sound td:nth-of-type(1) {
    width: 400px;
}

table.sound_diph td:nth-of-type(1) {
    width: 295px;
}

table.sound_diph td:nth-of-type(2) {
    width: 85px;
}

table.sound_triph td:nth-of-type(1) {
    width: 190px;
}

table.sound_triph td:nth-of-type(2) {
    width: 155px;
}

table.sound_triph td:nth-of-type(3) {
    width: 150px;
}

table.sound_triph_con td:nth-of-type(1) {
    width: 255px;
}

table.sound_triph_con td:nth-of-type(2) {
    width: 260px;
}

table.sounds td:nth-of-type(2),
table.sounds td:nth-of-type(4) {
    padding-right: 27px;
}

table.sounds td:last-child {
    padding-right: 0;
}

table.sounds th {
    font-size: 117%;
    font-weight: normal;
    color: #262626;
    padding-right: 10px;
}

table.sounds th:last-child {
    padding-right: 0;
}

table.sounds span {
    display: inline-block;
    width: 46px;
}

table.alphabet tr td:nth-of-type(1),
table.alphabet tr td:nth-of-type(2) {
    font-weight: bold;
}

table.alphabet td {
    padding-right: 0;
}

table.alphabet td:first-child {
    padding-right: 20px;
    color: #012169;
    width: 75px;
}

table.alphabet tr td:nth-of-type(2) {
    color: #c8102e;
}

table.alphabet span {
    font-weight: normal;
    color: #262626;
}

table.rules_consonants tr td:nth-of-type(2) {
    width: 75px;
}

table.alphabet_practice,
table.alphabet_stress,
table.alphabet_syllable,
table.vowels_examples {
    padding-bottom: 27px;
}

table.alphabet_practice,
table.alphabet_practice th,
table.alphabet_stress th,
table.rules_vowels th {
    font-weight: normal;
    color: #262626;
}

table.alphabet_practice th,
table.alphabet_stress th {
    text-align: left;
    width: 782px;
}

table.alphabet_practice tr td:nth-of-type(1) {
    width: 130px;
}

table.alphabet_practice tr td:nth-of-type(2) {
    width: 165px;
}

table.alphabet_stress tr td:nth-of-type(1) {
    width: 150px;
}

table.alphabet_syllable_type tr td:nth-of-type(1) {
    width: 95px;
}

table.alphabet_syllable tr td:nth-of-type(1) {
    width: 110px;
}

table.rules_vowels {
    font-weight: bold;
    color: #c8102e;
}

table.rules_vowels tr:first-child th {
    font-weight: bold;
}

table.rules_vowels tr td:first-child {
    color: #012169;
    width: 75px;
}

table.vowels_examples tr td:first-child {
    font-weight: bold;
    color: #012169;
    width: 75px;
}

table.addition tr td:first-child {
    width: 50px;
}

table.vowels_examples tr td:nth-of-type(2) {
    font-weight: bold;
    color: #c8102e;
    width: 75px;
}

table.addition tr td:nth-of-type(2) {
    font-weight: bold;
    color: #c8102e;
    width: 70px;
}

table.vowels_syllable tr td:first-child {
    width: 255px;
}

table.vowels_syllable tr td:nth-of-type(2) {
    width: 120px;
}

table.padding_none {
    padding: 0;
}

table.padding_bottom {
    padding-bottom: 27px;
}

table span.bold_blue {
    font-weight: bold;
    color: #012169;
}

/* Task Styles */

.quiz {
    display: none;
}

.task_title {
    background-color: #d4e0fa;
    /* background-color: #fad4db; */
    /* background-color: #ffffff; */
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
    position: relative;
}

.close-quiz {
    display: none;
    margin: 0 -20px;
    border-radius: 7px 7px 0 0;
    position: relative;
}

.start-quiz-down-tip {
    position: absolute;
    z-index: 450;
    font-family: 'Times New Roman', Times, serif;
    bottom: 12px;
    right: 12px;
    font-size: 2em;
}

.start-quiz-up-tip {
    position: absolute;
    z-index: 450;
    font-family: 'Times New Roman', Times, serif;
    bottom: 53px;
    right: 12px;
    font-size: 2em;
}

.task_title p {
    padding: 0;
}
</style>
