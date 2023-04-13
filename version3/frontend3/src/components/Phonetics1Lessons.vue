<template>
  <div class="main">
  <!-- <HeaderComponent2 /> -->
  <main>
      <h1>Фонетика и правила чтения. Часть 1</h1>
        <p>
          <span class="lessons_menu unlocked-lesson" @click="openLesson('/student/introductory-lesson')">0. Приветствие</span>
        </p>
        <h2>Фонетика:</h2>
        <p>
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[0].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson1')">1. Введение</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[1].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson2')">2. Гласные звуки</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[2].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson3')">3. Согласные звуки</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[3].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson4')">4. Практика</span>
        </p>
        <!-- <p style="cursor: pointer;" class="lessons_menu" @click="openLesson('/student-phonetics1-lesson1')">1. Введение</p>
        <p style="cursor: pointer;" class="lessons_menu" @click="openLesson('/student-phonetics1-lesson2')">2. Гласные звуки</p>
        <p style="cursor: pointer;" class="lessons_menu" @click="openLesson('/student-phonetics1-lesson3')">3. Согласные звуки</p>
        <p style="cursor: pointer;" class="lessons_menu" @click="openLesson('/student-phonetics1-lesson4')">4. Практика</p> -->
        <!-- <p>
          <router-link class="lessons_menu" @click="openLesson" to="/student-phonetics1-lesson1">1. Введение</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson2">2. Гласные звуки</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson3">3. Согласные звуки</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson4">4. Практика</router-link>
        </p> -->
        <h2>Правила чтения. Часть 1:</h2>
        <p>
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[4].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson5')">5. Алфавит</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[5].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson6')">6. Слог и ударение</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[6].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson7')">7. Гласные буквы</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[7].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson8')">8. Согласные буквы</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[8].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson9')">9. Дополнения</span>
          <br />
          <span class="lessons_menu" :class="(JSON.parse(this.$store.getters.getUser.payedcourses)[0].lessons[9].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson10')">10. Практика</span>
        </p>
        <!-- <p class="lessons_menu" :class="(this.$store.getters.getUser.payedCourses[0].lessons[4].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson5')">5. Алфавит</p>
        <p class="lessons_menu" :class="(this.$store.getters.getUser.payedCourses[0].lessons[5].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson6')">6. Слог и ударение</p>
        <p class="lessons_menu" :class="(this.$store.getters.getUser.payedCourses[0].lessons[6].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson7')">7. Гласные буквы</p>
        <p class="lessons_menu" :class="(this.$store.getters.getUser.payedCourses[0].lessons[7].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson8')">8. Согласные буквы</p>
        <p class="lessons_menu" :class="(this.$store.getters.getUser.payedCourses[0].lessons[8].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson9')">9. Дополнения</p>
        <p class="lessons_menu" :class="(this.$store.getters.getUser.payedCourses[0].lessons[9].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson('/student-phonetics1-lesson10')">10. Практика</p> -->
        <!-- <p>
          <router-link class="lessons_menu" to="/student-phonetics1-lesson5">5. Алфавит</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson6">6. Слог и ударение</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson7">7. Гласные буквы</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson8">8. Согласные буквы</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson9">9. Дополнения</router-link>
          <br />
          <router-link class="lessons_menu" to="/student-phonetics1-lesson10">10. Практика</router-link>
        </p> -->
  </main>
  </div>
</template>

<script>
// import HeaderComponent2 from './HeaderComponent2.vue'
// import Phonetics1Lesson5 from '../components/Phonetics1Lesson5.vue'
// import Phonetics1Lesson1 from '../components/Phonetics1Lesson1.vue'
// import Phonetics1Lesson2 from '../components/Phonetics1Lesson2.vue'
// import Phonetics1Lesson3 from '../components/Phonetics1Lesson3.vue'
// import Phonetics1Lesson4 from '../components/Phonetics1Lesson4.vue'
// import Phonetics1Lesson6 from '../components/Phonetics1Lesson6.vue'
// import Phonetics1Lesson7 from '../components/Phonetics1Lesson7.vue'
// import Phonetics1Lesson8 from '../components/Phonetics1Lesson8.vue'
// import Phonetics1Lesson9 from '../components/Phonetics1Lesson9.vue'
// import Phonetics1Lesson10 from '../components/Phonetics1Lesson10.vue'

export default {
  components: {
    // HeaderComponent2
    // Phonetics1Lesson5,
    // Phonetics1Lesson1,
    // Phonetics1Lesson2,
    // Phonetics1Lesson3,
    // Phonetics1Lesson4,
    // Phonetics1Lesson6,
    // Phonetics1Lesson7,
    // Phonetics1Lesson8,
    // Phonetics1Lesson9,
    // Phonetics1Lesson10
  },
  data() {
    return {
      // courseSelected: null,
      // lessons: [
      //   {
      //     title: "Фонетика и правила чтения. Часть 1",
      //     link1: "/student-phonetics1-lesson1",
      //     link2: "/",
      //   },
      //   {
      //     title: "Фонетика и правила чтения. Часть 2",
      //     link1: "/student-phonetics1-lesson2",
      //     link2: "/",
      //   },
      // ],
    }
  },
  methods: {
    openLesson(link) {
      // let router = this.$router.resolve({path: `${link}`})
      // open(router.href, "_blank");
      this.$router.push(link)
    },
  },
  mounted() {  
    document.title = "FullEng – Фонетика. Часть 1";
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
}

.unlocked-lesson {
  cursor: pointer;
}

.locked-lesson {
  color: #b2b2b2;
}

.locked-lesson:hover::after {
  content: "Для открытия этого урока пройдите успешно предыдущие.";
  color: #262626;
  background-color: #ffffff;
  border-radius: 7px;
  position: absolute;
  margin-left: 10px;
  padding: 1px 8px;
}
</style>