<template>
  <div class="main">
  <!-- <HeaderComponent1 /> -->
  <main>
      <h1>Профиль</h1>
		<h2>Основная информация</h2>
		<div v-if="saveData1">
			<table>
				<tr>
					<td>Имя</td>
					<td>{{$store.getters.getUser.username}}</td>
				</tr>
				<tr>
					<td>Фамилия</td>
					<td>{{$store.getters.getUser.surname}}</td>
				</tr>
				<tr>
					<td>Дата рождения</td>
					<td>{{$store.getters.getUser.birthdate}}</td>
				</tr>
				<tr>
					<td>Страна</td>
					<td>{{$store.getters.getUser.country}}</td>
				</tr>
				<tr>
					<td>Город</td>
					<td>{{$store.getters.getUser.city}}</td>
				</tr>
			</table>
			<div>
                <button class="profile_button" @click.prevent="saveData1=false, editData1=true">Изменить</button>
            </div>
		</div>
		<form name="main-info" v-if="editData1">
            <div class="profile_text">
                <label>Имя</label>
                <input class="profile_text" type="text" name="username" v-model="userName" placeholder="Ваше имя" :class="{ errored: nameError }" />
            </div>
            <div class="profile_text">
                <label>Фамилия</label>
                <input class="profile_text" type="text" name="surname" v-model="userSurname" placeholder="Ваша фамилия" :class="{ errored: surnameError }" />
            </div>
            <div class="profile_text">
                <label style="padding: 5px 32px 0px 0px">Дата рождения</label>
                <select id="select1" class="profile" name="day" v-model="userBirthDay" :class="{ errored: birthDayError }" onchange="document.getElementById('select1').style.color = '#262626'">
					<option class="main-option" value="null" selected disabled>День</option>
					<option value="01">1</option>
					<option value="02">2</option>
					<option value="03">3</option>
					<option value="04">4</option>
					<option value="05">5</option>
					<option value="06">6</option>
					<option value="07">7</option>
					<option value="08">8</option>
					<option value="09">9</option>
					<option value="10">10</option>
					<option value="11">11</option>
					<option value="12">12</option>
					<option value="13">13</option>
					<option value="14">14</option>
					<option value="15">15</option>
					<option value="16">16</option>
					<option value="17">17</option>
					<option value="18">18</option>
					<option value="19">19</option>
					<option value="20">20</option>
					<option value="21">21</option>
					<option value="22">22</option>
					<option value="23">23</option>
					<option value="24">24</option>
					<option value="25">25</option>
					<option value="26">26</option>
					<option value="27">27</option>
					<option value="28">28</option>
					<option value="29">29</option>
					<option value="30">30</option>
					<option value="31">31</option>
				</select >
				<select id="select2" class="profile" style="width: 185px;" name="month" v-model="userBirthMonth" :class="{ errored: birthMonthError }" onchange="document.getElementById('select2').style.color = '#262626'">
					<option class="main-option" value="null" selected disabled>Месяц</option>
					<option value="01">Январь</option>
					<option value="02">Февраль</option>
					<option value="03">Март</option>
					<option value="04">Апрель</option>
					<option value="05">Май</option>
					<option value="06">Июнь</option>
					<option value="07">Июль</option>
					<option value="08">Август</option>
					<option value="09">Сентябрь</option>
					<option value="10">Октябрь</option>
					<option value="11">Ноябрь</option>
					<option value="12">Декабрь</option>
				</select >
				<select id="select3" class="profile" name="year" v-model="userBirthYear" :class="{ errored: birthYearError }" onchange="document.getElementById('select3').style.color = '#262626'">
					<option class="main-option" value="null" selected disabled>Год</option>
					<option value="1950">1950</option>
					<option value="1951">1951</option>
					<option value="1952">1952</option>
					<option value="1953">1953</option>
					<option value="1954">1954</option>
					<option value="1955">1955</option>
					<option value="1956">1956</option>
					<option value="1957">1957</option>
					<option value="1958">1958</option>
					<option value="1959">1959</option>
					<option value="1960">1960</option>
					<option value="1961">1961</option>
					<option value="1962">1962</option>
					<option value="1963">1963</option>
					<option value="1964">1964</option>
					<option value="1965">1965</option>
					<option value="1966">1966</option>
					<option value="1967">1967</option>
					<option value="1968">1968</option>
					<option value="1969">1969</option>
					<option value="1970">1970</option>
					<option value="1971">1971</option>
					<option value="1972">1972</option>
					<option value="1973">1973</option>
					<option value="1974">1974</option>
					<option value="1975">1975</option>
					<option value="1976">1976</option>
					<option value="1977">1977</option>
					<option value="1978">1978</option>
					<option value="1979">1979</option>
					<option value="1980">1980</option>
					<option value="1981">1981</option>
					<option value="1982">1982</option>
					<option value="1983">1983</option>
					<option value="1984">1984</option>
					<option value="1985">1985</option>
					<option value="1986">1986</option>
					<option value="1987">1987</option>
					<option value="1988">1988</option>
					<option value="1989">1989</option>
					<option value="1990">1990</option>
					<option value="1991">1991</option>
					<option value="1992">1992</option>
					<option value="1993">1993</option>
					<option value="1994">1994</option>
					<option value="1995">1995</option>
					<option value="1996">1996</option>
					<option value="1997">1997</option>
					<option value="1998">1998</option>
					<option value="1999">1999</option>
					<option value="2000">2000</option>
					<option value="2001">2001</option>
					<option value="2002">2002</option>
					<option value="2003">2003</option>
					<option value="2004">2004</option>
					<option value="2005">2005</option>
					<option value="2006">2006</option>
					<option value="2007">2007</option>
					<option value="2008">2008</option>
					<option value="2009">2009</option>
					<option value="2010">2010</option>
					<option value="2011">2011</option>
					<option value="2012">2012</option>
					<option value="2013">2013</option>
					<option value="2014">2014</option>
					<option value="2015">2015</option>
					<option value="2016">2016</option>
					<option value="2017">2017</option>
					<option value="2018">2018</option>
					<option value="2019">2019</option>
					<option value="2020">2020</option>
					<option value="2021">2021</option>
					<option value="2022">2022</option>
					<option value="2023">2023</option>
					<option value="2024">2024</option>
					<option value="2025">2025</option>
					<option value="2026">2026</option>
					<option value="2027">2027</option>
					<option value="2028">2028</option>
					<option value="2029">2029</option>
					<option value="2030">2030</option>
				</select >
			</div>
			<div class="profile_text">
				<label style="padding: 5px 113px 0px 0px">Страна</label>
				<select id="select4" class="profile" style="width: 582px;" name="country" v-model="userCountry" onchange="document.getElementById('select4').style.color = '#262626'">
					<option class="main-option" value="null" selected disabled>Ваша страна</option>
					<option value="ab">Абхазия</option>
					<option value="au">Австралия</option>
					<option value="at">Австрия</option>
					<option value="az">Азербайджан</option>
					<option value="al">Албания</option>
					<option value="dz">Алжир</option>
					<option value="vi">Американские Виргинские острова</option>
					<option value="ao">Ангола</option>
					<option value="ad">Андорра</option>
					<option value="ag">Антигуа и Барбуда</option>
					<option value="ar">Аргентина</option>
					<option value="am">Армения</option>
					<option value="aw">Аруба</option>
					<option value="af">Афганистан</option>
					<option value="bs">Багамские острова</option>
					<option value="bd">Бангладеш</option>
					<option value="bb">Барбадос</option>
					<option value="bh">Бахрейн</option>
					<option value="by">Беларусь</option>
					<option value="bz">Белиз</option>
					<option value="be">Бельгия</option>
					<option value="bj">Бенин</option>
					<option value="bm">Бермудские Острова</option>
					<option value="bg">Болгария</option>
					<option value="bo">Боливия</option>
					<option value="ba">Босния и Герцеговина</option>
					<option value="bw">Ботсвана</option>
					<option value="br">Бразилия</option>
					<option value="vg">Британские Виргинские острова</option>
					<option value="bn">Бруней</option>
					<option value="bf">Буркина-Фасо</option>
					<option value="bi">Бурунди</option>
					<option value="bt">Бутан</option>
					<option value="vu">Вануату</option>
					<option value="va">Ватикан</option>
					<option value="gb">Великобритания</option>
					<option value="hu">Венгрия</option>
					<option value="ve">Венесуэла</option>
					<option value="tl">Восточный Тимор</option>
					<option value="vn">Вьетнам</option>
					<option value="ga">Габон</option>
					<option value="ht">Гаити</option>
					<option value="gy">Гайана</option>
					<option value="gm">Гамбия</option>
					<option value="gh">Гана</option>
					<option value="gt">Гватемала</option>
					<option value="gn">Гвинея</option>
					<option value="gw">Гвинея-Бисау</option>
					<option value="de">Германия</option>
					<option value="gi">Гибралтар</option>
					<option value="hn">Гондурас</option>
					<option value="gd">Гренада</option>
					<option value="gl">Гренландия</option>
					<option value="gr">Греция</option>
					<option value="ge">Грузия</option>
					<option value="gu">Гуам</option>
					<option value="dk">Дания</option>
					<option value="cd">Демократическая Республика Конго</option>
					<option value="dj">Джибути</option>
					<option value="dm">Доминика</option>
					<option value="do">Доминиканская Республика</option>
					<option value="eg">Египет</option>
					<option value="zm">Замбия</option>
					<option value="zw">Зимбабве</option>
					<option value="il">Израиль</option>
					<option value="in">Индия</option>
					<option value="id">Индонезия</option>
					<option value="jo">Иордания</option>
					<option value="iq">Ирак</option>
					<option value="ir">Иран</option>
					<option value="ie">Ирландия</option>
					<option value="is">Исландия</option>
					<option value="es">Испания</option>
					<option value="it">Италия</option>
					<option value="ye">Йемен</option>
					<option value="cv">Кабо-Верде</option>
					<option value="kz">Казахстан</option>
					<option value="ky">Каймановы острова</option>
					<option value="kh">Камбоджа</option>
					<option value="cm">Камерун</option>
					<option value="ca">Канада</option>
					<option value="qa">Катар</option>
					<option value="ke">Кения</option>
					<option value="cy">Кипр</option>
					<option value="kg">Киргизия</option>
					<option value="ki">Кирибати</option>
					<option value="cn">Китай</option>
					<option value="co">Колумбия</option>
					<option value="km">Коморские острова</option>
					<option value="cr">Коста-Рика</option>
					<option value="ci">Кот-д’Ивуар</option>
					<option value="cu">Куба</option>
					<option value="kw">Кувейт</option>
					<option value="cw">Кюрасао</option>
					<option value="la">Лаос</option>
					<option value="lv">Латвия</option>
					<option value="ls">Лесото</option>
					<option value="lr">Либерия</option>
					<option value="lb">Ливан</option>
					<option value="ly">Ливия</option>
					<option value="lt">Литва</option>
					<option value="li">Лихтенштейн</option>
					<option value="lu">Люксембург</option>
					<option value="mu">Маврикий</option>
					<option value="mr">Мавритания</option>
					<option value="mg">Мадагаскар</option>
					<option value="mw">Малави</option>
					<option value="my">Малайзия</option>
					<option value="ml">Мали</option>
					<option value="mv">Мальдивы</option>
					<option value="mt">Мальта</option>
					<option value="ma">Марокко</option>
					<option value="mq">Мартиника</option>
					<option value="mh">Маршалловы острова</option>
					<option value="mx">Мексика</option>
					<option value="mz">Мозамбик</option>
					<option value="md">Молдова</option>
					<option value="mc">Монако</option>
					<option value="mn">Монголия</option>
					<option value="ms">Монтсеррат</option>
					<option value="mm">Мьянма</option>
					<option value="na">Намибия</option>
					<option value="nr">Науру</option>
					<option value="np">Непал</option>
					<option value="ne">Нигер</option>
					<option value="ng">Нигерия</option>
					<option value="nl">Нидерланды</option>
					<option value="ni">Никарагуа</option>
					<option value="nu">Ниуэ</option>
					<option value="nz">Новая Зеландия</option>
					<option value="nc">Новая Каледония</option>
					<option value="no">Норвегия</option>
					<option value="nf">Норфолк</option>
					<option value="ae">Объединённые Арабские Эмираты</option>
					<option value="om">Оман</option>
					<option value="ck">Острова Кука</option>
					<option value="pk">Пакистан</option>
					<option value="pw">Палау</option>
					<option value="ps">Палестина</option>
					<option value="pa">Панама</option>
					<option value="pg">Папуа-Новая Гвинея</option>
					<option value="py">Парагвай</option>
					<option value="pe">Перу</option>
					<option value="pl">Польша</option>
					<option value="pt">Португалия</option>
					<option value="pr">Пуэрто-Рико</option>
					<option value="cg">Республика Конго</option>
					<option value="ru">Россия</option>
					<option value="rw">Руанда</option>
					<option value="ro">Румыния</option>
					<option value="sv">Сальвадор</option>
					<option value="ws">Самоа</option>
					<option value="sm">Сан-Марино</option>
					<option value="st">Сан-Томе и Принсипи</option>
					<option value="sa">Саудовская Аравия</option>
					<option value="eh">Сахарская Арабская Демократическая Республика</option>
					<option value="kp">Северная Корея</option>
					<option value="mk">Северная Македония</option>
					<option value="sc">Сейшельские острова</option>
					<option value="sn">Сенегал</option>
					<option value="vc">Сент-Винсент и Гренадины</option>
					<option value="kn">Сент-Китс и Невис</option>
					<option value="lc">Сент-Люсия</option>
					<option value="rs">Сербия</option>
					<option value="sg">Сингапур</option>
					<option value="sx">Синт-Мартен</option>
					<option value="sy">Сирия</option>
					<option value="sk">Словакия</option>
					<option value="si">Словения</option>
					<option value="sb">Соломоновы острова</option>
					<option value="so">Сомали</option>
					<option value="sd">Судан</option>
					<option value="sr">Суринам</option>
					<option value="us">США</option>
					<option value="sl">Сьерра-Леоне</option>
					<option value="tj">Таджикистан</option>
					<option value="th">Таиланд</option>
					<option value="tw">Тайвань</option>
					<option value="tz">Танзания</option>
					<option value="tc">Тёркс и Кайкос</option>
					<option value="tg">Того</option>
					<option value="to">Тонга</option>
					<option value="tt">Тринидад и Тобаго</option>
					<option value="tv">Тувалу</option>
					<option value="tn">Тунис</option>
					<option value="tm">Туркменистан</option>
					<option value="tr">Турция</option>
					<option value="ug">Уганда</option>
					<option value="uz">Узбекистан</option>
					<option value="ua">Украина</option>
					<option value="uy">Уругвай</option>
					<option value="fm">Федеративные Штаты Микронезии</option>
					<option value="fj">Фиджи</option>
					<option value="ph">Филиппины</option>
					<option value="fi">Финляндия</option>
					<option value="fk">Фолклендские острова</option>
					<option value="fr">Франция</option>
					<option value="gf">Французская Гвиана</option>
					<option value="pf">Французская Полинезия</option>
					<option value="hr">Хорватия</option>
					<option value="cf">Центральноафриканская республика</option>
					<option value="td">Чад</option>
					<option value="me">Черногория</option>
					<option value="cz">Чехия</option>
					<option value="cl">Чили</option>
					<option value="ch">Швейцария</option>
					<option value="se">Швеция</option>
					<option value="lk">Шри-Ланка</option>
					<option value="ec">Эквадор</option>
					<option value="gq">Экваториальная Гвинея</option>
					<option value="er">Эритрея</option>
					<option value="sz">Эсватини</option>
					<option value="ee">Эстония</option>
					<option value="et">Эфиопия</option>
					<option value="za">ЮАР</option>
					<option value="kr">Южная Корея</option>
					<option value="os">Южная Осетия</option>
					<option value="ss">Южный Судан</option>
					<option value="jm">Ямайка</option>
					<option value="jp">Япония</option>
				</select>
            </div>
            <div class="profile_text">
                <label>Город</label>
                <input class="profile_text" type="text" name="city" v-model="userCity" placeholder="Ваш город" :class="{ errored: cityError }" />
            </div>
			<div style="padding-bottom: 15px;">
				<!-- <p class="padding_none" v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p> -->
                <p class="padding_none" v-if="nameError">{{nameError}}</p>
				<p class="padding_none" v-if="surnameError">{{surnameError}}</p>
				<p class="padding_none" v-if="birthDateError">{{birthDateError}}</p>
                <p class="padding_none" v-if="cityError">{{cityError}}</p>
			</div>
            <div>
                <button class="profile_button" type="button" @click="saveDataUser()">Сохранить</button>
				<button class="profile_button" style="margin: 0;" @click.prevent="cancelDataUser()">Отменить</button>
            </div>
		</form>
		<h2>Данные для входа</h2>
		<div v-if="saveData2">
			<table>
				<tr>
					<td>E-mail</td>
					<td>{{$store.getters.getUser.email}}</td>
				</tr>
				<tr>
					<td>Телефон</td>
					<td>{{$store.getters.getUser.tel}}</td>
				</tr>
				<tr>
					<td>Пароль</td>
					<td>•••••••••</td>
				</tr>
			</table>
			<div>
                <button class="profile_button" @click.prevent="saveData2=false, editData2=true">Изменить</button>
            </div>
		</div>
		<form name="login-data" v-if="editData2">
			<div class="profile_text">
                <label>E-mail</label>
                <input class="profile_text" type="email" name="e-mail" v-model="userEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }" />
            </div>
			<div class="profile_text">
                <label>Телефон</label>
                <input class="profile_text" type="tel" name="tel" v-model="userTel" placeholder="Ваш телефон" :class="{ errored: telError }" />
            </div>
            <div class="profile_text">
                <label>Пароль</label>
                <input class="profile_text" type="password" name="password1" v-model="userPassword1" placeholder="•••••••••" :class="{ errored: password1Error }" />
            </div>
			<div class="profile_text">
                <label></label>
				<input class="profile_text" type="password" name="password2" v-model="userPassword2" placeholder="Подтвердите Ваш пароль" :class="{ errored: password2Error }" />
            </div>
            <div style="padding-bottom: 15px;">
				<!-- <p class="padding_none" v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p> -->
                <p class="padding_none" v-if="emailError">{{emailError}}</p>
				<p class="padding_none" v-if="telError">{{telError}}</p>
                <p class="padding_none" v-if="password1Error" style="white-space: pre;">{{password1Error}}</p>
                <p class="padding_none" v-if="password2Error">{{password2Error}}</p>
			</div>
            <div>
                <button class="profile_button" type="button" @click="saveDataLogin()">Сохранить</button>
				<button class="profile_button" style="margin: 0;" @click.prevent="cancelDataLogin()">Отменить</button>
            </div>
        </form>
		<h2>Вход через социальные сети</h2>
		<table class="social">
			<tr>
				<td>Социальные сети</td>
				<td>
					<img class="profile_icon" src="/images/google-icon.png" alt="Google" width="20" title="Google" />
				</td>
				<td class="social-add" hidden>Привязать</td>
				<td class="social-name">{{$store.getters.getUser.google}}</td>
				<td class="social-delete" title="Удалить">&times;</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<img class="profile_icon" src="/images/vkontakte-icon.png" alt="ВКонтакте" width="20" title="ВКонтакте" />
				</td>
				<td class="social-add">Привязать</td>
				<td class="social-name" hidden>{{$store.getters.getUser.vkontakte}}</td>
				<td class="social-delete" title="Удалить" hidden>&times;</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<img class="profile_icon" src="/images/telegramicon.png" alt="Telegram" width="20" title="Telegram" />
				</td>
				<td class="social-add">Привязать</td>
				<td class="social-name" hidden>{{$store.getters.getUser.telegram}}</td>
				<td class="social-delete" title="Удалить" hidden>&times;</td>
			</tr>
		</table>
		<h2>Информация о подписках</h2>
		<table class="courses">
			<tr v-for="c in JSON.parse($store.getters.getUser.payedcourses)" :key="c.title">
				<!-- <td>{{$store.getters.getUser.payedCourses[0].title}}</td>
				<td>Осталось <span style="color: #c80f2e">{{$store.getters.getUser.payedCourses[0].period}}</span> дней подписки.</td> -->
				<td>{{c.title}}</td>
				<td>Осталось <span style="color: #c80f2e">{{c.period}}</span> дней подписки.</td>
			</tr>
		</table>
        <!-- <p class="label" style="padding: 0 4px 0 0">Фонетика. Часть 1</p>
        <div style="margin-bottom: 27px">
            <span style="padding: 4px 8px">Осталось <span style="color: #c80f2e">265</span> дней подписки.</span>
        </div> -->
  </main>
  </div>
