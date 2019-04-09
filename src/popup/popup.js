require('./bootstrap')

import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueI18n from 'vue-i18n'
import CIForm from '@app/components/Form'
import VeeValidate from 'vee-validate'
import VueOffline from 'vue-offline'
import VueLazyload from 'vue-lazyload'

global.browser = require('webextension-polyfill')
Vue.prototype.$browser = global.browser
Vue.use(VueI18n)
Vue.use(CIForm)
Vue.use(VeeValidate)
Vue.use(VueOffline)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
