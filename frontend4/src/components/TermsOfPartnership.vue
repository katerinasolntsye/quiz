<template>
    <div>
        <div class="page-shadow" @click="$store.commit('closeTermsOfPartnership'); $router.back()" v-if="$store.getters.getTermsOfPartnership">
          <div class="pop-up main" @click="stopPropag" v-if="$store.getters.getTermsOfPartnership">
            <span class="close-btn" @click="$store.commit('closeTermsOfPartnership'); $router.back()">&times;</span>
            <p style="text-align: center;"><b>Условия партнёрской программы</b></p>
            <p style="padding: 0;"><b>Начиная работать в личном кабинете Партнёра, Вы принимаете условия партнёрской программы:</b></p>
            <p style="padding: 0;">&emsp;Для начисления вознаграждения, Партнёру необходимо сгенерировать в личном кабинете промокод и передать его потенциальным клиентам (покупателям).
                <br />&emsp;При оплате с использованием партнёрского промокода клиент получает скидку до 10%, а Партнёру начисляется вознаграждение в размере 10% от суммы, оплаченной клиентом за покупку доступа к курсу обучения FullEng (получению онлайн продукта).
                <br />&emsp;Вознаграждение Партнёра выплачивается по истечению 30 дней с момента оплаты клиентом доступа к курсу.
                <br />&emsp;Выплата вознаграждения в сумме, превышающей 15 000 рублей, производится при наличии статуса самозанятого (плательщика налога на профессиональный доход) либо на реквизиты индивидуального предпринимателя.
                <br />&emsp;Для запроса выплаты вознаграждения Партнёру необходимо заполнить соответствующие реквизиты в разделе «Профиль».
                <br />&emsp;В личном кабинете Партнёр может видеть сумму начисленного вознаграждения за весь период участия в партнёрской программе, а также сумму вознаграждения, доступного к выплате в текущий расчётный период.
                <br />&emsp;Иностранные граждане могут получать выплаты при наличии счёта в российском банке.
                <br />&emsp;Данные условия являются обязательными для Партнёра, и ему необходимо самостоятельно периодически проверять их на наличие любых изменений.
            </p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TermsOfPartnership',
    data() {
        return {}
    },
    methods: {
        stopPropag: function(event) {
            event.stopPropagation();
        },
    },
    mounted() {
        document.title = "FullEng – Условия использования";
    }
}
</script>

<style scoped>
.page-shadow {
    font-size: 78%;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.88);
  z-index: 920;
}

.pop-up {
  display: block;
  overflow: auto;
  width: 782px;
  height: 90%;
  margin: 3vh auto;
  color: #262626;
  background: #f7f7f7;
  padding: 20px;
  z-index: 950;
  /* font-size: 125%; */
  font-weight: normal;
  border-radius: 7px;
  text-align: justify;
  user-select: none;
}

.pop-up span.close-btn {
    float: right;
    font-weight: bold;
    font-size: 125%;
    cursor: pointer;
}

p {
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

a.inside-footer-text {
  text-decoration: underline;
}

a:link {
    color: #808080;
}

a:visited {
    color: #808080;
}

a:hover {
    color: #b2b2b2;
}
</style>