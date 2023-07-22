<template>
  <div class="main">
  <!-- <HeaderComponent2 /> -->
  <main>
      <h1>Фонетика и правила чтения. Часть 2</h1>
        <p>
          <span class="lessons_menu unlocked-lesson" @click="$router.push('/student/introductory-lesson')">0. Приветствие</span>
        </p>
        <h2>Правила чтения. Часть 2:</h2>
        <p>
          <!-- {{ JSON.parse($store.getters.getUser.payedcourses)[1].
          lessons.filter(lesson => lesson.title == "1. Буква Aa")[0].unlocked == true }} -->
          <span class="lessons_menu" :class="(JSON.parse($store.getters.getUser.payedcourses)[1].lessons.filter(lesson => lesson.title == l.title)[0].unlocked == true)?'unlocked-lesson':'locked-lesson'" @click="openLesson(l)" v-for="l in lessons" :key="l.title" v-html="l.title" style="white-space: pre;"></span>
          <!-- <router-link class="lessons_menu" to="/student/phonetics2/lesson1">1. Введение</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">2. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">3. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">4. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">5. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">6. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">7. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">8. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">9. ААА</router-link>
          <br />
          <router-link class="lessons_menu" to="/student/phonetics1/lesson10">10. ААА</router-link> -->
        </p>
  </main>
  </div>
</template>

<script>
// import HeaderComponent2 from './HeaderComponent2.vue'

export default {
  name: 'Phonetics2Lessons',
  components: {
    // HeaderComponent2
  },
  data() {
    return {
      lessons: [
        {
          title: "1. Буква Aa",
          link: "/student/phonetics2/lesson1",
        },
        {
          title: "\n2. Буквы Bb, Cc, Dd",
          link: "/student/phonetics2/lesson2",
        },
        {
          title: "\n3. Буква Ee",
          link: "/student/phonetics2/lesson3",
        },
        {
          title: "\n4. Буквы Gg, Hh",
          link: "/student/phonetics2/lesson4",
        },
        {
          title: "\n5. Буква Ii",
          link: "/student/phonetics2/lesson5",
        },
        {
          title: "\n6. Буквы Kk, Ll, Nn",
          link: "/student/phonetics2/lesson6",
        },
        {
          title: "\n7. Буква Oo",
          link: "/student/phonetics2/lesson7",
        },
        {
          title: "\n8. Буквы Pp, Qq, Rr, Ss, Tt",
          link: "/student/phonetics2/lesson8",
        },
        {
          title: "\n9. Буквы Uu, Ww, Yy",
          link: "/student/phonetics2/lesson9",
        },
        {
          title: "\n10. Практика",
          link: "/student/phonetics2/lesson10",
        },
      ],
    }
  },
  methods: {
    // openLesson(link) {
    //   // let router = this.$router.resolve({path: `${link}`})
    //   // open(router.href, "_blank");
    //   this.$router.push(link)
    // },
    openLesson(l) {
        if(JSON.parse(this.$store.getters.getUser.payedcourses)[1].lessons.some(lesson => lesson.title == l.title)) {
          this.$router.push(l.link)
        }
    },
  },
  mounted() {  
    document.title = "FullEng – Фонетика. Часть 2";
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