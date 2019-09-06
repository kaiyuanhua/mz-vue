import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './Views/Home'
import City from './City/Index'
import Wode from './Views/Wode'
import Shouye from './Views/Shouye'
import Yingyuan from './Views/Yingyuan'
import Zixun from './Views/Zixun'
import Xiangqing from './Views/Xiangqing'
Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'wode',
          component: Wode
        },
        {
          path: 'shouye',
          component: Shouye
        },
        {
          path: 'zixun',
          component: Zixun
        },
        {
          path: 'yingyuan',
          component: Yingyuan
        },
        {
          path: '',
          redirect: '/shouye'
        }
      ]
    },
    {
      path: '/city',
      component: City
    },
    {
      path: '/xiangqing/:id',
      component: Xiangqing,
      props: true
    },
    {
      path: '*',
      redirect: '/shouye'
    }
  ]
})
export default router
