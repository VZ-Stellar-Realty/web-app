<script setup>
// Vue and Vuetify imports
import { onMounted, ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'

// Custom component imports
import TopProfileNavigation from './navigation/TopProfileNavigation.vue'
import SideNavigation from './navigation/SideNavigation.vue'

// Store imports
import { useAuthUserStore } from '@/stores/authUser'
import { useThemeStore } from '@/stores/themeStore'

// Assets imports
import logoNav from '@/assets/images/logo-nav.png'
import logoNavWhite from '@/assets/images/logo-nav-white.png'

// Stores
const authStore = useAuthUserStore()
const themeStore = useThemeStore()

// Reactive variables
const isLoggedIn = ref(false)
const isMobileLogged = ref(false)
const isDesktop = ref(false)
const appBarColor = ref(themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1')
const isFlat = ref(true)
const elevation = ref(0)
const rail = ref(true)
const expandOnHover = ref(true)
const tab = ref('')

// Computed properties
const logo = computed(() => (themeStore.theme === 'light' ? logoNav : logoNavWhite))
const isAuthPage = computed(() => route.name === 'login' || route.name === 'register')
const showSideNavigation = computed(() => authStore.userRole !== 'User')

// Vuetify display
const { xs, sm, mobile } = useDisplay()

// Route and Router
const route = useRoute()
const router = useRouter()

// Navigation items
const items = [
  { text: 'Home', value: 'home', route: '/home' },
  { text: 'Properties', value: 'properties', route: '/properties' },
  { text: 'Brokers', value: 'brokers', route: '/brokers' },
  { text: 'About Us', value: 'about', route: '/about' },
]

// Methods
const onToggleTheme = () => {
  themeStore.toggleTheme()
}

const handleScroll = () => {
  if (window.scrollY === 0) {
    appBarColor.value = themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1'
    isFlat.value = true
    elevation.value = 0
  } else {
    appBarColor.value = 'surface'
    isFlat.value = false
    elevation.value = 10
  }
}

const toggleRail = () => {
  rail.value = !rail.value
  expandOnHover.value = rail.value
}

const onTabChange = (newTab) => {
  const selectedTab = items.find((item) => item.value === newTab)
  if (selectedTab) {
    router.push(selectedTab.route)
  }
}

// Watchers
watch(
  () => themeStore.theme,
  (newTheme) => {
    appBarColor.value =
      window.scrollY === 0
        ? newTheme === 'light'
          ? 'yellow-lighten-3'
          : 'indigo-darken-1'
        : 'surface'
  },
)

watch(route, () => {
  tab.value = route.name
})

// Lifecycle hooks
onMounted(async () => {
  isLoggedIn.value = await authStore.isAuthenticated()
  isMobileLogged.value = mobile.value && isLoggedIn.value
  isDesktop.value = !mobile.value && (isLoggedIn.value || !isLoggedIn.value)
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-responsive>
    <v-app :theme="themeStore.theme">
      <SideNavigation
        v-if="showSideNavigation"
        :toggleRail="toggleRail"
        :rail="rail"
        :expandOnHover="expandOnHover"
      />

      <!-- App bar if role is 'User' -->
      <v-app-bar
        v-if="!isAuthPage && isLoggedIn && authStore.userRole === 'User'"
        class="px-16"
        :color="appBarColor"
        :flat="isFlat"
        :elevation="elevation"
        v-scroll="handleScroll"
      >
        <v-app-bar-title class="pt-2 ps-2">
          <v-img :src="logo" width="130"></v-img>
        </v-app-bar-title>

        <v-tabs v-model="tab" align-tabs="title" @update:modelValue="onTabChange">
          <v-tab
            v-for="item in items"
            :key="item.value"
            :text="item.text"
            :value="item.value"
          ></v-tab>
        </v-tabs>

        <v-spacer></v-spacer>

        <v-btn
          class="me-1"
          :icon="themeStore.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          elevation="6"
          size="small"
          slim
          @click="onToggleTheme"
        ></v-btn>

        <TopProfileNavigation v-if="isLoggedIn"></TopProfileNavigation>
      </v-app-bar>

      <!-- App bar if role is not 'User' -->
      <v-app-bar
        v-else-if="!isAuthPage && isLoggedIn && authStore.userRole !== 'User'"
        class="px-5"
        flat
      >
        <v-app-bar-nav-icon icon="mdi-menu" :theme="themeStore.theme" @click.stop="toggleRail">
        </v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <v-btn
          class="me-1"
          :icon="themeStore.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          elevation="6"
          size="small"
          slim
          @click="onToggleTheme"
        ></v-btn>

        <TopProfileNavigation v-if="isLoggedIn"></TopProfileNavigation>
      </v-app-bar>

      <v-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </v-main>
    </v-app>
  </v-responsive>
</template>
