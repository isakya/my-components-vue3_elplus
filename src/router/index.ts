// RouteRecordRaw: ts需要引入每个路由的类型
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'


const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },

]

const router = createRouter ({
  routes,
  history: createWebHashHistory()
})

export default router