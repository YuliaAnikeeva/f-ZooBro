import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueMeta from 'vue-meta'
import VueLidate from 'vuelidate'
import VueTheMask from 'vue-the-mask'
import VueModalTor from "vue-modaltor";
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false
Vue.use(VueMeta)
Vue.use(VueLidate)
Vue.use(VueTheMask)
Vue.use(VueModalTor);
Vue.use(Toastify);
Vuew.use(VueCarousel);

new Vue({
  router,
  store,
  created () {
    if (localStorage.getItem('userToken')) {
      const { dispatch } = this.$store
      dispatch('autoLoginUser', localStorage.getItem('userToken'))
    }
  },
  render: h => h(App)
}).$mount('#app')
