import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import register from '@/components/register'
import search from '@/components/search'
import goodtype from '@/components/goods/goodtype'
import enter from '@/components/goods/enter'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/home',
        name: home,
        component: home,
        children: [
            {
                path: 'enter',
                name: 'enter',
                component: enter
            },
            {
                path: 'goodtype',
                name: 'goodtype',
                component: goodtype
            },
            
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: register
    },
    {
        path: '/search',
        name: 'search',
        component: search
    },
  ]
})
