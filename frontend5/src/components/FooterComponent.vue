<template>
  <footer>
    <div id="footer_content">
			<div id="footer_copyright"><span style="font-family: Cambria">&copy;</span> FullEng, 2020</div>
			<div id="footer_menu">
        <p>
					<!-- <a href="#">Контакты</a> -->
          <router-link class="footer-link" to="/contacts">Контакты</router-link>
				</p>
        <p>
          <router-link class="footer-link" to="/partnership">Партнёрская программа</router-link>
				</p>
      <div>
        <p>
          <!-- <span @click="$store.commit('openTermsOfService')" class="footer-link">Пользовательское соглашение</span> -->
          <!-- <router-link @click="$store.commit('openTermsOfService')" class="footer-link" to="/offer-agreement">Пользовательское соглашение</router-link> -->
          <span @click="$store.commit('openTermsOfService')">
            <router-link class="footer-link" to="/offer-agreement">Пользовательское соглашение</router-link>
          </span>
        </p>
        </div>
        <p>
          <!-- <span @click="termsOfUse=true" class="footer-link">Условия использования</span> -->
          <span @click="$store.commit('openTermsOfUse')">
            <router-link class="footer-link" to="/terms-of-use">Условия использования</router-link>
          </span>
        </p>
        <p>
          <!-- <span @click="privacyPolicy=true" class="footer-link">Политика конфиденциальности</span> -->
          <span @click="$store.commit('openPrivacyPolicy')">
            <router-link class="footer-link" to="/privacy-policy">Политика конфиденциальности</router-link>
          </span>
        </p>
			</div>
			<div id="footer_app">
				<div id="app_text">Мобильное приложение <span style="color: #b2b2b2">(в разработке)</span></div>
				<div id="app_img">
					<img src="../assets/apple-store-disabled.png" alt="Загрузите в App Store" width="135" />
					<img src="../assets/google-play-disabled.png" alt="Загрузите на Google Play" width="135" />
				</div>
			</div>
		</div>
    <!-- <h1>{{ msg }}</h1> -->
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  components: {},
  data() {
    return {}
  },
  methods: {},
  mounted() {
    document.querySelector("#footer_content").oncopy = function logCopy(event) {
        event.preventDefault();
      }

      // document.querySelector("#footer_content").ondragstart = function noselect(event) {
      //   event.preventDefault();
      // };

      // document.querySelector("#footer_content").onselectstart = function noselect(event) {
      //   event.preventDefault();
      // };

      document.querySelector("#footer_content").oncontextmenu = function noselect(event) {
        event.preventDefault();
      };
  },
}
</script>

<style scoped>
footer {
    font-size: 78%;
    color: #808080;
    background-color: #f0f0f0;
    margin-top: 32px;
    padding: 0;
    flex: 0 0 auto;
}

#footer_content {
    width: 966px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-content: stretch;
}

#footer_copyright {
    color: #b2b2b2;
    padding: 17px 0 17px 1px;
}

#footer_menu {
    padding: 17px 0 2px;
}

#footer_app {
    font-size: 89%;
    padding: 17px 0 17px 1px;
}

#app_text {
    padding-bottom: 8px;
}

#app_img {
    display: flex;
    justify-content: space-between;
}

div#footer_menu p {
    margin: 0;
    padding-bottom: 15px;
}

.footer-link {
    color: #808080;
}

.footer-link:hover {
    color: #b2b2b2;
    cursor: pointer;
    text-decoration: underline;
}

footer a.inside-footer-text {
  text-decoration: underline;
}

footer a:link {
    color: #808080;
}

footer a:visited {
    color: #808080;
}

footer a:hover {
    color: #b2b2b2;
}
</style>
