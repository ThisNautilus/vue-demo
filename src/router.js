import Vue from 'vue'
import Router from 'vue-router'
3.
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', component: Home },
        { path: '/detail', component: Detail },
        { path: '/about', component: About }
    ]
})