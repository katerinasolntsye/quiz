<template>
  <div class="antialiased text-gray-700 bg-gray-100">
      <div class="bg-white p-12 rounded-lg shadow-lg mt-8">
        <div v-if="idx < questionsLength">
          <p class="text-2xl" v-html="questions[idx]['question']"></p>          
          <div v-if="showedAnswer">
            <input type="text" name="" id="" class="textInput" v-model="selectedAnswer">
            <button class='check-input-btn text-gray-700 text-sm font-bold tracking-wide rounded-full px-5 py-2'
                  @click="answered()" >Проверить</button>
            <p class="padding_none" v-if="answerError">{{answerError}}</p>
          </div>
          <div v-else>
          <p class="text-2xl padding_none" v-if="this.questions[this.idx].answers.includes(this.selectedAnswer)">
            <span style="color: #016901;">Верно! <b>&#10004;</b></span>
            <!-- <br />Правильный ответ:
            <span v-html="questions[idx]['correctAnswer']"></span> -->
          </p>
          <p class="text-2xl padding_none" v-else>
            <span style="color: #c8102e;">Неверно! <b>&#10008;</b></span>
            <br />Правильный ответ:
            <span v-html="questions[idx]['correctAnswer']"></span>
          </p>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="padding: 0.5rem 0; margin: 1.5rem 0 0.5rem 0; font-size: 1.125rem; color: #b3b3b3;">Вопрос {{idx+1}} из {{questionsLength}}</span>
          <div class="mt-6">
          <!-- <div class="mt-6 flow-root"> -->
            <button
              @click="nextQuestion(), showedAnswer=true, nextBnt=false, answerError=null"
              v-show="nextBnt && selectedAnswer != '' && idx < questionsLength - 1"
              class="quiz-btn text-gray-700 text-sm font-bold tracking-wide rounded-full px-5 py-2"
            >
              Следующий
            </button>
            <button
              @click="showResults(), showedAnswer=true, nextBnt=false, answerError=null"
              v-show="nextBnt && selectedAnswer != '' && idx == questionsLength - 1"
              class="quiz-btn text-gray-700 text-sm font-bold tracking-wide rounded-full px-5 py-2"
            >
              Готово
            </button>
          </div>
        </div>
        </div>
        <div v-else>
          <h2 class="text-bold text-3xl padding_none">Результаты</h2>
          <div class="flex justify-start space-x-4 mt-6">
            <p class="padding_none">
              Верные ответы:
              <span class="text-2xl text-green-700 font-bold"
                >{{correctAnswers}}</span>
            </p>
            <p class="padding_none">
              Неверные ответы:
              <span class="text-2xl text-red-700 font-bold"
                >{{wrongAnswers}}</span>
            </p>
          </div>
          <div class="mt-6 flow-root">
            <button
              @click="resetQuiz"
              class="quiz-btn float-right text-gray-700 text-sm font-bold tracking-wide rounded-full px-5 py-2"
            >
              Заново
            </button>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import soundBtn  from '../mixins/soundBtn'

