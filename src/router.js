import Vue from 'vue'
import Router from 'vue-router'
import OneAuthenHome from './components/OneAuthenHome.vue'
import Upload from './components/Upload.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: OneAuthenHome
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
