<script setup>
import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { computed } from 'vue'
import avatarImage from '@/assets/images/avatar.png'
import brokersBg from '@/assets/images/brokers-bg.png'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollToTopFab from '@/components/common/ScrollToTopFab.vue'

const themeStore = useThemeStore()
const loading = ref(true)
const currentPage = ref(1)
const itemsPerPage = 9
const search = ref(false)

const borderColor = computed(() => (themeStore.theme === 'light' ? 'white' : '#212121'))
const totalPages = computed(() => Math.ceil(items.length / itemsPerPage))

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return items.slice(start, end)
})

const items = [
  {
    name: 'Joren Verdad',
    email: 'jorenverdad@gmail.com',
    contact: '+639123456789',
    bio: 'Experienced broker with a deep understanding of the local market. To helping clients find their dream homes. Dedicated to helping clients find their dream homes.',
  },
  {
    name: 'Honey Mae Omela',
    email: 'honeymaeomela@gmail.com',
    contact: '+639123456789',
    bio: 'Dedicated to helping clients find their dream homes.',
  },
  {
    name: 'Venus Villaflor',
    email: 'venusvillaflor123@gmail.com',
    contact: '+639123456789',
    bio: 'Specializes in luxury properties and high-end real estate.',
  },
]

onMounted(async () => {
  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000))
  loading.value = false
})
</script>
<template>
  <div>
    <v-skeleton-loader v-if="loading" type="card"></v-skeleton-loader>

    <div v-else>
      <v-img
        class="darken-image"
        :height="200"
        aspect-ratio="16/9"
        cover
        :src="brokersBg"
        draggable="false"
      ></v-img>

      <div class="intro-text">
        <v-row>
          <v-col class="text-center">
            <h1>Discover Our Best Brokers in Your Area😉</h1>
          </v-col>
        </v-row>
      </div>

      <v-container class="mt-8">
        <v-row justify="end">
          <v-col cols="4">
            <v-text-field
              @focus="search = true"
              @blur="search = false"
              placeholder="Search by name or keyword..."
              class="me-2"
              label="Search"
              variant="outlined"
              color="amber-accent-3"
              rounded="xl"
              hide-details
              clearable
            >
              <template v-slot:prepend-inner>
                <v-icon :color="search ? 'amber-accent-3' : ''">mdi-magnify</v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>

      <v-container>
        <v-row>
          <v-col v-for="(item, idx) in paginatedItems" :key="idx" cols="4">
            <v-card elevation="12" class="my-5 mx-2 d-flex flex-column" height="445">
              <v-sheet
                :color="themeStore.theme === 'light' ? 'yellow-lighten-3' : 'indigo-darken-1 '"
                height="150px"
              ></v-sheet>
              <div class="broker-avatar">
                <v-avatar
                  :image="avatarImage"
                  size="130"
                  :style="{ borderColor: borderColor }"
                  class="bordered-avatar"
                ></v-avatar>
              </div>
              <div class="pt-2 text-center flex-grow-1">
                <v-card-title class="pt-16">{{ item.name }}</v-card-title>
                <div class="mb-3">
                  <v-chip
                    class="me-2"
                    :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
                    size="small"
                    >{{ item.email }}</v-chip
                  >
                  <v-chip
                    :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
                    size="small"
                    >{{ item.contact }}</v-chip
                  >
                </div>
                <p class="px-5 text-disabled">{{ item.bio }}</p>
              </div>

              <v-card-actions class="mt-auto">
                <v-btn color="amber-accent-3" variant="tonal">More Details</v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
                  icon="mdi-facebook-messenger"
                  size="small"
                  variant="tonal"
                  s
                ></v-btn>
                <v-btn
                  :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
                  icon="mdi-facebook"
                  size="small"
                  variant="tonal"
                ></v-btn>
                <v-btn
                  :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'indigo-darken-1  '"
                  icon="mdi-instagram"
                  size="small"
                  variant="tonal"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-pagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :length="totalPages"
        :color="themeStore.theme === 'light' ? 'indigo-darken-4' : 'amber-accent-3  '"
        class="mb-12"
        rounded="circle"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
      ></v-pagination>

      <AppFooter class="mt-12" />
      <ScrollToTopFab />
    </div>
  </div>
</template>

<style scoped>
.intro-text {
  position: absolute;
  top: 11rem;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-shadow: black 0px 5px 15px;
  z-index: 1;
}

.darken-image {
  filter: brightness(0.5); /* Adjust the value as needed */
}

.broker-avatar {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
}

.bordered-avatar {
  border-width: 7px;
  border-style: solid;
}
</style>
