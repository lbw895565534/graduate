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
import Edit from '@/pages/sort/edit'
import Collect from '@/pages/mine/collect'
import DetailStuff from '@/pages/market/detailStuff'
import Cart from '@/pages/market/cart'
import Search from '@/pages/search/search'
import ShareInput from '@/pages/share/shareInput'
import Profile from '@/pages/mine/profile'
import Setting from '@/pages/mine/setting'
import Encourage from '@/pages/mine/encourage'

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
      meta: {
        keepAlive: true
      },
      children: [{
        path: 'home',
        name: 'home',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'share',
        name: 'share',
        component: Share,
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'market',
        name: 'market',
        component: Market,
        meta: {
          keepAlive: true
        }
      },      
      {
        path: 'mine',
        name: 'mine',
        component: Mine,
        meta: {
          keepAlive: true
        }
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
        path: 'edit',
        name: 'edit',
        component: Edit
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
        path: 'collect',
        name: 'collect',
        component: Collect
      },
      {
        path: 'mine/profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'mine/setting',
        name: 'setting',
        component: Setting
      },
      {
        path: 'mine/encourage',
        name: 'encourage',
        component: Encourage
      }
      ]
    }
  ]
})
