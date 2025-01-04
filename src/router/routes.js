// Default
import LandingView from '@/views/LandingView.vue'
import HomeView from '@/views/HomeView.vue'
import PropertiesView from '@/views/PropertiesView.vue'
// Auth
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import AppLayout from '@/components/layout/AppLayout.vue'

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
    path: '/',
    component: AppLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
        meta: { requiresAuth: true, isDefault: true },
      },
      {
        path: 'properties',
        name: 'properties',
        component: PropertiesView,
        meta: { requiresAuth: true, isDefault: true },
      },
      // Add other routes here
    ],
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
