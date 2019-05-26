import Vue from 'vue'
import Router from 'vue-router'
import store from '@/stores/store';
import NProgress from 'nprogress'

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
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (store.state.auth.isAuthenticated == false) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.closeForAuth)) {
    if (store.state.auth.isAuthenticated != false && store.state.auth.isAuthenticated != undefined) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next();
  }
});

export default router;