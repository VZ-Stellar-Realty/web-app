<script setup>
import { useAuthUserStore } from '@/stores/authUser'
import { useDisplay } from 'vuetify'
import { ref } from 'vue'

// Use Pinia Store
const authStore = useAuthUserStore()

// Utilize pre-defined vue functions
const { mobile } = useDisplay()

// Load Variables
const isSuperAdmin = authStore.userRole === 'Super Administrator'
const theme = ref(localStorage.getItem('theme') ?? 'light')

// On Theme Update
const onThemeUpdate = (value) => {
  theme.value = value
}
</script>

<template>
  <v-container> LOW </v-container>
</template>
