import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {request} from "../../learnaxios/src/network/request";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


