import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import login from "../components/common/login"
import search from "../components/pages/search"

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component:(resolve) => require.ensure([], () => resolve(require("../components/common/login")), 'login'),
      meta: {title: '登录'}
    },
    {
      path: '/search',
      name: 'search',
      component: (resolve) => require.ensure([], () => resolve(require("../components/pages/search")), 'search')
    }
  ]
});
/**
 * 用于检测router变化时改变页面title
 */
router.beforeEach((to, from, next) => {
  // 动态改变页面title属性
  document.title = to.meta.title ? to.meta.title : '';
  next();
});

export default router;
