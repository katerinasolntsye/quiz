<template>
  <div class="main">
  <!-- <HeaderComponent2 /> -->
  <main>
      <p>MainComponent2</p>
      <h1>Список курсов</h1>
      <h2>Мои курсы:</h2>
        <!-- <router-link class="lessons_menu" to="/student/phonetics1">Фонетика и правила чтения. Часть 1</router-link>
        <br />
        <router-link :disabled="courseSelected" class="lessons_menu" to="/student/phonetics2">Фонетика и правила чтения. Часть 2</router-link> -->
      <p>
        <span class="lessons_menu" :class="(JSON.parse($store.getters.getUser.payedcourses).some(course => course.title == c.title))?'unlocked-course':'locked-course'" @click="openCourse(c)" v-for="c in courses" :key="c.title" v-html="c.title" style="white-space: pre;"></span>
        <!-- JSON.parse($store.getters.getUser.payedcourses) -->
      </p>
        <!-- <p style="cursor: pointer;" class="lessons_menu" @click="openCourse(c)" v-for="c in courses" :key="c.title">{{c.title}}</p> -->
      <!-- <ul>
        <li @click="courseSelected = 1" class="lessons_menu">Фонетика и правила чтения. Часть 1</li>
        <Phonetics1Lessons />
        <li @click="courseSelected = 2" class="lessons_menu">Фонетика и правила чтения. Часть 2</li>
      </ul> -->
  </main>
  <!-- <Phonetics1Lessons v-if="courseSelected == 1"/> -->
  <!-- <Phonetics2Lessons v-if="courseSelected == 2"/> -->
  </div>
</template>

<script>
// import HeaderComponent2 from './HeaderComponent2.vue'
// import Phonetics1Lessons from './Phonetics1Lessons.vue'
// import Phonetics2Lessons from './Phonetics2Lessons.vue'

export default {
  name: 'MainComponent2',
  components: {
    // HeaderComponent2
    // Phonetics1Lessons,
    // Phonetics2Lessons
  },
  data() {
    return {
      courses: [
        {
          title: "Фонетика и правила чтения. Часть 1",
          link1: "/student/phonetics1",
          link2: "/",
        },
        {
          title: "\nФонетика и правила чтения. Часть 2",
          link1: "/student/phonetics2",
          link2: "/",
        },
      ],
    }
  },
  methods: {
    openCourse(c) {
      if(JSON.parse(this.$store.getters.getUser.payedcourses).some(course => course.title == c.title)) {
        // let router = this.$router.resolve({path: `${c.link1}`})
        // open(router.href, "_blank");
        this.$router.push(c.link1)
      } else {
        // let router = this.$router.resolve({path: `${c.link2}`})
        // open(router.href, "_blank");
        this.$router.push(c.link2)
      }
    },
  },
  mounted() {  
    document.title = "FullEng – Мои курсы";
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

.unlocked-course {
  cursor: pointer;
}

.locked-course {
  cursor: pointer;
  color: #b2b2b2;
}

.locked-course:hover {
  color: #808080;
}

.locked-course:hover::after {
  content: "Доступен для покупки.";
  color: #262626;
  background-color: #ffffff;
  border-radius: 7px;
  position: absolute;
  margin-left: 10px;
  padding: 1px 8px;
}
</style>