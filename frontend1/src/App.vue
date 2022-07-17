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
  data() {}
}
</script>

<style>
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
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
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
</style>