export default {
  name: 'WritingComponent',
mixins: [soundBtn],
props: ["writingData", "taskName", "lessonName", "courseName"],
data() {
  return {
    idx: 0,
    selectedAnswer: "",
    correctAnswers: 0,
    wrongAnswers: 0,
    showedAnswer: true,
    answerError: null,
    nextBnt: false,
  };
},
methods: {
  answered() {
    // this.selectedAnswer = e.target.value;
    // console.log(this.selectedAnswer);
    if (!this.selectedAnswer) {
      this.answerError = "Введите ответ.";
    } else if (this.questions[this.idx].answers.includes(this.selectedAnswer)) {
      this.correctAnswers++;
      this.showedAnswer = false;
      this.nextBnt = true;
    } else {
      this.wrongAnswers++;
      this.showedAnswer = false;
      this.nextBnt = true;
    }
  },
  nextQuestion() {
    this.idx++;
    this.selectedAnswer = "";
    // document.querySelectorAll("input").forEach((el) => (el.checked = false));
  },
  showResults() {
    this.idx++;

    this.$store.state.user = JSON.parse(localStorage.getItem("user"));

    let updateUser = this.$store.getters.getUser;

    let parsedpayedcourses = JSON.parse(updateUser.payedcourses);

    let courseindex = parsedpayedcourses.findIndex(c => {
      return c.title == `${this.courseName}`;
    });

    let lessonindex = parsedpayedcourses[courseindex].lessons.findIndex(c => {
      return c.title == `${this.lessonName}`;
    });

    let taskindex = parsedpayedcourses[courseindex].lessons[lessonindex].tasks.findIndex(c => {
      return c.title == `${this.taskName}`;
    });

    let completations = parsedpayedcourses[courseindex].lessons[lessonindex].tasks[taskindex].completations;
    // let goal = parsedpayedcourses[courseindex].lessons[lessonindex].tasks[taskindex].goal;

    if(!this.wrongAnswers) {
      parsedpayedcourses[courseindex].lessons[lessonindex].tasks[taskindex].completations = Number(completations)+1;

      if (parsedpayedcourses[courseindex].lessons[lessonindex].tasks.every(element => {
        return Number(element.completations) == Number(element.goal);
        })) {
          if(parsedpayedcourses[courseindex].lessons[lessonindex].title != parsedpayedcourses[courseindex].lessons.at(-1).title) {
            // console.log(parsedpayedcourses[courseindex].lessons[lessonindex+1].unlocked);
            parsedpayedcourses[courseindex].lessons[lessonindex+1].unlocked = true;
          } else {
            // console.log("ABC");
            this.$emit('setcourseсompletion');
            parsedpayedcourses[courseindex].completed = true;
            // console.log(parsedpayedcourses[courseindex].completed, "ABC111");
          }
      }
      
      updateUser.payedcourses = JSON.stringify(parsedpayedcourses);

      // this.$store.dispatch("completeTask", updateUser);
      
      this.$store.commit("setUserPayedcourses", updateUser.payedcourses);
      console.log(updateUser);
    }

    localStorage.setItem("user", JSON.stringify(this.$store.getters.getUser));
  },
  resetQuiz() {
    this.idx = 0;
    this.selectedAnswer = "";
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
    this.showedAnswer = true;
    this.answerError = null;
    this.nextBnt = false;

    for (let i = this.writingData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.writingData[i], this.writingData[j]] = [this.writingData[j], this.writingData[i]];
    }
  },
}, 
computed: {
  questionsLength: function () {
    return this.writingData.length;
  }
},
created: function() {
  // console.log(this.writingData);
  this.questions = this.writingData;

  for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
  }
}
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com */

/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
box-sizing: border-box;
}

/**
Use a more readable tab size (opinionated).
*/

html {
-moz-tab-size: 4;
-o-tab-size: 4;
   tab-size: 4;
}

/**
1. Correct the line height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
*/

html {
line-height: 1.15;
/* 1 */
-webkit-text-size-adjust: 100%;
/* 2 */
}

/*
Sections
========
*/

/**
Remove the margin in all browsers.
*/

body {
margin: 0;
}

/**
Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
*/

