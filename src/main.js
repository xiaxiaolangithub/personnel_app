// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import { AjaxPlugin } from 'vux'        // 引入ajax
Vue.use(AjaxPlugin)
Vue.use(VueRouter)
import  { ToastPlugin } from 'vux'      // 弹窗
Vue.use(ToastPlugin)
import './assets/iconfont/iconfont.css'


FastClick.attach(document.body)         // 移除移动端页面点击延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
