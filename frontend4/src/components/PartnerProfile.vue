<template>
  <div class="main">
  <!-- <HeaderComponent1 /> -->
  <main>
      <h1>Профиль</h1>
		<p><i>Заполните в профиле поля со *, чтобы получить доступ к выводу средств.</i>
			<!-- <br />* — поля, обязательные для заполнения. -->
		</p>
		<h2 class="padding_none" style="float: left;">Ваш статус*:</h2>
		<form class="form-check">
			<label for="individual" @click="saveLegal()">
				<input type="radio" name="legal_form" id="individual" value="individual"> Физ. лицо
			</label>
			<label for="self" @click="saveLegal()">
				<input type="radio" name="legal_form" id="self" value="self_employed"> Самозанятый
			</label>
			<label for="sole" @click="saveLegal()">
				<input type="radio" name="legal_form" id="sole" value="sole_trader"> ИП
			</label>
		</form>
		<h2>Основная информация</h2>
		<div v-if="saveMainData">
			<table>
				<tr>
					<td>Имя*</td>
					<!-- <td><i>{{$store.getters.getPartner.name}}</i></td> -->
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.name=='') }">{{$store.getters.getPartner.name==""?"Не заполнено":$store.getters.getPartner.name}}</td>
				</tr>
				<tr>
					<td>Фамилия*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.surname=='') }">{{$store.getters.getPartner.surname==""?"Не заполнено":$store.getters.getPartner.surname}}</td>
				</tr>
				<tr class="margin_none">
					<td>Отчество</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.patronymic=='') }">{{$store.getters.getPartner.patronymic==""?"Не заполнено":$store.getters.getPartner.patronymic}}</td>
				</tr>
				<tr>
					<td colspan="2" style="width: auto;"><i>Требуется только при наличии.</i></td>
					<td></td>
				</tr>
				<tr>
					<td>Дата рождения</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.birthdate=='') }">{{$store.getters.getPartner.birthdate==""?"Не заполнено":$store.getters.getPartner.birthdate}}</td>
				</tr>
				<tr>
					<td>Страна</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.country=='') }">{{$store.getters.getPartner.country==""?"Не заполнено":$store.getters.getPartner.country}}</td>
				</tr>
				<tr>
					<td>Город</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.city=='') }">{{$store.getters.getPartner.city==""?"Не заполнено":$store.getters.getPartner.city}}</td>
				</tr>
			</table>
			<div>
                <button class="profile_button" @click.prevent="saveMainData=false, editMainData=true">Изменить</button>
            </div>
		</div>
		<form name="main-info" v-if="editMainData">
            <div class="profile_text">
                <label>Имя*</label>
                <input class="profile_text" type="text" name="name" v-model="partnerName" placeholder="Ваше имя" :class="{ errored: nameError }" />
            </div>
            <div class="profile_text">
                <label>Фамилия*</label>
                <input class="profile_text" type="text" name="surname" v-model="partnerSurname" placeholder="Ваша фамилия" :class="{ errored: surnameError }" />
            </div>
			<div class="profile_text">
                <label>Отчество</label>
                <input class="profile_text" style="margin: 0;" type="text" name="patronymic" v-model="partnerPatronymic" placeholder="Ваше отчество" :class="{ errored: patronymicError }" />
            </div>
			<p style="color: #808080;"><i>Требуется только при наличии.</i></p>
            <div class="profile_text">
                <label style="padding: 5px 32px 0px 0px">Дата рождения</label>
                <select id="select1" class="profile" name="day" v-model="partnerBirthDay" :class="{ errored: birthDayError }" onchange="document.getElementById('select1').style.color = '#262626'">
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
				<select id="select2" class="profile" style="width: 185px;" name="month" v-model="partnerBirthMonth" :class="{ errored: birthMonthError }" onchange="document.getElementById('select2').style.color = '#262626'">
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
				<select id="select3" class="profile" name="year" v-model="partnerBirthYear" :class="{ errored: birthYearError }" onchange="document.getElementById('select3').style.color = '#262626'">
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
				<select id="select4" class="profile" style="width: 582px;" name="country" v-model="partnerCountry" onchange="document.getElementById('select4').style.color = '#262626'">
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
                <input class="profile_text" type="text" name="city" v-model="partnerCity" placeholder="Ваш город" :class="{ errored: cityError }" />
            </div>
			<div style="padding-bottom: 15px;">
				<!-- <p class="padding_none" v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p> -->
                <p class="padding_none" v-if="nameError">{{nameError}}</p>
				<p class="padding_none" v-if="surnameError">{{surnameError}}</p>
				<p class="padding_none" v-if="patronymicError">{{patronymicError}}</p>
				<p class="padding_none" v-if="birthDateError">{{birthDateError}}</p>
                <p class="padding_none" v-if="cityError">{{cityError}}</p>
			</div>
            <div>
                <button class="profile_button" type="button" @click="saveMainDataPartner()">Сохранить</button>
				<button class="profile_button" style="margin: 0;" @click.prevent="cancelMainDataPartner()">Отменить</button>
            </div>
		</form>
		<h2>Данные для входа</h2>
		<div v-if="saveLoginData">
			<table>
				<tr>
					<td>E-mail</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.email=='') }">{{$store.getters.getPartner.email==""?"Не заполнено":$store.getters.getPartner.email}}</td>
				</tr>
				<tr>
					<td>Телефон*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.tel=='') }">{{$store.getters.getPartner.tel==""?"Не заполнено":$store.getters.getPartner.tel}}</td>
				</tr>
				<tr>
					<td>Пароль</td>
					<td>•••••••••</td>
				</tr>
			</table>
			<div>
                <button class="profile_button" @click.prevent="saveLoginData=false, editLoginData=true">Изменить</button>
            </div>
		</div>
		<form name="partner-login-data" v-if="editLoginData">
			<div class="profile_text">
                <label>E-mail</label>
                <input class="profile_text" type="email" name="e-mail" v-model="partnerEmail" placeholder="Ваш e-mail" :class="{ errored: emailError }" />
            </div>
			<div class="profile_text">
                <label>Телефон*</label>
                <input class="profile_text" type="tel" name="tel" v-model="partnerTel" placeholder="Ваш телефон" :class="{ errored: telError }" />
            </div>
            <div class="profile_text">
                <label>Пароль</label>
                <input class="profile_text" type="password" name="password1" v-model="partnerPassword1" placeholder="•••••••••" :class="{ errored: password1Error }" />
            </div>
			<div class="profile_text">
                <label></label>
				<input class="profile_text" type="password" name="password2" v-model="partnerPassword2" placeholder="Подтвердите Ваш пароль" :class="{ errored: password2Error }" />
            </div>
            <div style="padding-bottom: 15px;">
				<!-- <p class="padding_none" v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p> -->
                <p class="padding_none" v-if="emailError">{{emailError}}</p>
				<p class="padding_none" v-if="telError">{{telError}}</p>
                <p class="padding_none" v-if="password1Error" style="white-space: pre;">{{password1Error}}</p>
                <p class="padding_none" v-if="password2Error">{{password2Error}}</p>
			</div>
            <div>
                <button class="profile_button" type="button" @click="saveLoginDataPartner()">Сохранить</button>
				<button class="profile_button" style="margin: 0;" @click.prevent="cancelLoginDataPartner()">Отменить</button>
            </div>
        </form>
		<h2>Вход через социальные сети</h2>
		<table class="social">
			<tr>
				<td>Социальные сети</td>
				<td>
					<img class="profile_icon" src="/images/google-icon.png" alt="Google" width="20" title="Google" />
				</td>
				<td class="social-add" v-if="$store.getters.getPartner.google == ''">Привязать</td>
				<td class="social-name" v-if="$store.getters.getPartner.google != ''">{{$store.getters.getPartner.google}}</td>
				<td class="social-delete" title="Удалить" v-if="$store.getters.getPartner.google != ''" @click="deletePartnerGoogle()">&times;</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<img class="profile_icon" src="/images/vkontakte-icon.png" alt="ВКонтакте" width="20" title="ВКонтакте" />
				</td>
				<td class="social-add" v-if="$store.getters.getPartner.vkontakte == ''">Привязать</td>
				<td class="social-name" v-if="$store.getters.getPartner.vkontakte != ''">{{$store.getters.getPartner.vkontakte}}</td>
				<td class="social-delete" title="Удалить" v-if="$store.getters.getPartner.vkontakte != ''" @click="deletePartnerVkontakte()">&times;</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<img class="profile_icon" src="/images/telegramicon.png" alt="Telegram" width="20" title="Telegram" />
				</td>
				<td class="social-add" v-if="$store.getters.getPartner.telegram == ''">Привязать</td>
				<td class="social-name" v-if="$store.getters.getPartner.telegram != ''">{{$store.getters.getPartner.telegram}}</td>
				<td class="social-delete" title="Удалить" v-if="$store.getters.getPartner.telegram != ''" @click="deletePartnerTelegram()">&times;</td>
			</tr>
		</table>
		<h2>Паспортные данные</h2>
