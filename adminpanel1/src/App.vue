<template>
  <div id="app">
    <!-- <MenuComponent v-if="$store.getters.getUserLoggedin"/> -->
    <MenuComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app, body {
  display: flex;
  margin: 0;
  padding: 0;
}

body {
  font-family: Calibri, sans-serif;
  /* font-size: 150%; */
  font-weight: normal;
  font-style: normal;
  line-height: normal;
  color: #262626;
  background-color: #ffffff;
}

.margin-left-25 {
  margin-left: 25px;
}

::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #fff6d9;
}

::-webkit-scrollbar-button {
    background-size: 100%;
    height: 10px;
    width: 10px;
}

::-webkit-scrollbar-button:horizontal:end:increment { /* Right */
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAV0lEQVQ4T73TwQoAIAgD0Pnn9eWFh27qFlJCt3wFU0OzLOkfAPzQyoAFYCpIBfjrFGEARRSgRFQgRW6AEPkKhImoP0jjVIByFhjQGiTa7LE8Wya6hefCBhILGhGzGTl7AAAAAElFTkSuQmCC);
}

::-webkit-scrollbar-button:horizontal:start:decrement { /* Left */
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAWUlEQVQ4T72TQQoAIAgEt5fX08ODYJbgKiR4c0YUHWjGIPgFQPKIrEDACeCqzwgUls60wMK0wMOU4AWnBRH8TyCdWiPoobSWGEnoO/DjlARWUhaopPxM4dNugpQOESmtVbwAAAAASUVORK5CYII=);
}

::-webkit-scrollbar-button:vertical:end:increment { /* Down */
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVklEQVQ4T93S0QoAEAwF0OvLzZ+LwrCN5Y0XJfeoawGPKzzm8RFAAKKzjwSAeAcepIbLg2uJN0gPS0A5s5AprAEasoUtYEXE8AloCN+3j/poEp1DOK5nfmcNES1z5SIAAAAASUVORK5CYII=);
}

::-webkit-scrollbar-button:vertical:start:decrement { /* Up */
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVUlEQVQ4T2NkoBAwUqifYfAb0AD1IozG8DE+L4A01UN1NDIwMGA1BJcByJphtmI1BJsB2DTjNATdAHyasRqCbAAxmjEMgRlAimYUQwZ/QiKYVQbeCwBFhQ0RcSHRhgAAAABJRU5ErkJggg==);
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ffbf00;
    background-clip: padding-box;
}

::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    background-color: #b38600;
}

h1 {
    margin: 25px 0;
    padding: 0 25px;
    font-size: 140%;
}

p {
  margin: 0;
  padding: 0 0 25px 25px;
}

a:link {
    text-decoration: none;
    color: #b38600;
}

a:visited {
    color: #b38600;
}

a:hover {
    text-decoration: underline;
    color: #262626;
}

input {
  font-family: Calibri, sans-serif;
  font-size: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #ffbf00;
  color: #262626;
  outline: 0;
  margin: 0;
  padding: 5px 10px;
}

input.errored {
  border: 1px solid #8600b3;
}

input:last-child {
  display: block;
}

button {
  font-family: Calibri, sans-serif;
  font-size: 100%;
  box-sizing: border-box;
  border: 0;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 25px;
  cursor: pointer;
  background-color: #ffbf00;
  color: #262626;
  transition: all .3s;
}

button:hover {
  color: #806000;
}

select {
  font-family: Calibri, sans-serif;
  font-size: 100%;
  box-sizing: content-box;
	outline: none;
  border: 0;
  border-radius: 10px;
  background-color: #ffbf00;
  color: #262626;
  margin-bottom: 25px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all .3s;
}

select:hover {
  color: #806000;
}

select:open {
  border-radius: 10px 10px 0 0;
  /* background: linear-gradient(#ffbf00, #ffffff); */
}

option {
  color: #262626;
}

table {
  border-collapse: collapse;
  /* border-spacing: 0; */
  margin: 0 25px 25px 25px;
}

table thead {
  margin-bottom: 25px;
  background-color: #f7f7f7;
}

table th, table td {
  height: 50px;
  border: 0;
  padding: 0 25px;
  text-align: start;
}

table th {
  white-space: nowrap;
}

table th:first-child {
  border-radius: 10px 0 0 10px;
}

table th:last-child {
  border-radius: 0 10px 10px 0;
}

table thead td {
  height: 25px;
  background-color: #ffffff;
}

/* table tbody {
  border: 1px solid #e5e5e5;
  border-radius: 10px;
} */

table tbody tr:nth-child(even) {
  background-color: #f7f7f7;
}

table tbody tr:first-child td:first-child {
  border-top-left-radius: 10px;
}

table tbody tr:first-child td:last-child {
  border-top-right-radius: 10px;
}

table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
</style>