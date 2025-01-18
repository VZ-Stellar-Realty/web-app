<script setup>
import { useAuthUserStore } from '@/stores/authUser'
import { useDisplay } from 'vuetify'
import { ref, defineProps } from 'vue'

// Use Pinia Store
const authStore = useAuthUserStore()

// Utilize pre-defined vue functions
const { mobile } = useDisplay()

// Load Variables
const isSuperAdmin = authStore.userRole === 'Super Administrator'
const props = defineProps(['isDrawerVisible'])
const theme = ref(localStorage.getItem('theme') ?? 'light')

// On Theme Update
const onThemeUpdate = (value) => {
  theme.value = value
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12"> hello! </v-col>
    </v-row>
    <slot name="side-navigation"></slot>
    <div v-if="props.isDrawerVisible">Drawer is visible</div>
  </v-container>
</template>
