import Vue from 'vue'
import App from './App.vue'

// import Scafold from './components/Scafold.vue'

// ルーティングのために追加
import router from './router.js'

import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
