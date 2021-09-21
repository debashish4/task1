import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    beforeEnter(to, from, next) {

      let code = to['query']['code'];
      if (code) {
        next();
        return;
      }
      next({
        name: "Login"
      });
    }

  }
]


console.log("NODE_ENV", process.env.NODE_ENV);
console.log("VUE_APP_BASE_URL", process.env.VUE_APP_BASE_URL);
const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
