// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueRouter from 'vue-router'
import Routers from './routers'


Vue.use(MuseUI);
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

// 自定义指令
// Vue.directive('colors',{
//   bind(el,binding,vnode){
//     el.style.color = "#"+Math.random().toString(16).slice(2,8);
//   }
// })

// Vue.directive('change',{
//   bind(el, binding, vnode){
//     if(binding.value == 'changes'){
//       el.style.background = "#A00000";
//     }else if(binding.value == 'changest'){
//       el.style.background = 'green';
//     }
//   }
// })

// 自定义过滤器(全局的)
// Vue.filter('touppercase',function(value){
//   return value.toUpperCase();
// })

// Vue.filter('hide',function(value){
//   return value.slice(0,100) + "...";
// })

// 路由配置
const router = new VueRouter({
      routes:Routers,
      mode:'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
