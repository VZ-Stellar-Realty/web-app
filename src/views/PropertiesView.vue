<script setup>
import { ref, onMounted, computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import { getMoneyText } from '@/utils/helpers.js'
import listingBg from '@/assets/images/listing-bg.png'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollToTopFab from '@/components/common/ScrollToTopFab.vue'

const themeStore = useThemeStore()
const loading = ref(true)
const priceRange = ref([5000, 20000000])
const currentPage = ref(1)
const itemsPerPage = 10

const searchCard = computed(() => {
  return themeStore.theme === 'light' ? '#fff59d94' : '#3948ab79'
})

const sliderThumbLabelColor = computed(() => {
  return themeStore.theme === 'light' ? '#5C6BC0' : '#FFF176'
})

onMounted(async () => {
  // Simulate data fetching
  await new Promise((resolve) => setTimeout(resolve, 1000))
  loading.value = false
})

const items = [
  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 1',
    location: 'Location 1',
    description: 'This is a description of Property 1.',
    link: '#',
  },

  {
    image: 'https://via.placeholder.com/300',
    title: 'Property 2',
    location: 'Location 2',
    description: 'This is a description of Property 2.',
    link: '#',
  },
]

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return items.slice(start, end)
})

const totalPages = computed(() => Math.ceil(items.length / itemsPerPage))
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
        :src="listingBg"
        draggable="false"
      ></v-img>

      <div class="intro-text">
        <v-row>
          <v-col class="text-center">
            <h1>Discover Your Dream Property with Us😍</h1>
          </v-col>
        </v-row>
      </div>

      <div class="search-container">
        <v-row justify="center">
          <v-col cols="10" style="padding: 0" class="ps-2">
            <v-card
              :color="searchCard"
              class="search d-flex flex-grow-1 pa-4 rounded-lg"
              style="z-index: 2"
              elevation="24"
            >
              <div class="d-flex align-center" style="width: 100%">
                <div class="mr-3" style="width: 60%">
                  <div class="text-body-2 font-weight-thin pb-1">Transaction</div>
                  <v-select
                    :items="['Buy', 'Rent', 'Assume']"
                    variant="solo-filled"
                    density="compact"
                    placeholder="Select Transaction"
                    hide-details
                    clearable
                  >
                  </v-select>
                </div>

                <div class="mr-3" style="width: 65%">
                  <div class="text-body-2 font-weight-thin pb-1">Location</div>
                  <v-text-field
                    variant="solo-filled"
                    placeholder="All"
                    density="compact"
                    hide-details
                    clearable
                  ></v-text-field>
                </div>

                <div class="mr-3" style="width: 90%">
                  <div class="text-body-2 font-weight-thin pb-1">Property Type</div>
                  <v-select
                    v-model="value"
                    :items="items"
                    variant="solo-filled"
                    density="compact"
                    placeholder="All"
                    multiple
                    clearable
                    hide-details
                  >
                    <template v-slot:selection="{ item, index }">
                      <v-chip v-if="index < 1">
                        <span>{{ item.title }}</span>
                      </v-chip>
                      <span v-if="index === 1" class="text-grey text-caption align-self-center">
                        (+{{ value.length - 1 }} others)
                      </span>
                    </template>
                  </v-select>
                </div>
                <div class="mr-3" style="width: 65%">
                  <div class="text-body-2 font-weight-thin pb-1">Price Range</div>
                  <v-range-slider
                    :color="themeStore.theme === 'light' ? 'indigo-lighten-2' : 'yellow-lighten-2 '"
                    size="small"
                    v-model="priceRange"
                    step="100000"
                    :min="5000"
                    :max="20000000"
                    hide-details
                    focused="true"
                    thumb-label
                    :style="{ '--v-slider-thumb-label-background-color': sliderThumbLabelColor }"
                  >
                    <template v-slot:thumb-label="{ modelValue }">
                      <span>{{ getMoneyText(modelValue) }}</span>
                    </template>
                  </v-range-slider>
                </div>
                <v-btn color="indigo-darken-4" height="45" class="ms-5"> Clear Filter</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="filtered-items my-9">
        <v-container>
          <v-row>
            <v-col v-for="(item, idx) in paginatedItems" :key="idx" cols="6">
              <v-card elevation="5" class="my-3 mx-2">
                <v-img :src="item.image" height="250px"></v-img>
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-subtitle>{{ item.location }}</v-card-subtitle>
                <v-card-text>{{ item.description }}</v-card-text>
                <v-card-actions>
                  <v-btn :href="item.link" target="_blank">View Details</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>

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

      <AppFooter />
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

.search-container {
  position: relative;
  top: -16px;
}

.darken-image {
  filter: brightness(0.7); /* Adjust the value as needed */
}

.v-card.search {
  background: #3948ab79;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

:deep(.v-slider-thumb__label) {
  background-color: var(--v-slider-thumb-label-background-color);
}
:deep(.v-slider-thumb__label::before) {
  color: var(--v-slider-thumb-label-background-color);
}
</style>
