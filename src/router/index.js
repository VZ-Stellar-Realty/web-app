import { createRouter, createWebHistory } from 'vue-router'
import { useAuthUserStore } from '@/stores/authUser'
import { routes } from './routes'

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Global navigation guard
router.beforeEach(async (to) => {
  const authStore = useAuthUserStore()
  const isLoggedIn = await authStore.isAuthenticated()

  if (isLoggedIn) {
    return handleLoggedInUser(to, authStore)
  } else {
    return handleLoggedOutUser(to)
  }
})

// Handle navigation for logged-in users
async function handleLoggedInUser(to, authStore) {
  // Redirect logged-in users away from login, register, and landing pages
  if (['login', 'register', 'landing'].includes(to.name)) {
    return { name: 'home' }
  }

  // Fetch user information if not already loaded
  if (!authStore.userData) {
    await authStore.getUserInformation()
  }

  const userRole = authStore.userRole

  // Allow access to forbidden and not-found pages
  if (['forbidden', 'not-found'].includes(to.name)) {
    return true
  }

  // Define restricted pages for Super Administrator
  const restrictedUserPages = ['home', 'properties', 'brokers']
  if (userRole === 'Super Administrator') {
    // Redirect Super Administrator away from restricted user pages
    if (restrictedUserPages.includes(to.name)) {
      return { name: 'dashboard' }
    }
    // Allow access to all other pages
    return true
  }

  // Redirect non-User roles to dashboard if accessing non-permitted pages
  if (userRole !== 'User' && !['dashboard', 'account-settings'].includes(to.name)) {
    return { name: 'dashboard' }
  }

  // Fetch authorized pages for the user role if not already loaded
  if (authStore.authPages.length === 0) {
    await authStore.getAuthPages(userRole)
  }

  console.log(`User Role: ${userRole}, User Pages:`, authStore.authPages)

  // Check if the target page is accessible for the user role
  const isAccessible = authStore.authPages.includes(to.path)
  console.log('Is Accessible:', isAccessible)

  // Redirect to forbidden page if the target page is not accessible
  if (!isAccessible && !to.meta.isDefault) {
    return { name: 'forbidden' }
  }

  // Allow access to the target page
  return true
}

// Handle navigation for logged-out users
function handleLoggedOutUser(to) {
  // Redirect to login page if the target page requires authentication
  if (to.meta.requiresAuth) {
    return { name: 'login' }
  }
  // Allow access to the target page
  return true
}

export default router
