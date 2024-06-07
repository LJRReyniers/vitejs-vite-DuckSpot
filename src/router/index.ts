import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '/src/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('/src/views/AboutView.vue'),
    },
    {
      path: '/POI1',
      name: 'POI1',
      component: () => import('/src/views/POI1View.vue'),
    },
    {
      path: '/POI2',
      name: 'POI2',
      component: () => import('/src/views/POI2View.vue'),
    },
    {
      path: '/2',
      name: 'home2',
      component: () => import('/src/views/HomeView2.vue'),
    },
    {
      path: '/about2',
      name: 'about2',
      component: () => import('/src/views/AboutView2.vue'),
    },
    {
      path: '/POI12',
      name: 'POI12',
      component: () => import('/src/views/POI1View2.vue'),
    },
    {
      path: '/POI22',
      name: 'POI22',
      component: () => import('/src/views/POI2View2.vue'),
    },
  ],
});

export default router;
