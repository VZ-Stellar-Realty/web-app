// Default
const LandingView = () => import('@/views/LandingView.vue')
const HomeView = () => import('@/views/HomeView.vue')
const PropertiesView = () => import('@/views/PropertiesView.vue')
const BrokersView = () => import('@/views/BrokersView.vue')
// Auth
const LoginView = () => import('@/views/auth/LoginView.vue')
const RegisterView = () => import('@/views/auth/RegisterView.vue')
const AppLayout = () => import('@/components/layout/AppLayout.vue')

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
      {
        path: 'brokers',
        name: 'brokers',
        component: BrokersView,
        meta: { requiresAuth: true, isDefault: true },
      },
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
