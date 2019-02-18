import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/synthesize'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mine',
      component: () => import('./views/mine/mine-index.vue')
    },
    {
      path: '/synthesize',
      component: () => import('./views/synthesize/synthesize-index.vue'),
      redirect: '/synthesize/news',
      children: [{
        path: 'blog',
        component: () => import('./views/synthesize/synthesize-blog.vue')
      }, {
        path: 'eng',
        component: () => import('./views/synthesize/synthesize-eng.vue')
      }, {
        path: 'recommends',
        component: () => import('./views/synthesize/synthesize-recommend.vue')
      }, {
        path: 'news',
        component: () => import('./views/synthesize/synthesize-news.vue'),
        meta: {
          keepAlive: true
        }
      }, {
        path: 'questions',
        component: () => import('./views/synthesize/synthesize-questions.vue')
      }]
    },
    {
      path: '/newDetail/:id',
      component: () => import('./views/NewDetail.vue')
    },
    {
      path: '*',
      component: () => import('./views/mine/mine-index.vue')
    }
  ]
})
