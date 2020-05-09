// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// step 1 :we need to register any new component we create here to use it in any other component
import Ninjas from './ninjas.vue'

Vue.config.productionTip = false

// step 2 :we need to import it with this line as follows Vue.component('choose name to call it with', the name we imported above)
Vue.component('ninjas', Ninjas)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
