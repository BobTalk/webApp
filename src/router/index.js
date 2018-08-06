import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import login from "../components/common/login"
import search from "../components/pages/search"
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/search',
      name:'search',
      component:search
    }
  ]
})
