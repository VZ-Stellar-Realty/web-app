<script setup>
import {
  mainNav,
  menuItemsNav1,
  menuItemsNav2,
  menuItemsNav3,
  menuItemsNav4,
  menuItemsNav5,
} from './sideNavigation'
import { useAuthUserStore } from '@/stores/authUser'
import { ref, watch, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps(['toggleRail', 'rail', 'expandOnHover'])

import logo from '@/assets/images/logo-bgw.png'

const { mobile } = useDisplay()
const authStore = useAuthUserStore()

const noAccessPages = ref([])
const editableMenuItemsNav1 = ref([...menuItemsNav1])
const editableMenuItemsNav2 = ref([...menuItemsNav2])
const editableMenuItemsNav3 = ref([...menuItemsNav3])
const editableMenuItemsNav4 = ref([...menuItemsNav4])
const editableMenuItemsNav5 = ref([...menuItemsNav5])

const onFilterPages = async () => {
  if (authStore.userRole === 'Super Administrator') return

  const menuItems = [
    { items: editableMenuItemsNav1, title: mainNav[0][0] },
    { items: editableMenuItemsNav2, title: mainNav[1][0] },
    { items: editableMenuItemsNav3, title: mainNav[2][0] },
    { items: editableMenuItemsNav4, title: mainNav[3][0] },
    { items: editableMenuItemsNav5, title: mainNav[4][0] },
  ]

  menuItems.forEach(({ items, title }) => {
    items.value = items.value.filter((item) => authStore.authPages.includes(item[3]))
    if (items.value.length === 0) noAccessPages.value.push(title)
  })
}

const drawer = ref(true)

const handleDrawerClick = () => {
  props.toggleRail()
}

onMounted(() => {
  onFilterPages()
})
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="props.rail"
    :expand-on-hover="props.expandOnHover"
    permanent
    @click="handleDrawerClick"
    floating
  >
    <v-list class="mt-1">
      <v-list-item :prepend-avatar="logo"
        ><strong class="text-h5 font-weight-black">VZStellar</strong></v-list-item
      >
    </v-list>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
        to="/dashboard"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list-group :key="i" v-for="([title, icon], i) in mainNav">
        <template #activator="{ props }" v-if="!noAccessPages.includes(title)">
          <v-list-item v-bind="props" :prepend-icon="icon" :title="title"></v-list-item>
        </template>

        <template v-if="title === mainNav[0][0]">
          <v-list-item
            v-for="([title, icon, subtitle, to], i) in editableMenuItemsNav1"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :subtitle="subtitle ?? undefined"
            :to="to ?? undefined"
          ></v-list-item>
        </template>

        <template v-if="title === mainNav[1][0]">
          <v-list-item
            v-for="([title, icon, subtitle, to], i) in editableMenuItemsNav2"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :subtitle="subtitle ?? undefined"
            :to="to ?? undefined"
          ></v-list-item>
        </template>

        <template v-if="title === mainNav[2][0]">
          <v-list-item
            v-for="([title, icon, subtitle, to], i) in editableMenuItemsNav3"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :subtitle="subtitle ?? undefined"
            :to="to ?? undefined"
          ></v-list-item>
        </template>

        <template v-if="title === mainNav[3][0]">
          <v-list-item
            v-for="([title, icon, subtitle, to], i) in editableMenuItemsNav4"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :subtitle="subtitle ?? undefined"
            :to="to ?? undefined"
          ></v-list-item>
        </template>

        <template v-if="title === mainNav[4][0]">
          <v-list-item
            v-for="([title, icon, subtitle, to], i) in editableMenuItemsNav5"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :subtitle="subtitle ?? undefined"
            :to="to ?? undefined"
          ></v-list-item>
        </template>
      </v-list-group>

      <v-divider></v-divider>

      <v-list-item
        prepend-icon="mdi-wrench"
        title="Account Settings"
        to="/account/settings"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
