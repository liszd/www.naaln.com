// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui';
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import '../static/css/custom.css'

Vue.use(BootstrapVue)
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.component('v-icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
