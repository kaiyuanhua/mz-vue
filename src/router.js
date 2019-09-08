import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('./Views/Home'),
      children: [
        {
          path: 'wode',
          component: () => import('./Views/Wode')
        },
        {
          path: 'shouye',
          component: () => import('./Views/Shouye')
        },
        {
          path: 'zixun',
          component: () => import('./Views/Zixun')
        },
        {
          path: 'yingyuan',
          component: () => import('./Views/Yingyuan')
        },
        {
          path: '',
          redirect: '/shouye'
        }
      ]
    },
    {
      path: '/city',
      component: () => import('./City/Index')
    },
    {
      path: '/yu',
      component: () => import('./Views/Yu')
    },
    {
      path: '/syste',
      component: () => import('./Views/Syste')
    },
    {
      path: '/maizuo',
      component: () => import('./Views/Maizuo')
    },
    {
      path: '/login',
      component: () => import('./Views/Login')
    },
    {
      path: '/xiangqing/:id',
      component: () => import('./Views/Xiangqing'),
      props: true
    },
    {
      path: '*',
      redirect: '/shouye'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/maizuo' || to.path === '/syste' || to.path === '/yu') {
    next('/login')
  } else {
    next()
  }
})
export default router
