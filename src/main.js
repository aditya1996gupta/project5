import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AboutPage from './components/AboutPage.vue'
import Travelpage from './components/Travelpage.vue'
import TravelAmericaPage from './components/TravelAmericaPage.vue'
import TravelChinaPage from './components/TravelChinaPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/travel',
    component: Travelpage,
    children: [
      { path: '/travel/america', component: TravelAmericaPage },
      { path: '/travel/china', component: TravelChinaPage }
    ]
  },
  {
    path: '/about', component: AboutPage
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
