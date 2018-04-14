import Vue from 'vue'
import Router from 'vue-router'
import FirstRoute from '@/components/FirstRoute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstRoute',
      component: FirstRoute
    }
  ]
})
