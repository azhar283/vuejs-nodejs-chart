import Vue from 'vue'
import App from './App.vue'
//import store from './store'
import Api from './api'
//import VueChartist from 'v-chartist'

Api.init();

//Vue.component('vue-chartist', VueChartist);

Vue.use(require('vue-chartist'))

new Vue({
  el: '#app',
  render: h => h(App)
})
