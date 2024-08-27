<template>
  <div class="main">
  <main>
    <div class="bottomground">
    <div class="topground">
      <!-- <p>PartnerComponent</p> -->
      <h2>Ваш партнёрский промокод</h2>
      <h1>{{$store.getters.getPartner.promocode}}</h1>
      <h2>Статистика</h2>
      <div class="statistics">
        <div class="statistic-card">
<!-- Sales number -->
          <h2><b>{{$store.getters.getPartner.salesnumber}}</b></h2>
          <p class="padding_none" title="За весь период участия в программе.">
            <svg class="icon-width-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path fill="#012269" stroke="#012269" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
            </svg> 
            Кол-во продаж</p>
        </div>
        <div class="statistic-card">
<!-- Reward  -->
          <h2 :class="{ padding_none: individual }"><b>{{$store.getters.getPartner.reward}} руб.</b></h2>
          <p v-if="individual" class="blue" style="font-size: 78%; padding-bottom: 3px;">Доступно: <b>{{(Number($store.getters.getPartner.reward)<=15000)?$store.getters.getPartner.reward:"15000"}} руб.</b></p>
          <p class="padding_none" title="За расчётный период.">
            <svg class="icon-width-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path fill="#012269" stroke="#012269" d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/>
            </svg> 
            Вознаграждение</p>
        </div>
        <div class="statistic-card">
