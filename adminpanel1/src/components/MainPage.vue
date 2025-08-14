<template>
  <div class="main">
    <h1>Главная</h1>
    <p>Добро пожаловать!</p>
    <div class="margin-left-25">
      <!-- <label for="period">Период</label> -->
      <select name="period" id="period">
        <option value="week">Неделя</option>
        <option value="month">Месяц</option>
        <option value="year">Год</option>
        <option value="all-time">Всё время</option>
      </select>
    </div>
    <p>
      <span class="counter">0</span> студентов
    </p>
    <p>
      <span class="counter">0</span> партнёров
    </p>
    <p>
      <span class="counter">0</span> курсов
    </p>
    <p>
      <span class="counter">0</span> заказов
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  // props: {
  //   msg: String
  // },
  data: () => ({

  }),
  mounted() {
    document.title = "Главная";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin: 50px 0 0 241px;
}

.counter {
  font-weight: bold;
}
</style>
