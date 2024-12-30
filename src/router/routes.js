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
    meta: { requiresAuth: false },
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true, isDefault: true },
  },

  // Auth Routes
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { requiresAuth: false },
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    meta: { requiresAuth: false },
  },
]
