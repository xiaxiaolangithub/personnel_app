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
import 'lib-flexible'                   // 移动端自适应
import { XHeader } from 'vux'           // 头部标题
import VueLazyload from 'vue-lazyload'  // 图片ngkm
Vue.use(VueLazyload, {
    preLoad: 1,                         //  完全显示之后再加载
    error: require('@/assets/images/error.jpg'),
    loading: require('@/assets/images/loading.gif'),
    attempt: 1,                         // 尝试加载次数
})
Vue.component('x-header', XHeader)      // 引入组件
FastClick.attach(document.body)         // 移除移动端页面点击延迟
Vue.config.productionTip = false
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
import 'default-passive-events'
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
