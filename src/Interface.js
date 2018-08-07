import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import mintUI from 'mint-ui'
import "mint-ui/lib/style.css"

Vue.use(mintUI);
Vue.prototype.$axios = axios;
window.BASE = "http://127.0.0.1";
//接口地址
Vue.prototype.URL = {
  BASEURL: BASE + ':3000',//请求的主地址
  LOGIN: {
    USERINFO: "/users"
  }
};
export {
  Vue
}
