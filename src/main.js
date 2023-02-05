import Vue from 'vue'
import App from './App.vue'
import router from './router' //1.引入
import  './styles/index.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