<!-- Sales Amount -->
          <h2><b>{{$store.getters.getPartner.salesamount}} руб.</b></h2>
          <p class="padding_none" title="За весь период участия в программе.">
            <svg class="icon-width-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path fill="#012269" stroke="#012269" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg> 
            Сумма продаж</p>
        </div>
        <!-- <svg class="icon-width-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
          <path fill="#012269" stroke="#012269" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
        <svg class="icon-width-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          ! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
          <path fill="#012269" stroke="#012269" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg> -->
      </div>
      <div class="scroll-table">
        <table class="table-head">
          <tr>
            <th>Продукт</th>
            <th style="letter-spacing: -0.07em;">Вознаграждение</th>
            <!-- <th>Посетитель</th> -->
            <th>Покупатель</th>
            <th>Дата</th>
          </tr>
        </table>
        <div class="scroll-table-body">
          <table class="table-body">
            <tr>
              <td>Фонетика и правила чтения. Часть 1</td>
              <td>+900 руб.</td>
              <td>#100</td>
              <td>01.01.2023 12:00</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
            <tr>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
              <td>ААА</td>
            </tr>
          </table>
        </div>
      </div>
      <h2>Вывод средств</h2>
      <p id="profile-filling-msg" v-if="empty_profile"><i>Заполните <router-link class="footer-link" to="/partner/profile">Профиль</router-link>, чтобы получить возможность вывести средства.</i></p>
      <div id="request-money" v-if="individual || selfEmployed || soleTrader">
        <p id="reward-balance" :class="{ padding_none: individual }">Баланс: <b>{{$store.getters.getPartner.reward}} руб.</b></p>
        <p id="available-taking-out" class="blue" v-if="individual">Доступно к выводу: <b>{{(Number($store.getters.getPartner.reward)<=15000)?$store.getters.getPartner.reward:"15000"}} руб.</b></p>
        <button type="button" @click="sendRequest()">Запросить вывод</button>
      </div>
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
  name: 'PartnerComponent',
  components: {
    // HeaderComponent2
    // Phonetics1Lessons,
    // Phonetics2Lessons
  },
  data() {
    return {
      empty_profile: true,
      individual: false,
      selfEmployed: false,
      soleTrader: false,
    }
  },
  mounted() {  
    document.title = "FullEng – Партнёрский кабинет";

    if(this.$store.getters.getPartner.legal == "individual" &&
        this.$store.getters.getPartner.name != "" &&
        this.$store.getters.getPartner.surname != "" &&
        this.$store.getters.getPartner.tel != "" &&
        this.$store.getters.getPartner.series != "" &&
        this.$store.getters.getPartner.number != "" &&
        this.$store.getters.getPartner.issued != "" &&
        this.$store.getters.getPartner.issueddate != "" &&
        this.$store.getters.getPartner.recipientbank != "") {
      this.empty_profile = false;
      this.individual = true;
      this.selfEmployed = false;
      this.soleTrader = false;
    }
    else if(this.$store.getters.getPartner.legal == "self" &&
        this.$store.getters.getPartner.name != "" &&
        this.$store.getters.getPartner.surname != "" &&
        this.$store.getters.getPartner.tel != "" &&
        this.$store.getters.getPartner.series != "" &&
        this.$store.getters.getPartner.number != "" &&
        this.$store.getters.getPartner.issued != "" &&
        this.$store.getters.getPartner.issueddate != "" &&
        this.$store.getters.getPartner.passportscan != "" &&
        this.$store.getters.getPartner.tin != "" &&
        this.$store.getters.getPartner.selfemployedreference != "" &&
        this.$store.getters.getPartner.accountnumber != "" &&
        this.$store.getters.getPartner.bankid != "" &&
        this.$store.getters.getPartner.recipientbank != "") {
      this.empty_profile = false;
      this.individual = false;
      this.selfEmployed = true;
      this.soleTrader = false;
    }
    else if(this.$store.getters.getPartner.legal == "sole" &&
        this.$store.getters.getPartner.name != "" &&
        this.$store.getters.getPartner.surname != "" &&
        this.$store.getters.getPartner.tel != "" &&
        this.$store.getters.getPartner.series != "" &&
        this.$store.getters.getPartner.number != "" &&
        this.$store.getters.getPartner.issued != "" &&
        this.$store.getters.getPartner.issueddate != "" &&
        this.$store.getters.getPartner.tin != "" &&
        this.$store.getters.getPartner.soletradercertificate != "" &&
        this.$store.getters.getPartner.accountnumber != "" &&
        this.$store.getters.getPartner.bankid != "" &&
        this.$store.getters.getPartner.recipientbank != "") {
      this.empty_profile = false;
      this.individual = false;
      this.selfEmployed = false;
      this.soleTrader = true;
    }
    else {
      this.empty_profile = true;
      this.individual = false;
      this.selfEmployed = false;
      this.soleTrader = false;
    }
  },
  updated() {
    if(this.$store.getters.getPartner.legal == "individual" &&
        this.$store.getters.getPartner.name != "" &&
        this.$store.getters.getPartner.surname != "" &&
        this.$store.getters.getPartner.tel != "" &&
        this.$store.getters.getPartner.series != "" &&
        this.$store.getters.getPartner.number != "" &&
        this.$store.getters.getPartner.issued != "" &&
        this.$store.getters.getPartner.issueddate != "" &&
        this.$store.getters.getPartner.recipientbank != "") {
      this.empty_profile = false;
      this.individual = true;
      this.selfEmployed = false;
      this.soleTrader = false;
    }
    else if(this.$store.getters.getPartner.legal == "self" &&
        this.$store.getters.getPartner.name != "" &&
        this.$store.getters.getPartner.surname != "" &&
        this.$store.getters.getPartner.tel != "" &&
        this.$store.getters.getPartner.series != "" &&
        this.$store.getters.getPartner.number != "" &&
        this.$store.getters.getPartner.issued != "" &&
        this.$store.getters.getPartner.issueddate != "" &&
        this.$store.getters.getPartner.passportscan != "" &&
        this.$store.getters.getPartner.tin != "" &&
        this.$store.getters.getPartner.selfemployedreference != "" &&
        this.$store.getters.getPartner.accountnumber != "" &&
        this.$store.getters.getPartner.bankid != "" &&
        this.$store.getters.getPartner.recipientbank != "") {
      this.empty_profile = false;
      this.individual = false;
      this.selfEmployed = true;
      this.soleTrader = false;
    }
    else if(this.$store.getters.getPartner.legal == "sole" &&
        this.$store.getters.getPartner.name != "" &&
        this.$store.getters.getPartner.surname != "" &&
        this.$store.getters.getPartner.tel != "" &&
        this.$store.getters.getPartner.series != "" &&
        this.$store.getters.getPartner.number != "" &&
        this.$store.getters.getPartner.issued != "" &&
        this.$store.getters.getPartner.issueddate != "" &&
        this.$store.getters.getPartner.tin != "" &&
        this.$store.getters.getPartner.soletradercertificate != "" &&
        this.$store.getters.getPartner.accountnumber != "" &&
        this.$store.getters.getPartner.bankid != "" &&
        this.$store.getters.getPartner.recipientbank != "") {
      this.empty_profile = false;
      this.individual = false;
      this.selfEmployed = false;
      this.soleTrader = true;
    }
    else {
      this.empty_profile = true;
      this.individual = false;
      this.selfEmployed = false;
      this.soleTrader = false;
    }
  },
  methods: {
    sendRequest() {
      console.log("Sending is OK.");
    },
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

button {
  font-family: Times New Roman, Times, serif;
  font-size: 100%;
  box-sizing: border-box;
  border: 0;
  border-radius: 7px;
  background-color: #012269;
  color: #ffffff;
	transition: all .3s;
  margin-bottom: 27px;
  padding: 4px 8px;
}

button:hover {
  color: #b2b2b2;
}

.statistics {
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap;
  gap: 1rem; */
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

.icon-width-20 {
  width: 20px;
}

.scroll-table-body {
	height: 300px;
	overflow-x: auto;
}

.scroll-table {
  background-color: #ffffff;
  margin: 0 0 27px;
  /* padding: 11px 20px 12px; */
  border-radius: 7px;
}

.scroll-table table {
	width:100%;
	table-layout: fixed;
	border: none;
  /* padding: 11px 20px 12px; */
}

.scroll-table table.table-head {
  padding: 11px 20px 12px;
  background-color: #e1e9fa;
  border-radius: 7px;
}

.scroll-table table.table-head tr th {
  width: 22%;
  /* width: 162px; */
  border-left: 1px solid #ffffff;
}

.scroll-table table.table-head tr th:first-child {
  width: 34%;
  /* width: 252px; */
  border: 0;
}

.scroll-table table.table-body tr td {
  width: 22%;
  /* width: 162px; */
  /* border: 1px solid orange; */
  font-size: 85%;
}

.scroll-table table.table-body tr td:first-child {
  width: 34%;
  /* width: 252px; */
  padding-left: 20px;
}

.scroll-table table.table-body tr td:last-child {
  padding-right: 10px;
}

.scroll-table table.table-body tr:nth-child(even) {
  background-color: #f7f7f7;
}

.scroll-table table.table-body tr:nth-child(even) td:first-child {
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
.scroll-table table.table-body tr:nth-child(even) td:last-child {
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
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