body {
font-family:
  system-ui,
  -apple-system, /* Firefox supports this but not yet `system-ui` */
  'Segoe UI',
  Roboto,
  Helvetica,
  Arial,
  sans-serif,
  'Apple Color Emoji',
  'Segoe UI Emoji';
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
height: 0;
/* 1 */
color: inherit;
/* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
-webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
font-family:
  ui-monospace,
  SFMono-Regular,
  Consolas,
  'Liberation Mono',
  Menlo,
  monospace;
/* 1 */
font-size: 1em;
/* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
}

sub {
bottom: -0.25em;
}

sup {
top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
text-indent: 0;
/* 1 */
border-color: inherit;
/* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
font-family: inherit;
/* 1 */
font-size: 100%;
/* 1 */
line-height: 1.15;
/* 1 */
margin: 0;
/* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
1. Remove the inheritance of text transform in Firefox.
*/

button,
select {
/* 1 */
text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

button,
[type='button'] {
-webkit-appearance: button;
}

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
border-style: none;
padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
-webkit-appearance: button;
/* 1 */
font: inherit;
/* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
display: list-item;
}

/**
* Manually forked from SUIT CSS Base: https://github.com/suitcss/base
* A thin layer on top of normalize.css that provides a starting point more
* suitable for web applications.
*/

/**
* Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
margin: 0;
}

button {
background-color: transparent;
background-image: none;
transition: all .3s;
}

fieldset {
margin: 0;
padding: 0;
}

ol,
ul {
list-style: none;
margin: 0;
padding: 0;
}

/**
* Tailwind custom reset styles
*/

/**
* 1. Use the user's configured `sans` font-family (with Tailwind's default
*    sans-serif font stack as a fallback) as a sane default.
* 2. Use Tailwind's default "normal" line-height so the user isn't forced
*    to override it to ensure consistency even when using the default theme.
*/

html {
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
/* 1 */
line-height: 1.5;
/* 2 */
}

/**
* Inherit font-family and line-height from `html` so users can set them as
* a class directly on the `html` element.
*/

body {
font-family: inherit;
line-height: inherit;
}

/**
* 1. Prevent padding and border from affecting element width.
*
*    We used to set this in the html element and inherit from
*    the parent element for everything else. This caused issues
*    in shadow-dom-enhanced elements like <details> where the content
*    is wrapped by a div with box-sizing set to `content-box`.
*
*    https://github.com/mozdevs/cssremedy/issues/4
*
*
* 2. Allow adding a border to an element by just adding a border-width.
*
*    By default, the way the browser specifies that an element should have no
*    border is by setting it's border-style to `none` in the user-agent
*    stylesheet.
*
*    In order to easily add borders to elements by just setting the `border-width`
*    property, we change the default border-style for all elements to `solid`, and
*    use border-width to hide them instead. This way our `border` utilities only
*    need to set the `border-width` property instead of the entire `border`
*    shorthand, making our border utilities much more straightforward to compose.
*
*    https://github.com/tailwindcss/tailwindcss/pull/116
*/

*,
::before,
::after {
box-sizing: border-box;
/* 1 */
border-width: 0;
/* 2 */
border-style: solid;
/* 2 */
border-color: currentColor;
/* 2 */
}

/*
* Ensure horizontal rules are visible by default
*/

hr {
border-top-width: 1px;
}

/**
* Undo the `border-style: none` reset that Normalize applies to images so that
* our `border-{width}` utilities have the expected effect.
*
* The Normalize reset is unnecessary for us since we default the border-width
* to 0 on all elements.
*
* https://github.com/tailwindcss/tailwindcss/issues/362
*/

img {
border-style: solid;
}

/* img.sound-btn {
  width: 20px;
}

img.sound-btn:hover {
  cursor: pointer;
} */

.quiz-btn {
background: #f7f7f7;
}

.quiz-btn:hover {
background: #b3b3b3;
}

textarea {
resize: vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder {
opacity: 1;
color: #9ca3af;
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
opacity: 1;
color: #9ca3af;
}

input::placeholder,
textarea::placeholder {
opacity: 1;
color: #9ca3af;
}

/* button {
cursor: pointer;
} */

/**
* Override legacy focus reset from Normalize with modern Firefox focus styles.
*
* This is actually an improvement over the new defaults in Firefox in our testing,
* as it triggers the better focus styles even for links, which still use a dotted
* outline in Firefox by default.
*/

table {
border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
font-size: inherit;
font-weight: inherit;
}

/**
* Reset links to optimize for opt-in styling instead of
* opt-out.
*/

a {
color: inherit;
text-decoration: inherit;
}

/**
* Reset form element properties that are easy to forget to
* style explicitly so you don't inadvertently introduce
* styles that deviate from your design system. These styles
* supplement a partial reset that is already applied by
* normalize.css.
*/

button,
input,
optgroup,
select,
textarea {
padding: 0;
line-height: inherit;
color: inherit;
}

/**
* Use the configured 'mono' font family for elements that
* are expected to be rendered with a monospace font, falling
* back to the system monospace stack if there is no configured
* 'mono' font family.
*/

pre,
code,
kbd,
samp {
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/**
* 1. Make replaced elements `display: block` by default as that's
*    the behavior you want almost all of the time. Inspired by
*    CSS Remedy, with `svg` added as well.
*
*    https://github.com/mozdevs/cssremedy/issues/14
* 
* 2. Add `vertical-align: middle` to align replaced elements more
*    sensibly by default when overriding `display` by adding a
*    utility like `inline`.
*
*    This can trigger a poorly considered linting error in some
*    tools but is included by design.
* 
*    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
display: block;
/* 1 */
vertical-align: middle;
/* 2 */
}

/**
* Constrain images and videos to the parent width and preserve
* their intrinsic aspect ratio.
*
* https://github.com/mozdevs/cssremedy/issues/14
*/

img,
video {
max-width: 100%;
height: auto;
}

input.textInput {
  font-family: Times New Roman, Times, serif;
  box-sizing: border-box;
  background-color: #f7f7f7;
  color: #262626;
  border-width: 1px;
  border-radius: 7px;
  outline: 0;
  margin: 0;
  padding: 4px 8px;
  /* margin: 0 0 0.7em 0; */
}

.check-input-btn {
  background: #f7f7f7;
  margin-left: 0.75em;
}

.check-input-btn:hover {
  background: #b3b3b3;
}

/**
* Ensure the default browser behavior of the `hidden` attribute.
*/

[hidden] {
display: none;
}

*, ::before, ::after {
--tw-border-opacity: 1;
border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}

.float-right {
float: right;
}

.mt-4 {
margin-top: 1rem;
}

.mt-6 {
margin-top: 1.5rem;
}

.mt-8 {
margin: 0 -20px 27px;
}

.block {
display: block;
}

.flex {
display: flex;
}

.table {
display: table;
}

.flow-root {
display: flow-root;
}

.hidden {
display: none;
}

.h-screen {
height: 100vh;
}

.w-full {
width: 100%;
}

.max-w-xl {
max-width: 36rem;
}

@-webkit-keyframes spin {
to {
  transform: rotate(360deg);
}
}

@keyframes spin {
to {
  transform: rotate(360deg);
}
}

@-webkit-keyframes ping {
75%, 100% {
  transform: scale(2);
  opacity: 0;
}
}

@keyframes ping {
75%, 100% {
  transform: scale(2);
  opacity: 0;
}
}

@-webkit-keyframes pulse {
50% {
  opacity: .5;
}
}

@keyframes pulse {
50% {
  opacity: .5;
}
}

@-webkit-keyframes bounce {
0%, 100% {
  transform: translateY(-25%);
  -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
          animation-timing-function: cubic-bezier(0.8,0,1,1);
}

50% {
  transform: none;
  -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
          animation-timing-function: cubic-bezier(0,0,0.2,1);
}
}

@keyframes bounce {
0%, 100% {
  transform: translateY(-25%);
  -webkit-animation-timing-function: cubic-bezier(0.8,0,1,1);
          animation-timing-function: cubic-bezier(0.8,0,1,1);
}

50% {
  transform: none;
  -webkit-animation-timing-function: cubic-bezier(0,0,0.2,1);
          animation-timing-function: cubic-bezier(0,0,0.2,1);
}
}

.cursor-pointer {
cursor: pointer;
}

.items-center {
align-items: center;
}

.justify-start {
justify-content: flex-start;
}

.justify-center {
justify-content: center;
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
--tw-space-x-reverse: 0;
margin-right: calc(1rem * var(--tw-space-x-reverse));
margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.rounded-lg {
border-radius: 0 0 7px 7px;
}

.rounded-lgl {
border-radius: 7px;
}

.rounded-full {
border-radius: 9999px;
border-radius: 7px;
}

.border {
border-width: 1px;
}

.border-gray-300 {
--tw-border-opacity: 1;
border-color: rgba(209, 213, 219, var(--tw-border-opacity));
}

.bg-white {
--tw-bg-opacity: 1;
background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.bg-gray-100 {
--tw-bg-opacity: 1;
background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}

.bg-red-200 {
--tw-bg-opacity: 1;
background-color: rgba(250, 212, 219, var(--tw-bg-opacity));
position: relative;
}

.bg-red-200:after {
position: absolute;
  z-index: 450;
  font-family: 'Times New Roman', Times, serif;
  content: "\2718";
  bottom: 7px;
  right: 7px;
  font-size: 1.4em;
  color: #c8102e;
}

.bg-green-200 {
--tw-bg-opacity: 1;
/* background-color: rgba(212, 224, 250, var(--tw-bg-opacity)); */
background-color: rgba(231, 250, 212, var(--tw-bg-opacity));
position: relative;
}

.bg-green-200:after {
position: absolute;
  z-index: 450;
  font-family: 'Times New Roman', Times, serif;
  content: "\2714";
  bottom: 7px;
  right: 7px;
  font-size: 1.4em;
  /* color: #012169; */
  color: #016901;
}

.bg-indigo-600 {
--tw-bg-opacity: 1;
background-color: rgba(79, 70, 229, var(--tw-bg-opacity));
}

.hover\:bg-gray-100:hover {
--tw-bg-opacity: 1;
background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
}

.p-3 {
padding: 0.75rem;
}

.p-12 {
padding: 1.5rem;
}

.px-5 {
padding-left: 1.25rem;
padding-right: 1.25rem;
}

.px-6 {
padding-left: 1.5rem;
padding-right: 1.5rem;
}

.py-2 {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
}

.text-center {
text-align: center;
}

.text-sm {
font-size: 0.875rem;
line-height: 1.25rem;
}

.text-lg {
font-size: 1.125rem;
line-height: 1.75rem;
}

.text-2xl {
font-size: 1.5rem;
line-height: 2rem;
}

.text-3xl {
font-size: 1.875rem;
line-height: 2.25rem;
}

.text-5xl {
font-size: 3rem;
line-height: 1;
}

.font-bold {
font-weight: 700;
}

.tracking-wide {
letter-spacing: 0.025em;
}

.text-white {
--tw-text-opacity: 1;
color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.text-gray-700 {
--tw-text-opacity: 1;
color: rgba(55, 65, 81, var(--tw-text-opacity));
}

.text-red-700 {
--tw-text-opacity: 1;
color: rgba(200, 16, 46, var(--tw-text-opacity));
}

.text-green-700 {
--tw-text-opacity: 1;
color: rgba(16, 199, 16, var(--tw-text-opacity));
}

.text-indigo-700 {
--tw-text-opacity: 1;
color: rgba(67, 56, 202, var(--tw-text-opacity));
}

.antialiased {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

*, ::before, ::after {
--tw-shadow: 0 0 #0000;
}

.shadow-lg {
--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

*, ::before, ::after {
--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgba(59, 130, 246, 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
}

@media (min-width: 640px) {
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}

@media (min-width: 1280px) {
}

@media (min-width: 1536px) {
}
</style>