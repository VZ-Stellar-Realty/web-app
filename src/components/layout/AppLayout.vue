<script setup>
import TopProfileNavigation from './navigation/TopProfileNavigation.vue'
import { useAuthUserStore } from '@/stores/authUser'
import { onMounted, ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'
import logoNav from '@/assets/images/logo-nav.png'
import logoNavWhite from '@/assets/images/logo-nav-white.png'
import { useThemeStore } from '@/stores/themeStore'

const props = defineProps(['isWithAppBarNavIcon'])

const emit = defineEmits(['isDrawerVisible'])

// Computed property to determine the logo based on the theme
const logo = computed(() => (themeStore.theme === 'light' ? logoNav : logoNavWhite))

// Utilize pre-defined vue functions
const { xs, sm, mobile } = useDisplay()

// Use Pinia Store
const authStore = useAuthUserStore()
const themeStore = useThemeStore()

// Load Variables
const isLoggedIn = ref(false)
const isMobileLogged = ref(false)
const isDesktop = ref(false)
const appBarColor = ref(themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1')
const isFlat = ref(true)
const elevation = ref(0)

//  Toggle Theme
const onToggleTheme = () => {
  themeStore.toggleTheme()
}

// Watch for theme changes to update appBarColor
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

// Load Functions during component rendering
onMounted(async () => {
  isLoggedIn.value = await authStore.isAuthenticated()
  isMobileLogged.value = mobile.value && isLoggedIn.value
  isDesktop.value = !mobile.value && (isLoggedIn.value || !isLoggedIn.value)
})

// Tabs
const route = useRoute()
const router = useRouter()
const tab = ref(route.name)

const items = [
  { text: 'Home', value: 'home', route: '/home' },
  { text: 'Properties', value: 'properties', route: '/properties' },
  { text: 'Brokers', value: 'brokers', route: '/brokers' },
  { text: 'About Us', value: 'about', route: '/about' },
]

const onTabChange = (newTab) => {
  const selectedTab = items.find((item) => item.value === newTab)
  if (selectedTab) {
    router.push(selectedTab.route)
  }
}

// Watch for route changes to update the tab value
watch(route, () => {
  tab.value = route.name
})

// Check if the current route is login or register
const isAuthPage = computed(() => route.name === 'login' || route.name === 'register')

// Handle scroll event
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-responsive>
    <v-app :theme="themeStore.theme">
      <v-app-bar
        v-if="!isAuthPage && isLoggedIn"
        class="px-16"
        :color="appBarColor"
        :flat="isFlat"
        :elevation="elevation"
        v-scroll="handleScroll"
      >
        <v-app-bar-nav-icon
          v-if="props.isWithAppBarNavIcon"
          icon="mdi-menu"
          :theme="themeStore.theme"
          @click="emit('isDrawerVisible')"
        >
        </v-app-bar-nav-icon>

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
          size="small"
          slim
          @click="onToggleTheme"
        ></v-btn>

        <TopProfileNavigation v-if="isLoggedIn"></TopProfileNavigation>
      </v-app-bar>

      <slot name="side-navigation"></slot>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </v-responsive>
</template>
