import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import POI1View2 from '../views/POI1View2.vue';
import POI2View2 from '../views/POI2View2.vue';
import POI3View from '../views/POI3View.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: route => ({ id: route.query.ID }),
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/POI12',
      name: 'POI1',
      component: POI1View2,
    },
    {
      path: '/POI22',
      name: 'POI2',
      component: POI2View2,
    },
    {
      path: '/POI3',
      name: 'POI3',
      component: POI3View,
    }
  ],
});

export default router;