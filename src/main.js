import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false
Vue.use(VueProgressBar, {
  color: '#D60103',
  failedColor: 'red',
  height: '2px'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