</template>

<script>
// import HeaderComponent1 from './HeaderComponent1.vue'

export default {
	// name: "ProfileComponent",
  components: {
    // HeaderComponent1
  },
  mounted() {  
    document.title = "FullEng – Профиль";
  }, 
  data() {
    return {
		saveData1: true,
		editData1: false,
		saveData2: true,
		editData2: false,
		userName: null,
		userSurname: null,
		userBirthDay: null,
		userBirthMonth: null,
		userBirthYear: null,
		userCountry: null,
		userCity: null,
      userEmail: null,
		userTel: null,
      userPassword1: null,
      userPassword2: null,
      nameError: null,
		surnameError: null,
		birthDayError: null,
		birthMonthError: null,
		birthYearError: null,
		birthDateError: null,
		cityError: null,
      emailError: null,
		telError: null,
      password1Error: null,
      password2Error: null,
	}
  },
  methods: {
	saveDataUser() {
		if(!this.validName(this.userName)) {
            this.nameError = "Введите корректное имя.";
        } else {
            this.nameError = null;
        }

		if(!this.validSurname(this.userSurname)) {
            this.surnameError = "Введите корректную фамилию.";
        } else {
            this.surnameError = null;
        }

		if(!this.userBirthDay && this.userBirthMonth && this.userBirthYear) {
            this.birthDayError = true;
			this.birthMonthError = null;
			this.birthYearError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите день.";
        } else if(this.userBirthDay && !this.userBirthMonth && this.userBirthYear) {
            this.birthMonthError = true;
			this.birthDayError = null;
			this.birthYearError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите месяц.";
        } else if(this.userBirthDay && this.userBirthMonth && !this.userBirthYear) {
            this.birthYearError = true;
			this.birthDayError = null;
			this.birthMonthError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите год.";
        } else if(!this.userBirthDay && !this.userBirthMonth && this.userBirthYear) {
            this.birthDayError = true;
			this.birthMonthError = true;
			this.birthYearError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите день и месяц.";
        } else if(!this.userBirthDay && this.userBirthMonth && !this.userBirthYear) {
            this.birthDayError = true;
			this.birthYearError = true;
			this.birthMonthError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите день и год.";
        } else if(this.userBirthDay && !this.userBirthMonth && !this.userBirthYear) {
            this.birthMonthError = true;
			this.birthYearError = true;
			this.birthDayError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите месяц и год.";
        } else {
            this.birthDateError = null;
			this.birthDayError = null;
			this.birthMonthError = null;
			this.birthYearError = null;
        }

		if(!this.validCity(this.userCity)) {
            this.cityError = "Введите корректное название города.";
        } else {
            this.cityError = null;
        }

        // if(!this.nameError && !this.surnameError && !this.cityError) {
		// 	this.$store.dispatch('login');
        // }

        if(!this.nameError && !this.surnameError && !this.birthDateError && !this.cityError) {
			console.log("Saving is OK", this.userName);
			this.$store.state.user = JSON.parse(localStorage.getItem("user"));
			if(this.userName) {
				this.$store.commit("setUserName", this.userName);
				this.userName = null;
			}
			if(this.userSurname) {
				this.$store.commit("setUserSurname", this.userSurname);
				this.userSurname = null;
			}
			if(this.userBirthDay && this.userBirthMonth && this.userBirthYear) {
				let userBirthDate = this.userBirthDay + "." + this.userBirthMonth + "." + this.userBirthYear;
				this.$store.commit("setUserBirthDate", userBirthDate);
				this.userBirthDay = null;
				this.userBirthMonth = null;
				this.userBirthYear = null;
			}
			if(this.userCountry) {
				this.$store.commit("setUserCountry", this.userCountry);
				this.userCountry = null;
			}
			if(this.userCity) {
				this.$store.commit("setUserCity", this.userCity);
				this.userCity = null;
			}
			localStorage.setItem("user", JSON.stringify(this.$store.getters.getUser));
			this.saveData1 = true;
			this.editData1 = false;
        } else {
			console.log("Saving is not OK");
		}
	},
	saveDataLogin() {
        if(!this.validEmail(this.userEmail) && (this.userEmail != null)) {
            this.emailError = "Введите корректный e-mail.";
        } else {
            this.emailError = null;
        }

		if(!this.validTel(this.userTel) && (this.userTel != null)) {
            this.telError = "Введите корректный номер телефона.";
        } else {
            this.telError = null;
        }

        if(!this.validPassword(this.userPassword1)) {
			// this.password1Error = "Введите корректный пароль:\nминимум 4 символа и без пробелов.";
            this.password1Error = "Введите корректный пароль: минимум 4 символа и без пробелов.";
        } else {
            this.password1Error = null;
        }

        if(this.userPassword1 && !this.userPassword2) {
            this.password2Error = "Введите 2-ой проверочный пароль.";
        } else if(this.userPassword1 !== this.userPassword2) {
            this.password2Error = "1-ый и 2-ой пароли должны совпадать.";
        } else {
            this.password2Error = null;
        }
        
        // if(!this.emailError && !this.password1Error) {
        //     this.$store.dispatch('login');
        // }

        if(!this.emailError && !this.telError && !this.password1Error && !this.password2Error) {
			console.log("Saving is OK");
			this.$store.state.user = JSON.parse(localStorage.getItem("user"));
			if(this.userEmail) {
				this.$store.commit("setUserEmail", this.userEmail);
				this.userEmail = null;
			}
			if(this.userTel) {
				this.$store.commit("setUserTel", this.userTel);
				this.userTel = null;
			}
			if(this.userPassword1) {
				this.$store.commit("setUserPassword", this.userPassword1);
				this.userPassword1 = null;
			}
			localStorage.setItem("user", JSON.stringify(this.$store.getters.getUser));
			this.saveData2 = true;
			this.editData2 = false;
        } else {
			console.log("Saving is not OK");
		}
	},
	cancelDataUser() {
		this.saveData1 = true;
		this.editData1 = false;

		this.userName = null;
		this.userSurname = null;
		this.userBirthDay = null;
		this.userBirthMonth = null;
		this.userBirthYear = null;
		this.userCity = null;

		this.nameError = null;
		this.surnameError = null;
		this.birthDayError = null;
		this.birthMonthError = null;
		this.birthYearError = null;
		this.birthDateError = null;
		this.cityError = null;
	},
	cancelDataLogin() {
		this.saveData2 = true;
		this.editData2 = false;

		this.userEmail = null;
		this.userTel = null;
		this.userPassword1 = null;
		this.userPassword2 = null;

		this.emailError = null;
		this.telError = null;
		this.password1Error = null;
		this.password2Error = null;
	},
	validName: function (userName) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(userName);
    },
	validSurname: function (userSurname) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(userSurname);
    },
    validCity: function (userCity) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(userCity);
    },
	validEmail: function (userEmail) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(userEmail);
    },
	validTel: function (userTel) {
      var re = /^(\+)?[\d\s()-]{10,16}$/;
      return re.test(userTel);
    },
    validPassword: function (userPassword) {
      var re = /^([^\s]){4,}$/;
      return re.test(userPassword);
    },
  }
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