<!-- passport:
Series - partnerSeries seriesError
Number - partnerNumber numberError
Issued - partnerIssued issuedError
partnerIssuedDay issuedDayError
partnerIssuedMonth issuedMonthError
partnerIssuedYear issuedYearError
patronymic - partnerPatronymic patronymicError
scan - passportScan -->
		<div v-if="savePassportData">
			<table>
				<tr>
					<td>Серия*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.series=='') }">{{$store.getters.getPartner.series==""?"Не заполнено":$store.getters.getPartner.series}}</td>
				</tr>
				<tr>
					<td>Номер*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.number=='') }">{{$store.getters.getPartner.number==""?"Не заполнено":$store.getters.getPartner.number}}</td>
				</tr>
				<tr>
					<td>Выдан*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.issued=='') }">{{$store.getters.getPartner.issued==""?"Не заполнено":$store.getters.getPartner.issued}}</td>
				</tr>
				<tr>
					<td>Дата выдачи*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.issueddate=='') }">{{$store.getters.getPartner.issueddate==""?"Не заполнено":$store.getters.getPartner.issueddate}}</td>
				</tr>
				<tr v-if="selfEmployed">
					<td>Скан паспорта*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.passportscan=='') }"><i>{{$store.getters.getPartner.passportscan==""?"Нет файла":"Файл загружен"}}</i></td>
				</tr>
			</table>
			<div>
                <button class="profile_button" @click.prevent="savePassportData=false, editPassportData=true">Изменить</button>
            </div>
		</div>
		<form name="main-info" v-if="editPassportData">
            <div class="profile_text">
                <label>Серия*</label>
                <input class="profile_text" type="text" name="series" v-model="partnerSeries" placeholder="Серия" :class="{ errored: seriesError }" />
            </div>
            <div class="profile_text">
                <label>Номер*</label>
                <input class="profile_text" type="text" name="number" v-model="partnerNumber" placeholder="Номер" :class="{ errored: numberError }" />
            </div>
			<div class="profile_text">
                <label>Выдан*</label>
                <input class="profile_text" type="text" name="issued" v-model="partnerIssued" placeholder="Выдан" :class="{ errored: issuedError }" />
            </div>
            <div class="profile_text">
                <label style="padding: 5px 45px 0px 0px">Дата выдачи*</label>
                <select id="issuedselect1" class="profile" name="issuedday" v-model="partnerIssuedDay" :class="{ errored: issuedDayError }" onchange="document.getElementById('issuedselect1').style.color = '#262626'">
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
				<select id="issuedselect2" class="profile" style="width: 185px;" name="issuedmonth" v-model="partnerIssuedMonth" :class="{ errored: issuedMonthError }" onchange="document.getElementById('issuedselect2').style.color = '#262626'">
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
				<select id="issuedselect3" class="profile" name="issuedyear" v-model="partnerIssuedYear" :class="{ errored: issuedYearError }" onchange="document.getElementById('issuedselect3').style.color = '#262626'">
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
			<div v-if="selfEmployed">
				<label style="padding: 5px 30px 0px 0px">Скан паспорта*</label>
                <label id="attach-passportscan" title="Прикрепить файл">
                    <input id="passportscan" class="file_scan" type="file" name="attach" @change="showPassportScanName()" hidden />
                </label>
                <span id="passportscan-name" class="file_scan">{{passportScanName}}</span>
                <label id="delete-passportscan" title="Удалить файл">
					<input type="button" name="delete" @click="deletePassportScan()" hidden />
				</label>
            </div>
			<div style="padding-bottom: 15px;">
				<!-- <p class="padding_none" v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p> -->
                <p class="padding_none" v-if="seriesError">{{seriesError}}</p>
				<p class="padding_none" v-if="numberError">{{numberError}}</p>
                <p class="padding_none" v-if="issuedError">{{issuedError}}</p>
				<p class="padding_none" v-if="issuedDateError">{{issuedDateError}}</p>
			</div>
            <div>
                <button class="profile_button" type="button" @click="savePassportDataPartner()">Сохранить</button>
				<button class="profile_button" style="margin: 0;" @click.prevent="cancelPassportDataPartner()">Отменить</button>
            </div>
		</form>
