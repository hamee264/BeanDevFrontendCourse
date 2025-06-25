import { createRouter, createWebHistory } from 'vue-router';
import Helloworld from '../components/HelloWorld.vue';
import HtmlPage from '../views/topics/HtmlPage.vue';
import CssPage from '../views/topics/CssPage.vue';
import JavascriptPage from '../views/topics/JavascriptPage.vue';
import GitPage from '../views/topics/GitPage.vue';
import FrameworksPage from '../views/topics/FrameworksPage.vue';
import BuildToolsPage from '../views/topics/BuildToolsPage.vue';
import Tutorials from '../views/Tutorials.vue';
import Examples from '../views/Examples.vue';
import Glossaries from '../views/Glossaries.vue';
import WhyFrontend from '../views/WhyFrontend.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', name: 'Helloworld', component: Helloworld },
  { path: '/topics/html', name: 'HTML', component: HtmlPage },
  { path: '/topics/css', name: 'CSS', component: CssPage },
  { path: '/topics/javascript', name: 'JavaScript', component: JavascriptPage },
  { path: '/topics/version-control', name: 'VersionControl', component: GitPage },
  { path: '/topics/frameworks', name: 'Frameworks', component: FrameworksPage },
  { path: '/topics/build-tools', name: 'BuildTools', component: BuildToolsPage },
  { path: '/tutorials', name: 'Tutorials', component: Tutorials },
  { path: '/examples', name: 'Examples', component: Examples },
  { path: '/glossaries', name: 'Glossaries', component: Glossaries },
  { path: '/WhyFrontend', name: 'WhyFrontend', component: WhyFrontend },
  { path: '/about', name: 'About', component: About },

  // Catch-all route to handle 404 on refresh (required for Netlify)
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