div.profile_text {
    display: flex;
    justify-content: space-between;
}

input.profile_text {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    width: 590px;
    color: #262626;
    border-width: 0;
    border-radius: 7px;
    outline: 0;
    margin-bottom: 15px;
    padding: 4px 8px;
}

::placeholder {
    color: #b2b2b2;
}

select.profile {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: content-box;
    width: 184px;
    height: 27px;
	outline: none;
    border: 0;
    border-radius: 7px;
    background-color: #ffffff;
    color: #b2b2b2;
    margin-bottom: 15px;
    padding: 4px 4px;
    cursor: pointer;
}

.main-option {
  display: none;
}

option {
  color: #262626;
}

input.errored,
select.errored {
    border: 1px solid #c80f2e;
}

.profile_button {
    font-family: Times New Roman, Times, serif;
    font-size: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 7px;
    background-color: #012269;
    color: #ffffff;
	transition: all .3s;
    margin: 0 8px 27px 193px;
    padding: 4px 8px;
}

.profile_button:hover {
    color: #b2b2b2;
}

/* img.profile_icon {
    margin: 0 0 9px;
    padding: 8px;
} */

label, .label {
    color: #808080;
}

.label {
    float: left;
}

table {
	border: 0;
	margin-bottom: 15px;
}

tr {
	display: block;
	margin-bottom: 15px;
}

tr:last-child {
	margin: 0;
}

td {
    padding: 0;
}

td:first-child {
	color: #808080;
	width: 196px;
}

table.social td:nth-child(2) {
	width: 36px;
}

.social-name {
	padding-right: 16px;
}
.social-add {
    color: #808080;
}

.social-delete {
	font-weight: bold;
	color: #808080;
}

.social-add:hover, .social-delete:hover {
    color: #b2b2b2;
    cursor: pointer;
}

table.courses {
	margin-bottom: 27px;
	width: 100%;
}

table.courses tr{
	display: flex;
	/* justify-content: space-between; */
	width: 100%;
}

table.courses td:first-child {
	width: 60%;
}

/* table.courses td:nth-child(2) {
	text-align: right;
} */
</style>