import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import POI1View from '../views/POI1View.vue';
import POI2View from '../views/POI2View.vue';
import HomeView2 from '../views/HomeView2.vue';
import AboutView2 from '../views/AboutView2.vue';
import POI1View2 from '../views/POI1View2.vue';
import POI2View2 from '../views/POI2View2.vue';
import POI3View from '../views/POI3View.vue';

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
      component: AboutView,
    },
    {
      path: '/POI1',
      name: 'POI1',
      component: POI1View,
    },
    {
      path: '/POI2',
      name: 'POI2',
      component: POI2View,
    },
    {
      path: '/2',
      name: 'home2',
      component: HomeView2,
    },
    {
      path: '/about2',
      name: 'about2',
      component: AboutView2,
    },
    {
      path: '/POI12',
      name: 'POI12',
      component: POI1View2,
    },
    {
      path: '/POI22',
      name: 'POI22',
      component: POI2View2,
    },
    {
      path: '/POI3',
      name: 'POI3',
      component: POI3View,
    },
  ],
});

export default router;
