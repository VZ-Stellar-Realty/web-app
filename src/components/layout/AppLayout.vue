<script setup>
import TopProfileNavigation from './navigation/TopProfileNavigation.vue'
import { useAuthUserStore } from '@/stores/authUser'
import { onMounted, ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useRoute, useRouter } from 'vue-router'
import logoNav from '@/assets/images/logo-nav.png'

const props = defineProps(['isWithAppBarNavIcon'])

const emit = defineEmits(['isDrawerVisible', 'theme'])

// Utilize pre-defined vue functions
const { xs, sm, mobile } = useDisplay()

// Use Pinia Store
const authStore = useAuthUserStore()

// Load Variables
const isLoggedIn = ref(false)
const isMobileLogged = ref(false)
const isDesktop = ref(false)
const theme = ref(localStorage.getItem('theme') ?? 'light')

//  Toggle Theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  emit('theme', theme.value)
}

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
  { text: 'Agents', value: 'agents', route: '/agents' },
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
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar
        v-if="!isAuthPage && isLoggedIn"
        class="px-5"
        :color="theme === 'light' ? 'red-lighten-2' : 'red-darken-4'"
        border
      >
        <v-app-bar-nav-icon
          v-if="props.isWithAppBarNavIcon"
          icon="mdi-menu"
          :theme="theme"
          @click="emit('isDrawerVisible')"
        >
        </v-app-bar-nav-icon>

        <v-app-bar-title>
          <v-img :src="logoNav" :width="xs ? '100%' : sm ? '40%' : '35%'"></v-img>
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
          class="me-2"
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
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
