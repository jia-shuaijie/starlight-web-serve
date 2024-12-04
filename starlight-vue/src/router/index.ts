import { createRouter, createWebHistory } from 'vue-router'

const getChildren = () => {

  return [
  ]
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layout/LayoutIndex.vue'),
      children: getChildren(),
      //     children: [
      //       {
      //         path: '/home',
      //         // route level code-splitting
      //         // this generates a separate chunk (About.[hash].js) for this route
      //         // which is lazy-loaded when the route is visited.
      //         component: () => import('../views/HomeView.vue'),
      //         children: [],
      //       },
      //       {
      //         path: '/about',
      //         // route level code-splitting
      //         // this generates a separate chunk (About.[hash].js) for this route
      //         // which is lazy-loaded when the route is visited.
      //         component: () => import('../views/AboutView.vue'),
      //       },
      //     ],
    },
  ],
})

export default router
