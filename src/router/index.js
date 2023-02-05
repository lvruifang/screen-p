import Vue from 'vue'
import VueRouter  from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
      },
      {
        path:'/index',
        name:'index',
        component:() => import('@/views/index'),
      },
]


export default new VueRouter({
    routes,
})