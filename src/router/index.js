import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import CreateStory from '../components/CreateStory.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-story',
    name: 'CreateStory',
    component: CreateStory
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router 