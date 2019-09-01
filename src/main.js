import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入bootstrap
import $ from 'jquery'
import 'bootstrap'
// 1 全局组件的使用
// 1.1注册全局组件Global
import Global from './components/Global.vue'
Vue.component('Global', Global)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')