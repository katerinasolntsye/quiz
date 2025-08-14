<template>
  <div class="main">
    <h1>Заказы</h1>
    <p>Информация о заказах.</p>
    <!-- <p>
      <router-link to="/">LoginPage</router-link>
    </p> -->
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