<!-- bank:
TIN - partnerTin tinError
selfEmployedReference
soleTraderCertificate
(Bank)card number - partnerCardNumber cardNumberError
(Bank) account number - partnerAccountNumber accountNumberError
bankid - partnerBankid bankidError
Recipient Bank - partnerRecipientBank recipientBankError -->
		<h2>Банковские реквизиты</h2>
		<div v-if="saveBankData">
			<table>
				<tr v-if="selfEmployed || soleTrader">
					<td>ИНН*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.tin=='') }">{{$store.getters.getPartner.tin==""?"Не заполнено":$store.getters.getPartner.tin}}</td>
				</tr>
				<tr class="margin_none" v-if="selfEmployed">
					<td>Справка*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.selfemployedreference=='') }"><i>{{$store.getters.getPartner.selfemployedreference==""?"Нет файла":"Файл загружен"}}</i></td>
				</tr>
				<tr v-if="selfEmployed">
					<td colspan="2" style="width: auto;">о постановке на учёт самозанятого</td>
					<td></td>
				</tr>
				<tr class="margin_none" v-if="soleTrader">
					<td>Свидетельство*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.soletradercertificate=='') }"><i>{{$store.getters.getPartner.soletradercertificate==""?"Нет файла":"Файл загружен"}}</i></td>
				</tr>
				<tr v-if="soleTrader">
					<td colspan="2" style="width: auto;">ИП</td>
					<td></td>
				</tr>
				<tr class="margin_none" v-if="individual || selfEmployed">
					<td>Номер карты</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.cardnumber=='') }">{{$store.getters.getPartner.cardnumber==""?"Не заполнено":$store.getters.getPartner.cardnumber}}</td>
				</tr>
				<tr v-if="individual || selfEmployed">
					<td colspan="2" style="width: auto;"><i>Не требуется, если подключена СБП (Система Быстрых Платежей).</i></td>
					<td></td>
				</tr>
				<tr v-if="selfEmployed || soleTrader">
					<td>Номер счёта*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.accountnumber=='') }">{{$store.getters.getPartner.accountnumber==""?"Не заполнено":$store.getters.getPartner.accountnumber}}</td>
				</tr>
				<tr v-if="selfEmployed || soleTrader">
					<td>БИК*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.bankid=='') }">{{$store.getters.getPartner.bankid==""?"Не заполнено":$store.getters.getPartner.bankid}}</td>
				</tr>
				<tr>
					<td>Банк получателя*</td>
					<td :class="{ 'grey-italic' : ($store.getters.getPartner.recipientbank=='') }">{{$store.getters.getPartner.recipientbank==""?"Не заполнено":$store.getters.getPartner.recipientbank}}</td>
				</tr>
			</table>
			<div>
                <button class="profile_button" @click.prevent="saveBankData=false, editBankData=true">Изменить</button>
            </div>
		</div>
		<form name="main-info" v-if="editBankData">
            <div class="profile_text" v-if="selfEmployed || soleTrader">
                <label>ИНН*</label>
                <input class="profile_text" type="text" name="tin" v-model="partnerTin" placeholder="ИНН" :class="{ errored: tinError }" />
            </div>
            <div v-if="selfEmployed">
				<label style="padding: 5px 95px 0px 0px">Справка*</label>
                <label id="attach-selfemployed" title="Прикрепить файл">
                    <input id="selfemployed" class="file_scan" type="file" name="attach" @change="showSelfEmployedName()" hidden />
                </label>
                <span id="selfemployed-name" class="file_scan">{{selfEmployedName}}</span>
                <label id="delete-selfemployed" title="Удалить файл">
					<input type="button" name="delete" @click="deleteSelfEmployed()" hidden />
				</label>
            </div>
			<p v-if="selfEmployed" style="color: #808080;">о постановке на учёт самозанятого</p>
			<div v-if="soleTrader">
				<label style="padding: 5px 30px 0px 0px">Свидетельство*</label>
                <label id="attach-soletrader" title="Прикрепить файл">
                    <input id="soletrader" class="file_scan" type="file" name="attach" @change="showSoleTraderName()" hidden />
                </label>
                <span id="soletrader-name" class="file_scan">{{soleTraderName}}</span>
                <label id="delete-soletrader" title="Удалить файл">
					<input type="button" name="delete" @click="deleteSoleTrader()" hidden />
				</label>
            </div>
			<p v-if="soleTrader" style="color: #808080;">ИП</p>
			<div class="profile_text" v-if="individual || selfEmployed">
                <label>Номер карты</label>
                <input class="profile_text" style="margin: 0;" type="text" name="cardnumber" v-model="partnerCardNumber" placeholder="Номер карты" :class="{ errored: cardNumberError }" />
            </div>
			<p v-if="individual || selfEmployed" style="color: #808080;"><i>Не требуется, если подключена СБП (Система Быстрых Платежей).</i></p>
            <div class="profile_text" v-if="selfEmployed || soleTrader">
                <label>Номер счёта*</label>
                <input class="profile_text" type="text" name="accountnumber" v-model="partnerAccountNumber" placeholder="Номер счёта" :class="{ errored: accountNumberError }" />
            </div>
			<div class="profile_text" v-if="selfEmployed || soleTrader">
                <label>БИК*</label>
                <input class="profile_text" type="text" name="bankid" v-model="partnerBankid" placeholder="БИК" :class="{ errored: bankidError }" />
            </div>
            <div class="profile_text">
                <label>Банк получателя*</label>
                <input class="profile_text" type="text" name="recipientbank" v-model="partnerRecipientBank" placeholder="Банк получателя" :class="{ errored: recipientBankError }" />
            </div>
			<div style="padding-bottom: 15px;">
				<!-- <p class="padding_none" v-if="$store.getters.getLoginErrored">Неверный логин и/или пароль.</p> -->
                <p class="padding_none" v-if="tinError">{{tinError}}</p>
				<p class="padding_none" v-if="cardNumberError">{{cardNumberError}}</p>
				<p class="padding_none" v-if="accountNumberError">{{accountNumberError}}</p>
                <p class="padding_none" v-if="bankidError">{{bankidError}}</p>
				<p class="padding_none" v-if="recipientBankError">{{recipientBankError}}</p>
			</div>
            <div>
                <button class="profile_button" type="button" @click="saveBankDataPartner()">Сохранить</button>
				<button class="profile_button" style="margin: 0;" @click.prevent="cancelBankDataPartner()">Отменить</button>
            </div>
			<!-- <div v-if="individual">
				<div class="profile_text">
					<label>Номер карты</label>
					<input class="profile_text" style="margin: 0;" type="text" name="cardnumber" v-model="partnerCardNumber" placeholder="Номер карты" :class="{ errored: cardNumberError }" />
				</div>
				<p style="color: #808080;"><i>Не требуется, если подключена СБП (Система Быстрых Платежей).</i></p>
				<div class="profile_text">
					<label>Банк получателя*</label>
					<input class="profile_text" type="text" name="recipientbank" v-model="partnerRecipientBank" placeholder="Банк получателя" :class="{ errored: recipientBankError }" />
				</div>
				<div style="padding-bottom: 15px;">
					<p class="padding_none" v-if="cardNumberError">{{cardNumberError}}</p>
					<p class="padding_none" v-if="recipientBankError">{{recipientBankError}}</p>
				</div>
				<div>
					<button class="profile_button" type="button" @click="saveBankDataPartner()">Сохранить</button>
					<button class="profile_button" style="margin: 0;" @click.prevent="cancelBankDataPartner()">Отменить</button>
				</div>
			</div>
			<div v-if="selfEmployed">
				<div class="profile_text">
					<label>ИНН*</label>
					<input class="profile_text" type="text" name="tin" v-model="partnerTin" placeholder="ИНН" :class="{ errored: tinError }" />
				</div>
				<div>
					<label style="padding: 5px 95px 0px 0px">Справка*</label>
					<label id="attach-selfemployed" title="Прикрепить файл">
						<input id="selfemployed" class="file_scan" type="file" name="attach" @change="showSelfEmployedName()" hidden />
					</label>
					<span id="selfemployed-name" class="file_scan">{{selfEmployedName}}</span>
					<label id="delete-selfemployed" title="Удалить файл">
						<input type="button" name="delete" @click="deleteSelfEmployed()" hidden />
					</label>
				</div>
				<p style="color: #808080;">о постановке на учёт самозанятого</p>
				<div class="profile_text">
					<label>Номер карты</label>
					<input class="profile_text" style="margin: 0;" type="text" name="cardnumber" v-model="partnerCardNumber" placeholder="Номер карты" :class="{ errored: cardNumberError }" />
				</div>
				<p style="color: #808080;"><i>Не требуется, если подключена СБП (Система Быстрых Платежей).</i></p>
				<div class="profile_text">
					<label>Номер счёта*</label>
					<input class="profile_text" type="text" name="accountnumber" v-model="partnerAccountNumber" placeholder="Номер счёта" :class="{ errored: accountNumberError }" />
				</div>
				<div class="profile_text">
					<label>БИК*</label>
					<input class="profile_text" type="text" name="bankid" v-model="partnerBankid" placeholder="БИК" :class="{ errored: bankidError }" />
				</div>
				<div class="profile_text">
					<label>Банк получателя*</label>
					<input class="profile_text" type="text" name="recipientbank" v-model="partnerRecipientBank" placeholder="Банк получателя" :class="{ errored: recipientBankError }" />
				</div>
				<div style="padding-bottom: 15px;">
					<p class="padding_none" v-if="tinError">{{tinError}}</p>
					<p class="padding_none" v-if="cardNumberError">{{cardNumberError}}</p>
					<p class="padding_none" v-if="accountNumberError">{{accountNumberError}}</p>
					<p class="padding_none" v-if="bankidError">{{bankidError}}</p>
					<p class="padding_none" v-if="recipientBankError">{{recipientBankError}}</p>
				</div>
				<div>
					<button class="profile_button" type="button" @click="saveBankDataPartner()">Сохранить</button>
					<button class="profile_button" style="margin: 0;" @click.prevent="cancelBankDataPartner()">Отменить</button>
				</div>
			</div>
			<div v-if="soleTrader">
				<div class="profile_text">
					<label>ИНН*</label>
					<input class="profile_text" type="text" name="tin" v-model="partnerTin" placeholder="ИНН" :class="{ errored: tinError }" />
				</div>
				<div>
					<label style="padding: 5px 30px 0px 0px">Свидетельство*</label>
					<label id="attach-soletrader" title="Прикрепить файл">
						<input id="soletrader" class="file_scan" type="file" name="attach" @change="showSoleTraderName()" hidden />
					</label>
					<span id="soletrader-name" class="file_scan">{{soleTraderName}}</span>
					<label id="delete-soletrader" title="Удалить файл">
						<input type="button" name="delete" @click="deleteSoleTrader()" hidden />
					</label>
				</div>
				<p style="color: #808080;">ИП</p>
				<div class="profile_text">
					<label>Номер счёта*</label>
					<input class="profile_text" type="text" name="accountnumber" v-model="partnerAccountNumber" placeholder="Номер счёта" :class="{ errored: accountNumberError }" />
				</div>
				<div class="profile_text">
					<label>БИК*</label>
					<input class="profile_text" type="text" name="bankid" v-model="partnerBankid" placeholder="БИК" :class="{ errored: bankidError }" />
				</div>
				<div class="profile_text">
					<label>Банк получателя*</label>
					<input class="profile_text" type="text" name="recipientbank" v-model="partnerRecipientBank" placeholder="Банк получателя" :class="{ errored: recipientBankError }" />
				</div>
				<div style="padding-bottom: 15px;">
					<p class="padding_none" v-if="tinError">{{tinError}}</p>
					<p class="padding_none" v-if="accountNumberError">{{accountNumberError}}</p>
					<p class="padding_none" v-if="bankidError">{{bankidError}}</p>
					<p class="padding_none" v-if="recipientBankError">{{recipientBankError}}</p>
				</div>
				<div>
					<button class="profile_button" type="button" @click="saveBankDataPartner()">Сохранить</button>
					<button class="profile_button" style="margin: 0;" @click.prevent="cancelBankDataPartner()">Отменить</button>
				</div>
			</div> -->
		</form>
  </main>
  </div>
