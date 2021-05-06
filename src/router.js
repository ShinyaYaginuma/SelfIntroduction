import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Home from './views/Home.vue'
import Skills from './views/Skills.vue'

Vue.use(Router)
Vue.use(BootstrapVue) // for BootstrapVue

import 'bootstrap/dist/css/bootstrap.css' // for BootstrapVue
import 'bootstrap-vue/dist/bootstrap-vue.css' // for BootstrapVue

export default new Router({
    // デフォルトの挙動では URL に `#` が含まれる.
    // URL から hash を取り除くには `mode:history` を指定する
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
    ]
})