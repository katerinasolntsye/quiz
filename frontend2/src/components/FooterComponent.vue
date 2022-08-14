<template>
  <footer>
    <div id="footer_content">
			<div id="footer_copyright"><span style="font-family: Cambria">&copy;</span> FullEng, 2020</div>
			<div id="footer_menu">
				<p>
					<a href="contacts.html">Контакты</a>
				</p>
				<p>
					<a href="privacy.html">Политика конфиденциальности</a>
				</p>
				<p>
					<a href="terms.html">Условия использования</a>
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
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    padding: 3px 0 8px 0;
}

#app_img {
    display: flex;
    justify-content: space-between;
}

div#footer_menu p {
    margin: 0;
    padding-bottom: 15px;
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
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
