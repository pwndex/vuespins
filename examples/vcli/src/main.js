import Vue from 'vue'
import App from './App.vue'
import Vuespins from 'vuespins'

Vue.use(Vuespins)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
