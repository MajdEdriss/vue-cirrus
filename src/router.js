import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';
import Components from './views/Components.vue';
import ComponentsRouter from './views/ComponentsRouter.vue';
import TestPlayground from './views/TestPlayground.vue';
import LoginPage from './views/Examples/LoginPage/LoginPage.vue';
import ContactPage from './views/Examples/ContactPage/ContactPage.vue';
import BlogPage from './views/Examples/BlogPage/BlogPage.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/components',
      name: 'components',
      component: Components,
    },
    {
      path: '/testPlayground',
      name: 'playground',
      component: TestPlayground,
    },
    {
      path: '/components/:name',
      component: ComponentsRouter,
    },
    {
      path: '/examples/loginPage',
      name: 'loginPage',
      component: LoginPage,
    },
    {
      path: '/examples/contactPage',
      name: 'contactPage',
      component: ContactPage,
    },
    {
      path: '/examples/blogPage',
      name: 'blogPage',
      component: BlogPage,
    },
  ],
});
