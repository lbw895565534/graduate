import Vue from 'vue'
import Router from 'vue-router'

//一级页面
import Login from '@/pages/login/login'
import Main from '@/pages/main/main'
import Home from '@/pages/home/home'
import Market from '@/pages/market/market'
import Mine from '@/pages/mine/mine'
import Share from '@/pages/share/share'
//二级页面
import Next from '@/pages/next/next'
import Sort from '@/pages/sort/sort'
import DetailCookbook from '@/pages/sort/detailCookbook'
import Comments from '@/pages/sort/comments'
import DetailStuff from '@/pages/market/detailStuff'
import Cart from '@/pages/market/cart'
import Search from '@/pages/search/search'
import ShareInput from '@/pages/share/shareInput'
import Profile from '@/pages/mine/profile'

Vue.use(Router)

export default new Router({
  routes: [
    //重定向到main/home
    {
      path: '/',
      redirect: 'main/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [{
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'share',
        name: 'share',
        component: Share,
      },
      {
        path: 'market',
        name: 'market',
        component: Market,
      },      
      {
        path: 'mine',
        name: 'mine',
        component: Mine,
      }
      ]
    },
    {
      path: '/next',
      name: 'next',
      component: Next,
      children: [{
        path: 'sort/:kind',
        name: 'sort',
        component: Sort        
      },
      {
        path: 'detailCookbook',
        name: 'detailCookbook',
        component: DetailCookbook,
      },
      {
        path: 'detailStuff',
        name: 'detailStuff',
        component: DetailStuff,
      },
      {
        path: 'cart',
        name: 'cart',
        component: Cart
      },
      {
        path: 'comments',
        name: 'comments',
        component: Comments
      },    
      {
        path: 'search',
        name: 'search',
        component: Search
      },
      {
        path: 'share/ShareInput',
        name: 'shareInput',
        component: ShareInput
      },
      {
        path: 'mine/profile',
        name: 'profile',
        component: Profile
      }
      ]
    }
  ]
})
