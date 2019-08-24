import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/usage/',
      name: 'usage',
      component: () => import(/* webpackChunkName: "about" */ './views/Usage/Index.vue')
    },
    {
      path: '/usage/3d-model-show',
      name: '3d-model-show',
      component: () => import(/* webpackChunkName: "about" */ './views/Usage/3DModelShow.vue')
    },
    {
      path: '/usage/ar-vr',
      name: 'ar-vr',
      component: () => import(/* webpackChunkName: "about" */ './views/Usage/ARVR.vue')
    },
    {
      path: '/usage/webpage',
      name: 'webpage',
      component: () => import(/* webpackChunkName: "about" */ './views/Usage/Webpage.vue')
    },
    {
      path: '/usage/compute',
      name: 'compute',
      component: () => import(/* webpackChunkName: "about" */ './views/Usage/Compute.vue')
    }
  ]
})
