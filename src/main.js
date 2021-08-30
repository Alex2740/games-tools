import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import './style.css'

import Home from './views/Home.vue'
import Theorycraft from './views/Theorycraft.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home},
        { path: '/lol/theorycraft', name: 'Theorycraft', component: Theorycraft }
    ]
})

createApp(App).use(router).mount('#app')
