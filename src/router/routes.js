// Default
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'
// Auth
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'

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

  // Auth Routes
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
]
