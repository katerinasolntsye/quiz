<template>
  <div class="main">
  <!-- <HeaderComponent1 /> -->
  <main>
      <p>MainComponent1</p>
      <p>Текст</p>
      {{$store.getters.getCount}}
      <!-- <button @click="$store.commit('increment')">+</button> -->
      <button @click="$store.dispatch('increment')">+</button>
  </main>
  </div>
</template>

<script>
// import HeaderComponent1 from './HeaderComponent1.vue'

export default {
  components: {
    // HeaderComponent1
  },
  mounted() {  
    document.title = "FullEng";
  }, 
  data() {
    return {}
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
</style>