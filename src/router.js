import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router =  new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'weather',
      component: () => import('./views/Weather.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue')
    },
  ]
});

export default router;