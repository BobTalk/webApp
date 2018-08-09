// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import {Vue} from "./Interface"
import App from './App'
import router from './router'
import "./public/css/font.css"
import "./public/css/reset.css"
import store from './store/index';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
