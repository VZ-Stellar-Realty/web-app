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
  <AppLayout :is-with-app-bar-nav-icon="true" @theme="onThemeUpdate">
    <template #content>
      <v-container fluid>
        <v-row>
          <v-col cols="12"> hello! </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>
