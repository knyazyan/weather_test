import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/store'
import Vuetify, { VLayout, VApp, VAutocomplete, VSelect } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VLayout,
    VApp,
    VAutocomplete,
    VSelect,
  }
});

import Api from './plugins/api.adapter';
Vue.use(Api);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
