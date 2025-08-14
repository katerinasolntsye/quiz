<template>
  <div class="main">
    <h1>Промокоды</h1>
    <p>Информация о промокодах.</p>
    <!-- <p>
      <router-link to="/">LoginPage</router-link>
    </p> -->
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>ID</th>
          <th>Партнёр</th>
          <th>Скидка</th>
          <th>Описание</th>
          <th>Дата создания</th>
          <th>Срок доступа</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>ABCDEF</td>
          <td>1234567890</td>
          <td>10%</td>
          <td>Только для постоянных клиентов.</td>
          <td>01.01.2025</td>
          <td>01.06.2025</td>
        </tr>
        <tr>
          <td>2</td>
          <td>ABCDEF</td>
          <td>1234567890</td>
          <td>100 руб.</td>
          <td>При первой покупке.</td>
          <td>01.01.2025</td>
          <td>01.06.2025</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ABCDEF</td>
          <td>1234567890</td>
          <td>20%</td>
          <td></td>
          <td>01.01.2025</td>
          <td>01.06.2025</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OrdersPage',
  // props: {
  //   msg: String
  // },
  data: () => ({

  }),
  mounted() {
    document.title = "Заказы";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin: 50px 0 0 241px;
}
</style>
