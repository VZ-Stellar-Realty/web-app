// Default Route
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'

// 👉 Routes
export const routes = [
  // Default Route
  {
    path: '/',
    name: 'landing',
    component: LandingView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
]
