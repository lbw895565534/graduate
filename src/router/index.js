import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home/home'
import Main from '@/pages/main/main'
import Sort from '@/pages/main/sort'
import Detail from '@/pages/main/detail'
import Search from '@/pages/main/search'
import ShareNew from '@/pages/share/shareNew'
import ShareHot from '@/pages/share/shareHot'
import ShareMine from '@/pages/share/shareMine'
import Market from '@/pages/market/market'
import Mine from '@/pages/cart/mine'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/main',
    name: 'main',
    component: Main,
    alias: '/'
  },
  {
    path: '/main/sort',
    name: 'sort',
    component: Sort
  },
  {
    path: '/main/sort/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/main/search',
    name: 'search',
    component: Search
  },
  {
    path: '/share/ShareNew',
    name: 'share',
    component: ShareNew
  },
  {
    path: '/share/shareHot',
    name: 'shareHot',
    component: ShareHot
  },
  {
    path: '/share/shareMine',
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
