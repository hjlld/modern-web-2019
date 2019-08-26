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
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/usage/',
      name: 'usage',
      component: () => import(/* webpackChunkName: "usage" */ './views/Usage/Index.vue')
    },
    {
      path: '/usage/3d-model-show',
      name: '3d-model-show',
      component: () => import(/* webpackChunkName: "3d-model-show" */ './views/Usage/3DModelShow.vue')
    },
    {
      path: '/usage/ar-vr',
      name: 'ar-vr',
      component: () => import(/* webpackChunkName: "ar-vr" */ './views/Usage/ARVR.vue')
    },
    {
      path: '/usage/webpage',
      name: 'webpage',
      component: () => import(/* webpackChunkName: "webpage" */ './views/Usage/Webpage.vue')
    },
    {
      path: '/usage/compute',
      name: 'compute',
      component: () => import(/* webpackChunkName: "compute" */ './views/Usage/Compute.vue')
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import(/* webpackChunkName: "performance" */ './views/Performance/Index.vue')
    },
    {
      path: '/performance/offscreencanvas',
      name: 'offscreencanvas',
      component: () => import(/* webpackChunkName: "offscreencanvas" */ './views/Performance/OffscreenCanvas.vue')
    },
    {
      path: '/performance/webworker',
      name: 'webworker',
      component: () => import(/* webpackChunkName: "webworker" */ './views/Performance/WebWorker.vue')
    },
    {
      path: '/performance/webassembly',
      name: 'webassembly',
      component: () => import(/* webpackChunkName: "webassembly" */ './views/Performance/WebAssembly.vue')
    },
    {
      path: '/performance/compression',
      name: 'compression',
      component: () => import(/* webpackChunkName: "compression" */ './views/Performance/Compression.vue')
    },
    {
      path: '/easeytouse',
      name: 'easeytouse',
      component: () => import(/* webpackChunkName: "easeytouse" */ './views/EasyToUse/Index.vue')
    },
    {
      path: '/easeytouse/webcomponents',
      name: 'webcomponents',
      component: () => import(/* webpackChunkName: "webcomponents" */ './views/EasyToUse/WebComponents.vue')
    },
  ]
})
