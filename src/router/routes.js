// Layouts
const AppLayout = () => import('@/components/layout/AppLayout.vue')

// Auth Pages
const LoginView = () => import('@/views/auth/LoginView.vue')
const RegisterView = () => import('@/views/auth/RegisterView.vue')

// Default Pages
const LandingView = () => import('@/views/LandingView.vue')
const DashboardView = () => import('@/views/DashboardView.vue')
const HomeView = () => import('@/views/HomeView.vue')
const PropertiesView = () => import('@/views/PropertiesView.vue')
const BrokersView = () => import('@/views/BrokersView.vue')
const AccountSettingsView = () => import('@/views/AccountSettingsView.vue')

// Error Pages
const ForbiddenView = () => import('@/views/errors/ForbiddenView.vue')
const NotFoundView = () => import('@/views/errors/NotFoundView.vue')

// 👉 Routes
export const routes = [
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
      {
        path: 'account/settings',
        name: 'account-settings',
        component: AccountSettingsView,
        meta: { requiresAuth: true, isDefault: true },
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: DashboardView,
        meta: { requiresAuth: true, isDefault: true },
      },
    ],
  },

  // Error Routes
  {
    path: '/forbidden',
    name: 'forbidden',
    component: ForbiddenView,
    meta: { isDefault: true },
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView,
    meta: { isDefault: true },
  },
]
