<template>
  <div class="main">
  <main>
    <div class="bottomground">
    <div class="topground">
      <!-- <p>PartnerComponent</p> -->
      <h2>Ваш партнёрский промокод:</h2>
      <h1>АААААА</h1>
      <h2>Статистика:</h2>
      <div class="statistics">
        <div class="statistic-card">
          <h2><b>0</b></h2>
          <p class="padding_none">Кол-во продаж</p>
        </div>
        <div class="statistic-card">
          <h2><b>0 руб.</b></h2>
          <p class="padding_none">Вознаграждение</p>
        </div>
        <div class="statistic-card">
          <h2><b>0 руб.</b></h2>
          <p class="padding_none">Сумма продаж</p>
        </div>
      </div>
      <h2>Вывод средств</h2>
      <p>ААА</p>
    </div>
    </div>
      <div class="partnership-footer">
        <p>
          <span @click="$store.commit('openPartnershipAgreement')">
            <router-link class="footer-link" to="/partnership-agreement">Партнёрское соглашение</router-link>
          </span>
        </p>
        <p>
          <span @click="$store.commit('openTermsOfPartnership')">
            <router-link class="footer-link" to="/terms-of-partnership">Условия партнёрской программы</router-link>
          </span>
        </p>
      </div>
  </main>
  </div>
</template>

<script>
// import HeaderComponent2 from './HeaderComponent2.vue'
// import Phonetics1Lessons from './Phonetics1Lessons.vue'
// import Phonetics2Lessons from './Phonetics2Lessons.vue'

export default {
  components: {
    // HeaderComponent2
    // Phonetics1Lessons,
    // Phonetics2Lessons
  },
  data() {
    return {}
  },
  methods: {},
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
  text-align: justify;
  background-color: #ffffff;
}

.bottomground {
  width: 782px;
  padding: 27px 53px 0;
  background-color: #ffffff;
  margin: -27px -53px 0;
}

.topground {
  width: 782px;
  background-color: #f7f7f7;
  border-radius: 7px;
  padding: 27px 53px 0;
  margin: -27px -53px 0;
}

a:link {
    color: #808080;
}

a:visited {
    color: #808080;
}

a:hover {
    color: #b2b2b2;
}

.statistics {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 27px;
}

.statistic-card {
  background-color: #ffffff;
  /* border: 1px solid orange; */
  border-radius: 7px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 27%;
  padding: 1rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.partnership-footer {
  background-color: #ffffff;
  width: 888px;
  padding-top: 13px;
  margin: 0px -53px -38px;
}

.partnership-footer p {
  font-size: 78%;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
}
</style>