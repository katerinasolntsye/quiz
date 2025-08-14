<template>
  <div class="main">
    <h1>Курсы</h1>
    <p>Информация о курсах.</p>
    <!-- <p>
      <router-link to="/">LoginPage</router-link>
    </p> -->
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>ID</th>
          <th>Партнёр</th>
          <th>Название</th>
          <th>Ссылка</th>
          <th>Цена</th>
          <th>Срок доступа, дни</th>
          <th>Кол-во уроков</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>Китайский: с нуля до носителя</td>
          <td>ivanivanov.com</td>
          <td>4900</td>
          <td>180</td>
          <td>10</td>
        </tr>
        <tr>
          <td>2</td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>Успешный маркетолог</td>
          <td>petrpetrov.com</td>
          <td>9900</td>
          <td>365</td>
          <td>20</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1234567890</td>
          <td>1234567890</td>
          <td>Автоматизируй бизнес вместе с Ивановым</td>
          <td>sidorsidorov.com</td>
          <td>3900</td>
          <td>Неограничен</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CoursesPage',
  // props: {
  //   msg: String
  // },
  data: () => ({

  }),
  mounted() {
    document.title = "Курсы";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin: 50px 0 0 241px;
}
</style>
