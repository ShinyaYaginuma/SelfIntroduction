import Vue from 'vue'
import App from './App.vue'
// import Scafold from './components/Scafold.vue'

// ルーティングのために追加
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
