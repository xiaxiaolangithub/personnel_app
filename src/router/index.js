import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/home',
        component: home,
        children: [
            
            
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: register
    }
  ]
})
