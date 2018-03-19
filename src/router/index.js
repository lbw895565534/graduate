import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home'
import Main from '@/pages/main/main'
import Share from '@/pages/share/shareNew'
import ShareHot from '@/pages/share/shareHot'
import ShareMine from '@/pages/share/shareMine'
import Market from '@/pages/market/market'
import Mine from '@/pages/cart/mine'
import Sort from '@/pages/main/sort'
import Detail from '@/pages/main/detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/main',
    name: 'main',
    component: Main,
    alias: '/'
  },
  {
    path: '/sort',
    name: 'sort',
    component: Sort
  },
  {
    path: '/sort/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/share',
    name: 'share',
    component: Share
  },
  {
    path: '/shareHot',
    name: 'shareHot',
    component: ShareHot
  },
  {
    path: '/shareMine',
    name: 'shareMine',
    component: ShareMine
  },
  {
    path: '/market',
    name: 'market',
    component: Market
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
  ]
})
