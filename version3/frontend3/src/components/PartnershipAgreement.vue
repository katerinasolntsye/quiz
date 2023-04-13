<template>
    <div>
        <div class="page-shadow" @click="$store.commit('closePartnershipAgreement'); $router.back()" v-if="$store.getters.getPartnershipAgreement">
          <div class="pop-up main" @click="stopPropag" v-if="$store.getters.getPartnershipAgreement">
            <span class="close-btn" @click="$store.commit('closePartnershipAgreement'); $router.back()">&times;</span>
            <p style="text-align: center;"><b>Соглашение</b>
                <br /> об участии в партнёрской программе</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {
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