</template>

<script>
// import HeaderComponent1 from './HeaderComponent1.vue'

export default {
	name: 'PartnerProfile',
	// name: "ProfileComponent",
  components: {
    // HeaderComponent1
  },
  mounted() {  
    document.title = "FullEng – Профиль";

	if(this.$store.getters.getPartner.legal == document.getElementById("individual").id) {
		document.getElementById("individual").checked = true;
		this.individual = true;
		this.selfEmployed = false;
		this.soleTrader = false;
	} else if(this.$store.getters.getPartner.legal == document.getElementById("self").id) {
		document.getElementById("self").checked = true;
		this.individual = false;
		this.selfEmployed = true;
		this.soleTrader = false;
	} else if(this.$store.getters.getPartner.legal == document.getElementById("sole").id) {
		document.getElementById("sole").checked = true;
		this.individual = false;
		this.selfEmployed = false;
		this.soleTrader = true;
	} else {
		// document.getElementById("individual").checked = true;

		// this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
		// this.$store.commit("setPartnerLegal", "individual");
		// localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));

		this.individual = true;
		this.selfEmployed = false;
		this.soleTrader = false;
	}

	if(this.$store.getters.getPartner.series == "" &&
        this.$store.getters.getPartner.number == "" &&
        this.$store.getters.getPartner.issued == "" &&
        this.$store.getters.getPartner.issueddate == "" &&
		this.$store.getters.getPartner.passportscan == "") {
			this.savePassportData = false;
			this.editPassportData = true;
    }
    if(this.$store.getters.getPartner.tin == "" &&
        this.$store.getters.getPartner.selfemployedreference == "" &&
        this.$store.getters.getPartner.soletradercertificate == "" &&
        this.$store.getters.getPartner.cardnumber == "" &&
        this.$store.getters.getPartner.accountnumber == "" &&
        this.$store.getters.getPartner.bankid == "" &&
        this.$store.getters.getPartner.recipientbank == "") {
			this.saveBankData = false;
			this.editBankData = true;
    }
  }, 
  data() {
    return {
		saveMainData: true,
		editMainData: false,
		saveLoginData: true,
		editLoginData: false,
		savePassportData: true,
		editPassportData: false,
		saveBankData: true,
		editBankData: false,
		individual: true,
		selfEmployed: false,
		soleTrader: false,
		partnerName: null,
		partnerSurname: null,
		partnerPatronymic: null,
		partnerBirthDay: null,
		partnerBirthMonth: null,
		partnerBirthYear: null,
		partnerCountry: null,
		partnerCity: null,
		partnerEmail: null,
		partnerTel: null,
		partnerPassword1: null,
		partnerPassword2: null,
		passportFormData: new FormData(),
		partnerSeries: null,
		partnerNumber: null,
		partnerIssued: null,
		partnerIssuedDay: null,
		partnerIssuedMonth: null,
		partnerIssuedYear: null,
		partnerTin: null,
		partnerCardNumber: null,
		partnerAccountNumber: null,
		partnerBankid: null,
		partnerRecipientBank: null,
		nameError: null,
		surnameError: null,
		patronymicError: null,
		birthDayError: null,
		birthMonthError: null,
		birthYearError: null,
		birthDateError: null,
		cityError: null,
		emailError: null,
		telError: null,
		password1Error: null,
		password2Error: null,
		seriesError: null,
		numberError: null,
		issuedError: null,
		issuedDayError: null,
		issuedMonthError: null,
		issuedYearError: null,
		issuedDateError: null,
		tinError: null,
		cardNumberError: null,
		accountNumberError: null,
		bankidError: null,
		recipientBankError: null,
		passportScanName: null,
		passportScanSize: null,
		passportScanType: null,
		// passportScanData: null,
		selfEmployedName: null,
		soleTraderName: null,
	}
  },
  methods: {
	saveLegal() {
		this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
		if(document.getElementById("individual").checked) {
			this.$store.commit("setPartnerLegal", document.getElementById("individual").id);
			this.individual = true;
			this.selfEmployed = false;
			this.soleTrader = false;
		}
		if(document.getElementById("self").checked) {
			this.$store.commit("setPartnerLegal", document.getElementById("self").id);
			this.individual = false;
			this.selfEmployed = true;
			this.soleTrader = false;
		}
		if(document.getElementById("sole").checked) {
			this.$store.commit("setPartnerLegal", document.getElementById("sole").id);
			this.individual = false;
			this.selfEmployed = false;
			this.soleTrader = true;
		}
		localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));
		console.log("Saving Legal is OK", this.individual, this.selfEmployed, this.soleTrader);
	},
	saveMainDataPartner() {
		if(!this.validName(this.partnerName)) {
            this.nameError = "Введите корректное имя.";
        } else {
            this.nameError = null;
        }

		if(!this.validSurname(this.partnerSurname)) {
            this.surnameError = "Введите корректную фамилию.";
        } else {
            this.surnameError = null;
        }

		if(!this.validPatronymic(this.partnerPatronymic)) {
            this.patronymicError = "Введите корректное отчество.";
        } else {
            this.patronymicError = null;
        }

		if(!this.partnerBirthDay && this.partnerBirthMonth && this.partnerBirthYear) {
            this.birthDayError = true;
			this.birthMonthError = null;
			this.birthYearError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите день.";
        } else if(this.partnerBirthDay && !this.partnerBirthMonth && this.partnerBirthYear) {
            this.birthMonthError = true;
			this.birthDayError = null;
			this.birthYearError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите месяц.";
        } else if(this.partnerBirthDay && this.partnerBirthMonth && !this.partnerBirthYear) {
            this.birthYearError = true;
			this.birthDayError = null;
			this.birthMonthError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите год.";
        } else if(!this.partnerBirthDay && !this.partnerBirthMonth && this.partnerBirthYear) {
            this.birthDayError = true;
			this.birthMonthError = true;
			this.birthYearError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите день и месяц.";
        } else if(!this.partnerBirthDay && this.partnerBirthMonth && !this.partnerBirthYear) {
            this.birthDayError = true;
			this.birthYearError = true;
			this.birthMonthError = null;
			this.birthDateError = "Введите корректную дату рождения: укажите день и год.";
        } else if(this.partnerBirthDay && !this.partnerBirthMonth && !this.partnerBirthYear) {
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

		if(!this.validCity(this.partnerCity)) {
            this.cityError = "Введите корректное название города.";
        } else {
            this.cityError = null;
        }

        // if(!this.nameError && !this.surnameError && !this.cityError) {
		// 	this.$store.dispatch('login');
        // }

        if(!this.nameError && !this.surnameError && !this.patronymicError && !this.birthDateError && !this.cityError) {
			console.log("Saving is OK", this.partnerName);
			this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
			if(this.partnerName) {
				this.$store.commit("setPartnerName", this.partnerName);
				this.partnerName = null;
			}
			if(this.partnerSurname) {
				this.$store.commit("setPartnerSurname", this.partnerSurname);
				this.partnerSurname = null;
			}
			if(this.partnerPatronymic) {
				this.$store.commit("setPartnerPatronymic", this.partnerPatronymic);
				this.partnerPatronymic = null;
			}
			if(this.partnerBirthDay && this.partnerBirthMonth && this.partnerBirthYear) {
				let partnerBirthDate = this.partnerBirthDay + "." + this.partnerBirthMonth + "." + this.partnerBirthYear;
				this.$store.commit("setPartnerBirthDate", partnerBirthDate);
				this.partnerBirthDay = null;
				this.partnerBirthMonth = null;
				this.partnerBirthYear = null;
			}
			if(this.partnerCountry) {
				this.$store.commit("setPartnerCountry", this.partnerCountry);
				this.partnerCountry = null;
			}
			if(this.partnerCity) {
				this.$store.commit("setPartnerCity", this.partnerCity);
				this.partnerCity = null;
			}
			localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));
			this.saveMainData = true;
			this.editMainData = false;
        } else {
			console.log("Saving is not OK");
		}
	},
	saveLoginDataPartner() {
        if(!this.validEmail(this.partnerEmail) && (this.partnerEmail != null)) {
            this.emailError = "Введите корректный e-mail.";
        } else {
            this.emailError = null;
        }

		if(!this.validTel(this.partnerTel) && (this.partnerTel != null)) {
            this.telError = "Введите корректный номер телефона.";
        } else {
            this.telError = null;
        }

        if(!this.validPassword(this.partnerPassword1)) {
			// this.password1Error = "Введите корректный пароль:\nминимум 4 символа и без пробелов.";
            this.password1Error = "Введите корректный пароль: минимум 4 символа и без пробелов.";
        } else {
            this.password1Error = null;
        }

        if(this.partnerPassword1 && !this.partnerPassword2) {
            this.password2Error = "Введите 2-ой проверочный пароль.";
        } else if(this.partnerPassword1 !== this.partnerPassword2) {
            this.password2Error = "1-ый и 2-ой пароли должны совпадать.";
        } else {
            this.password2Error = null;
        }
        
        // if(!this.emailError && !this.password1Error) {
        //     this.$store.dispatch('login');
        // }

        if(!this.emailError && !this.telError && !this.password1Error && !this.password2Error) {
			console.log("Saving is OK");
			this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
			if(this.partnerEmail) {
				this.$store.commit("setPartnerEmail", this.partnerEmail);
				this.partnerEmail = null;
			}
			if(this.partnerTel) {
				this.$store.commit("setPartnerTel", this.partnerTel);
				this.partnerTel = null;
			}
			if(this.partnerPassword1) {
				this.$store.commit("setPartnerPassword", this.partnerPassword1);
				this.partnerPassword1 = null;
			}
			localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));
			this.saveLoginData = true;
			this.editLoginData = false;
        } else {
			console.log("Saving is not OK");
		}
	},
	savePassportDataPartner() {
		if(!this.validSeries(this.partnerSeries) && this.partnerSeries != null) {
            this.seriesError = "Введите корректную серию.";
        } else {
            this.seriesError = null;
        }

		if(!this.validNumber(this.partnerNumber) && this.partnerNumber != null) {
            this.numberError = "Введите корректный номер.";
        } else {
            this.numberError = null;
        }

		if(!this.validIssued(this.partnerIssued) && this.partnerIssued != null) {
            this.issuedError = "Введите, кем выдан.";
        } else {
            this.issuedError = null;
        }

		if(!this.partnerIssuedDay && this.partnerIssuedMonth && this.partnerIssuedYear) {
            this.issuedDayError = true;
			this.issuedMonthError = null;
			this.issuedYearError = null;
			this.issuedDateError = "Введите корректную дату выдачи: укажите день.";
        } else if(this.partnerIssuedDay && !this.partnerIssuedMonth && this.partnerIssuedYear) {
            this.issuedMonthError = true;
			this.issuedDayError = null;
			this.issuedYearError = null;
			this.issuedDateError = "Введите корректную дату выдачи: укажите месяц.";
        } else if(this.partnerIssuedDay && this.partnerIssuedMonth && !this.partnerIssuedYear) {
            this.issuedYearError = true;
			this.issuedDayError = null;
			this.issuedMonthError = null;
			this.issuedDateError = "Введите корректную дату выдачи: укажите год.";
        } else if(!this.partnerIssuedDay && !this.partnerIssuedMonth && this.partnerIssuedYear) {
            this.issuedDayError = true;
			this.issuedMonthError = true;
			this.issuedYearError = null;
			this.issuedDateError = "Введите корректную дату выдачи: укажите день и месяц.";
        } else if(!this.partnerIssuedDay && this.partnerIssuedMonth && !this.partnerIssuedYear) {
            this.issuedDayError = true;
			this.issuedYearError = true;
			this.issuedMonthError = null;
			this.issuedDateError = "Введите корректную дату выдачи: укажите день и год.";
        } else if(this.partnerIssuedDay && !this.partnerIssuedMonth && !this.partnerIssuedYear) {
            this.issuedMonthError = true;
			this.issuedYearError = true;
			this.issuedDayError = null;
			this.issuedDateError = "Введите корректную дату выдачи: укажите месяц и год.";
        } else {
            this.issuedDateError = null;
			this.issuedDayError = null;
			this.issuedMonthError = null;
			this.issuedYearError = null;
        }

        // if(!this.nameError && !this.surnameError && !this.cityError) {
		// 	this.$store.dispatch('login');
        // }

        if(!this.seriesError && !this.numberError && !this.issuedError && !this.issuedDateError) {
			console.log("Saving is OK", this.partnerSeries);
			this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
			if(this.partnerSeries) {
				this.$store.commit("setPartnerSeries", this.partnerSeries);
				this.partnerSeries = null;
			}
			if(this.partnerNumber) {
				this.$store.commit("setPartnerNumber", this.partnerNumber);
				this.partnerNumber = null;
			}
			if(this.partnerIssued) {
				this.$store.commit("setPartnerIssued", this.partnerIssued);
				this.partnerIssued = null;
			}
			if(this.partnerIssuedDay && this.partnerIssuedMonth && this.partnerIssuedYear) {
				let partnerIssuedDate = this.partnerIssuedDay + "." + this.partnerIssuedMonth + "." + this.partnerIssuedYear;
				this.$store.commit("setPartnerIssuedDate", partnerIssuedDate);
				this.partnerIssuedDay = null;
				this.partnerIssuedMonth = null;
				this.partnerIssuedYear = null;
			}
			localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));

			// const metadata = {
			// 	name: this.passportScanName,
			// 	size: this.passportScanSize,
			// 	type: this.passportScanType,
			// };

			this.passportFormData.append("partnerPassportData", JSON.stringify(this.$store.getters.getPartner));

			fetch('http://example.com/upload', {
				method: 'POST',
				body: this.passportFormData
			})
			.then(response => {
				console.log('Image and JSON data uploaded successfully!', response);
				// for (const [key, value] of this.passportFormData.entries()) {
				// 	console.log(key, value);
				// }
			})
			.catch(error => {
				console.error('Error uploading image and JSON data:', error);
			});

			this.savePassportData = true;
			this.editPassportData = false;
        } else {
			console.log("Saving is not OK");
		}
	},
	saveBankDataPartner() {
		if(!this.validTin(this.partnerTin) && this.partnerTin != null) {
            this.tinError = "Введите корректный ИНН.";
        } else {
            this.tinError = null;
        }

		if(!this.validCardNumber(this.partnerCardNumber) && this.partnerCardNumber != null) {
            this.cardNumberError = "Введите корректный номер карты.";
        } else {
            this.cardNumberError = null;
        }

		if(!this.validAccountNumber(this.partnerAccountNumber) && this.partnerAccountNumber != null) {
            this.accountNumberError = "Введите корректный номер счёта.";
        } else {
            this.accountNumberError = null;
        }

		if(!this.validBankid(this.partnerBankid) && this.partnerBankid != null) {
            this.bankidError = "Введите корректный БИК.";
        } else {
            this.bankidError = null;
        }

		if(!this.validRecipientBank(this.partnerRecipientBank) && this.partnerRecipientBank != null) {
            this.recipientBankError = "Введите корректный банк получателя.";
        } else {
            this.recipientBankError = null;
        }

        // if(!this.nameError && !this.surnameError && !this.cityError) {
		// 	this.$store.dispatch('login');
        // }

        if(!this.tinError && !this.cardNumberError && !this.accountNumberError && !this.bankidError && !this.recipientBankError) {
			console.log("Saving is OK", this.partnerTin);
			this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
			if(this.partnerTin) {
				this.$store.commit("setPartnerTin", this.partnerTin);
				this.partnerTin = null;
			}
			if(this.partnerCardNumber) {
				this.$store.commit("setPartnerCardNumber", this.partnerCardNumber);
				this.partnerCardNumber = null;
			}
			if(this.partnerAccountNumber) {
				this.$store.commit("setPartnerAccountNumber", this.partnerAccountNumber);
				this.partnerAccountNumber = null;
			}
			if(this.partnerBankid) {
				this.$store.commit("setPartnerBankid", this.partnerBankid);
				this.partnerBankid = null;
			}
			if(this.partnerRecipientBank) {
				this.$store.commit("setPartnerRecipientBank", this.partnerRecipientBank);
				this.partnerRecipientBank = null;
			}
			localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));
			this.saveBankData = true;
			this.editBankData = false;
        } else {
			console.log("Saving is not OK");
		}
	},
	cancelMainDataPartner() {
		this.saveMainData = true;
		this.editMainData = false;

		this.partnerName = null;
		this.partnerSurname = null;
		this.partnerPatronymic = null;
		this.partnerBirthDay = null;
		this.partnerBirthMonth = null;
		this.partnerBirthYear = null;
		this.partnerCity = null;

		this.nameError = null;
		this.surnameError = null;
		this.patronymicError = null;
		this.birthDayError = null;
		this.birthMonthError = null;
		this.birthYearError = null;
		this.birthDateError = null;
		this.cityError = null;
	},
	cancelLoginDataPartner() {
		this.saveLoginData = true;
		this.editLoginData = false;

		this.partnerEmail = null;
		this.partnerTel = null;
		this.partnerPassword1 = null;
		this.partnerPassword2 = null;

		this.emailError = null;
		this.telError = null;
		this.password1Error = null;
		this.password2Error = null;
	},
	cancelPassportDataPartner() {
		this.savePassportData = true;
		this.editPassportData = false;

		this.partnerSeries = null;
		this.partnerNumber = null;
		this.partnerIssued = null;
		this.partnerIssuedDay = null;
		this.partnerIssuedMonth = null;
		this.partnerIssuedYear = null;
		if(this.passportScanName != null) {
			this.passportScanName = null;
		}

		this.seriesError = null;
		this.numberError = null;
		this.issuedError = null;
		this.issuedDayError = null;
		this.issuedMonthError = null;
		this.issuedYearError = null;
		this.issuedDateError = null;
	},
	cancelBankDataPartner() {
		this.saveBankData = true;
		this.editBankData = false;

		this.partnerTin = null;
		if(this.selfEmployedName != null) {
			this.selfEmployedName = null;
		}
		if(this.soleTraderName != null) {
			this.soleTraderName = null;
		}
		this.partnerCardNumber = null;
		this.partnerAccountNumber = null;
		this.partnerBankid = null;
		this.partnerRecipientBank = null;

		this.tinError = null;
		this.cardNumberError = null;
		this.accountNumberError = null;
		this.bankidError = null;
		this.recipientBankError = null;
	},
	validName: function (partnerName) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(partnerName);
    },
	validSurname: function (partnerSurname) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(partnerSurname);
    },
	validPatronymic: function (partnerPatronymic) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(partnerPatronymic);
    },
    validCity: function (partnerCity) {
      var re = /^([^0-9^<>()[\]\\.,;:\s@"!?@#$%&*=+]){2,}$/;
      return re.test(partnerCity);
    },
	validEmail: function (partnerEmail) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(partnerEmail);
    },
	validTel: function (partnerTel) {
      var re = /^(\+)?[\d\s()-]{10,16}$/;
      return re.test(partnerTel);
    },
    validPassword: function (partnerPassword) {
      var re = /^([^\s]){4,}$/;
      return re.test(partnerPassword);
    },
	validSeries: function (partnerSeries) {
      var re = /^([\d]){4}$/;
	//   var re = /^(([\d]){4})?$/; // при повторном очищении строки пропускает дальше
      return re.test(partnerSeries);
    },
	validNumber: function (partnerNumber) {
      var re = /^([\d]){6}$/;
      return re.test(partnerNumber);
    },
	validIssued: function (partnerIssued) {
      var re = /^([^<>^[\]\\!?@#$%&*=+]){2,}$/;
      return re.test(partnerIssued);
    },
	validTin: function (partnerTin) {
      var re = /^(([\d]){12})|(([\d]){10})$/;
      return re.test(partnerTin);
    },
	validCardNumber: function (partnerCardNumber) {
      var re = /^(([\d]){16})|(([\d]){18})$/;
      return re.test(partnerCardNumber);
    },
	validAccountNumber: function (partnerAccountNumber) {
      var re = /^([\d]){20}$/;
      return re.test(partnerAccountNumber);
    },
	validBankid: function (partnerBankid) {
      var re = /^([\d]){9}$/;
      return re.test(partnerBankid);
    },
	validRecipientBank: function (partnerRecipientBank) {
      var re = /^([^<>^[\]\\!?@#$%&*=+]){2,}$/;
      return re.test(partnerRecipientBank);
    },
	showPassportScanName() {
        let file = document.getElementById("passportscan").files[0];
        document.getElementById("passportscan-name").style.display = "inline";
        document.getElementById("delete-passportscan").style.display = "inline-block";
        this.passportScanName = file.name;
		
		// this.passportScanSize = file.size;
		// this.passportScanType = file.type;

		// let passportScanData = new FormData();
		// passportScanData.append("passportscan", file, file.name);
		// this.passportScanData = passportScanData;

		console.log(this.passportFormData);

		this.passportFormData.append("passportscan", file);
		// console.log(this.passportFormData);
		// for (const [key, value] of this.passportFormData.entries()) {
		// 	console.log(key, value);
		// }
    },
    deletePassportScan() {
        let file = document.getElementById("passportscan");
        document.getElementById("passportscan").value = "";
        this.passportScanName = file.value;
        document.getElementById("passportscan-name").style.display = "none";
        document.getElementById("delete-passportscan").style.display = "none";
    },
	showSelfEmployedName() {
        let file = document.getElementById("selfemployed").files[0];
        document.getElementById("selfemployed-name").style.display = "inline";
        document.getElementById("delete-selfemployed").style.display = "inline-block";
        this.selfEmployedName = file.name;
    },
    deleteSelfEmployed() {
        let file = document.getElementById("selfemployed");
        document.getElementById("selfemployed").value = "";
        this.selfEmployedName = file.value;
        document.getElementById("selfemployed-name").style.display = "none";
        document.getElementById("delete-selfemployed").style.display = "none";
    },
	showSoleTraderName() {
        let file = document.getElementById("soletrader").files[0];
        document.getElementById("soletrader-name").style.display = "inline";
        document.getElementById("delete-soletrader").style.display = "inline-block";
        this.soleTraderName = file.name;
    },
    deleteSoleTrader() {
        let file = document.getElementById("soletrader");
        document.getElementById("soletrader").value = "";
        this.soleTraderName = file.value;
        document.getElementById("soletrader-name").style.display = "none";
        document.getElementById("delete-soletrader").style.display = "none";
    },
	deletePartnerGoogle() {
		this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
		this.$store.commit('deletePartnerGoogle');
		localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));
	},
	deletePartnerVkontakte() {
		this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
		this.$store.commit('deletePartnerVkontakte');
		localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));
	},
	deletePartnerTelegram() {
		this.$store.state.partner = JSON.parse(localStorage.getItem("partner"));
		this.$store.commit('deletePartnerTelegram');
		localStorage.setItem("partner", JSON.stringify(this.$store.getters.getPartner));
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

.grey-italic {
	color: #b2b2b2;
	font-style: italic;
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

td:nth-child(2) {
	max-width: 576px;
	word-wrap: break-word;
	text-align: justify;
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

#attach-file, #attach-passportscan, #attach-selfemployed, #attach-soletrader {
    display: inline-block;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/attach-file-15.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    margin: 0 8px;
}

#attach-file:hover, #attach-passportscan:hover, #attach-selfemployed:hover, #attach-soletrader:hover {
    display: inline-block;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/attach-file-50.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

#delete-file, #delete-passportscan, #delete-selfemployed, #delete-soletrader {
    display: none;
    /* display: inline-block; */
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/delete-file-15.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    margin: 0 8px;
}

#delete-file:hover, #delete-passportscan:hover, #delete-selfemployed:hover, #delete-soletrader:hover {
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-image: url(../assets/delete-file-50.svg);
    background-position: center center;
    width: 20px;
    height: 20px;
    cursor: pointer;
}

span.file_scan {
    font-family: Times New Roman, Times, serif;
    font-size: 78%;
    box-sizing: content-box;
    border: 0;
    border-radius: 7px;
    background-color: #ffffff;
    margin: 0;
    padding: 4px 8px;
}

#file-name, #passportscan-name, #selfemployed-name, #soletrader-name {
    display: none;
}

.margin_none {
    margin: 0;
}

.form-check {
	padding-top: 5px;
	padding-bottom: 27px;
}

.form-check label {
	color: #262626;
}

.form-check input {
	-webkit-print-color-adjust: exact;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    border: 1px solid rgba(0,0,0,.25);
    color-adjust: exact;
    height: 1em;
    margin-top: .25em;
    vertical-align: top;
    width: 1em;
	border-radius: 50%;
}

.form-check input[type=radio]:checked {
	background-color: #012169;
    border-color: #012169;
}
</style>