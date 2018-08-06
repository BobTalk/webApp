import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import mintUI from 'mint-ui'
import "mint-ui/lib/style.css"

Vue.use(mintUI);
Vue.prototype.$axios = axios;
//接口地址
Vue.prototype.URL={

};
export {
  Vue
}
