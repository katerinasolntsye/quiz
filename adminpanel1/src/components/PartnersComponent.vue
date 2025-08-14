<template>
  <div class="main">
    <h1>Партнёры</h1>
    <p>Информация о партнёрах.</p>
    <!-- <p>
      <router-link to="/">LoginPage</router-link>
    </p> -->
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>ID</th>
          <th>E-mail</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Отчество</th>
          <th>Дата рождения</th>
          <th>Страна</th>
          <th>Город</th>
          <th>Телефон</th>
          <th>Google</th>
          <th>Вконтакте</th>
          <th>Telegram</th>
          <th>Дата регистрации</th>
          <th>Часовой пояс</th>
          <th>ОПФ</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1234567890</td>
          <td>ivanivanov@yandex.ru</td>
          <td>Иван</td>
          <td>Иванов</td>
          <td>Иванович</td>
          <td>01.01.2000</td>
          <td>Россия</td>
          <td>Москва</td>
          <td>+79991112233</td>
          <td>ivanivanov@gmail.com</td>
          <td>@ivanivanov</td>
          <td>@ivanivanov</td>
          <td>01.01.2025</td>
          <td>+3</td>
          <td>Физ. лицо</td>
        </tr>
        <tr>
          <td>2</td>
          <td>1234567890</td>
          <td>petrpetrov@yandex.ru</td>
          <td>Пётр</td>
          <td>Петров</td>
          <td>Петрович</td>
          <td>01.01.2000</td>
          <td>Россия</td>
          <td>Москва</td>
          <td>+79991112233</td>
          <td>petrpetrov@gmail.com</td>
          <td>@petrpetrov</td>
          <td>@petrpetrov</td>
          <td>01.01.2025</td>
          <td>+3</td>
          <td>Самозанятый</td>
        </tr>
        <tr>
          <td>3</td>
          <td>1234567890</td>
          <td>sidorsidorov@yandex.ru</td>
          <td>Сидор</td>
          <td>Сидоров</td>
          <td>Сидорович</td>
          <td>01.01.2000</td>
          <td>Россия</td>
          <td>Москва</td>
          <td>+79991112233</td>
          <td>sidorsidorov@gmail.com</td>
          <td>@sidorsidorov</td>
          <td>@sidorsidorov</td>
          <td>01.01.2025</td>
          <td>+3</td>
          <td>ИП</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PartnersComponent',
  // props: {
  //   msg: String
  // },
  data: () => ({

  }),
  mounted() {
    document.title = "Партнёры";
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  margin: 50px 0 0 241px;
}
</style>
